export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'GET 요청만 지원합니다.' });
  const { officeCode, schoolCode, start, end } = req.query;
  if (!officeCode || !schoolCode || !start || !end) {
    return res.status(400).json({ error: '학교 코드와 조회 기간이 필요합니다.' });
  }

  const key = process.env.NEIS_API_KEY;
  if (!key) return res.status(500).json({ error: 'Vercel 환경변수 NEIS_API_KEY가 설정되지 않았습니다.' });

  const params = new URLSearchParams({
    KEY: key, Type: 'json', pIndex: '1', pSize: '100',
    ATPT_OFCDC_SC_CODE: officeCode,
    SD_SCHUL_CODE: schoolCode,
    MLSV_FROM_YMD: start,
    MLSV_TO_YMD: end
  });

  try {
    const response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?${params}`);
    const data = await response.json();
    const rows = data?.mealServiceDietInfo?.[1]?.row || [];
    const meals = rows
      .filter((m) => m.MMEAL_SC_NM === '중식')
      .map((m) => ({
        date: m.MLSV_YMD,
        mealType: m.MMEAL_SC_NM,
        dishes: m.DDISH_NM,
        calories: m.CAL_INFO || '',
        nutrition: m.NTR_INFO || '',
        origin: m.ORPLC_INFO || ''
      }));
    return res.status(200).json({ meals });
  } catch (error) {
    return res.status(500).json({ error: '급식 조회 중 오류가 발생했습니다.', detail: error.message });
  }
};
