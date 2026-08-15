function cleanText(value = '') {
  return String(value)
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/&amp;/g, '&')
    .replace(/\s+\n/g, '\n')
    .trim();
}

function dateLabel(yyyymmdd = '') {
  if (!/^\d{8}$/.test(yyyymmdd)) return yyyymmdd;
  const y = yyyymmdd.slice(0, 4);
  const m = Number(yyyymmdd.slice(4, 6));
  const d = Number(yyyymmdd.slice(6, 8));
  return `${y}년 ${m}월 ${d}일`;
}

export default async function handler(req, res) {
  try {
    const atptCode = String(req.query.atptCode || '').trim();
    const schoolCode = String(req.query.schoolCode || '').trim();
    const from = String(req.query.from || '').replace(/\D/g, '');
    const to = String(req.query.to || '').replace(/\D/g, '');
    const mealRaw = String(req.query.meal || '2');
    const meal = /^[123]$/.test(mealRaw) ? mealRaw : '2';

    if (!atptCode || !schoolCode || !/^\d{8}$/.test(from) || !/^\d{8}$/.test(to)) {
      return res.status(400).json({ error: '학교와 조회 날짜를 정확히 입력하세요.' });
    }

    const key = process.env.NEIS_API_KEY;
    if (!key) return res.status(500).json({ error: 'Vercel 환경변수 NEIS_API_KEY가 설정되지 않았습니다.' });

    const params = new URLSearchParams({
      KEY: key,
      Type: 'json',
      pIndex: '1',
      pSize: '100',
      ATPT_OFCDC_SC_CODE: atptCode,
      SD_SCHUL_CODE: schoolCode,
      MLSV_FROM_YMD: from,
      MLSV_TO_YMD: to,
      MMEAL_SC_CODE: meal
    });

    const response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?${params.toString()}`);
    const data = await response.json();
    const rows = data?.mealServiceDietInfo?.[1]?.row || [];

    const meals = rows.map(row => ({
      date: row.MLSV_YMD,
      dateLabel: dateLabel(row.MLSV_YMD),
      dishes: cleanText(row.DDISH_NM).split('\n').filter(Boolean),
      nutrition: cleanText(row.NTR_INFO),
      origin: cleanText(row.ORPLC_INFO),
      calories: row.CAL_INFO || ''
    }));

    return res.status(200).json({ meals });
  } catch (error) {
    return res.status(500).json({ error: error instanceof Error ? error.message : '급식 조회 중 오류가 발생했습니다.' });
  }
}
