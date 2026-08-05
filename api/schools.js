export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'GET 요청만 지원합니다.' });
  const name = String(req.query.name || '').trim();
  if (name.length < 2) return res.status(400).json({ error: '학교명을 두 글자 이상 입력하세요.' });

  const key = process.env.NEIS_API_KEY;
  if (!key) return res.status(500).json({ error: 'Vercel 환경변수 NEIS_API_KEY가 설정되지 않았습니다.' });

  const params = new URLSearchParams({
    KEY: key, Type: 'json', pIndex: '1', pSize: '100', SCHUL_NM: name
  });

  try {
    const response = await fetch(`https://open.neis.go.kr/hub/schoolInfo?${params}`);
    const data = await response.json();
    const rows = data?.schoolInfo?.[1]?.row || [];
    const result = rows.map((s) => ({
      officeCode: s.ATPT_OFCDC_SC_CODE,
      officeName: s.ATPT_OFCDC_SC_NM,
      schoolCode: s.SD_SCHUL_CODE,
      schoolName: s.SCHUL_NM,
      schoolKind: s.SCHUL_KND_SC_NM,
      location: s.LCTN_SC_NM,
      address: s.ORG_RDNMA
    }));
    return res.status(200).json({ schools: result });
  } catch (error) {
    return res.status(500).json({ error: '학교 검색 중 오류가 발생했습니다.', detail: error.message });
  }
};
