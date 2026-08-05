# 급식 게시자료 프롬프트 생성기 — Vercel 배포용 수정본

## 포함 내용
- Vercel 서버 환경변수 `NEIS_API_KEY` 사용
- 사용자 화면에는 API 키 입력칸 없음
- 학교명 검색 및 학교 선택
- 하루·일주일·한 달·직접 기간의 중식 조회
- 김소리T 제공 실제 예시 이미지 8종
- 프리셋별 스타일 설명과 추천 활용 자료
- 세로 예시 이미지가 잘리지 않도록 `object-fit: contain` 적용
- 프리셋 이름과 실제 이미지 매칭 수정

## 폴더 구조
- `index.html` : 사용자 화면
- `api/schools.js` : 학교 검색 API
- `api/meals.js` : 중식 조회 API
- `public/presets/` : 디자인 프리셋 이미지
- `vercel.json` : Vercel 함수 설정

## 기존 Vercel 프로젝트에 적용하는 방법
1. 이 ZIP 파일을 풉니다.
2. 연결된 GitHub 저장소에서 기존 파일을 삭제하지 말고, 아래 항목을 같은 위치에 덮어씁니다.
   - `index.html`
   - `api` 폴더
   - `public` 폴더
   - `vercel.json`
3. GitHub에서 `Commit changes`를 누릅니다.
4. Vercel이 자동 배포를 시작합니다.
5. Vercel 프로젝트의 Settings → Environment Variables에서
   `NEIS_API_KEY` 값이 등록되어 있는지 확인합니다.
6. 환경변수를 새로 넣거나 수정했다면 반드시 Redeploy 합니다.

## 주의
- `NEIS_API_KEY` 값을 HTML이나 GitHub 파일에 직접 넣지 마세요.
- 이미지 파일 이름이나 `public/presets` 폴더 위치를 바꾸면 사진이 깨질 수 있습니다.
