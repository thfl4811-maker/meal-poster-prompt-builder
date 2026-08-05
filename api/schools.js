export default async function handler(req, res) {
  try {
    const query = String(req.query.query || '').trim();
    if (!query) return res.status(400).json({ error: '학교명을 입력하세요.' });

    const key = process.env.NEIS_API_KEY;
    if (!key) return res.status(500).json({ error: 'Vercel 환경변수 NEIS_API_KEY가 설정되지 않았습니다.' });

    const params = new URLSearchParams({
      KEY: key,
      Type: 'json',
      pIndex: '1',
      pSize: '100',
      SCHUL_NM: query
    });

    const response = await fetch(`https://open.neis.go.kr/hub/schoolInfo?${params.toString()}`);
    const data = await response.json();
    const rows = data?.schoolInfo?.[1]?.row || [];

    const schools = rows.map(row => ({
      name: row.SCHUL_NM,
      atptCode: row.ATPT_OFCDC_SC_CODE,
      schoolCode: row.SD_SCHUL_CODE,
      region: row.ATPT_OFCDC_SC_NM,
      address: row.ORG_RDNMA || '',
      kind: row.SCHUL_KND_SC_NM || ''
    }));

    return res.status(200).json({ schools });
  } catch (error) {
    return res.status(500).json({ error: error instanceof Error ? error.message : '학교 검색 중 오류가 발생했습니다.' });
  }
}
