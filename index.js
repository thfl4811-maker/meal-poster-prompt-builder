
const presets = [
  {
    id:'diorama',
    name:'아기자기한 학교마을 디오라마',
    image:'assets/diorama-day.png',weeklyImage:'weekly/diorama-weekly.jpg',
    fit:['일일식단','주간식단','행사식','개학식'],
    descDay:'학교 건물·급식실·정원·학생·음식이 하나의 작은 마을처럼 이어지는 따뜻한 미니어처 디오라마 스타일',
    descWeek:'월~금 5일 식단을 학교마을 곳곳의 게시판, 광장, 급식실 장면으로 나누어 보여주는 주간형 디오라마',
    descCustom:'선택한 기간만큼 학교마을 속 날짜별 장면을 나누어 구성하는 디오라마형 일정 게시자료',
    promptDay:`[디자인 프리셋: 아기자기한 학교마을 미니어처 디오라마]\n위에서 비스듬히 내려다보는 고정밀 학교마을 미니어처 디오라마로 표현한다. 단순한 포스터 배경에 학생 모형을 배치하는 방식이 아니라, 학교 건물·급식실·배식대·작은 광장·돌길·정원·화단·나무·벤치·울타리·가로등·화분이 서로 연결된 하나의 작은 학교마을을 구성한다.\n\n전체 공간은 실제 건축 모형이나 정교한 인형의 집처럼 보여야 하며, 학생·조리종사자·급식 공간·음식·주변 환경을 모두 동일한 축소 비율의 미니어처로 표현한다. 학교 건물과 작은 급식실이 화면 가장자리를 감싸고, 중앙에는 오늘의 음식이나 메뉴를 상징하는 공간을 배치한다. 학생들은 작은 광장과 산책로를 따라 메뉴를 살펴보고, 친구와 이야기하고, 손을 들거나, 배식대에서 급식을 받는 자연스러운 행동을 한다.\n\n주변에는 낮은 흰색 울타리와 작은 대문, 돌 또는 벽돌 산책로, 미니어처 학교 건물과 시계탑, 작은 급식실과 투명 배식대, 나무 벤치와 가로등, 꽃이 핀 화단과 둥근 나무, 화분·작은 안내판·정원 장식, 학생들이 모여 있는 작은 광장을 풍부하게 배치한다.\n\n전체 분위기는 귀엽고 아기자기하며 따뜻한 동화 속 학교마을처럼 표현한다. 따뜻한 햇빛, 부드러운 그림자, 얕은 심도, 틸트 시프트 효과를 적용하여 실제 축소 모형을 매크로 카메라로 촬영한 듯한 질감을 만든다. 학생과 음식만 크게 확대하지 말고, 주변 학교 환경이 화면 전체의 최소 50% 이상을 차지하도록 한다. 음식과 학생, 학교 공간이 따로 떨어진 요소가 아니라 하나의 연속된 작은 세계처럼 연결되어야 한다.\n\n화면 하단의 급식 트레이를 지나치게 크게 확대하지 않는다. 식단 음식은 학교마을 속 중앙 광장이나 급식실 앞에 전시된 특별한 미니어처 음식 조형물처럼 자연스럽게 배치한다. 제목과 식단 정보는 디오라마 위를 덮는 거대한 흰색 메뉴판으로 만들지 않는다. 학교 건물의 게시판, 나무 간판, 작은 현수막 또는 화면 상단 여백을 활용해 자연스럽게 배치한다. 글자 영역은 전체 화면의 약 30~35% 이내로 제한하고, 나머지 공간에는 정교한 학교마을 디오라마가 충분히 보이게 한다.\n\n[구도 제외 요소]\n- 흰 배경 위에 메뉴판과 학생만 배치한 일반 인포그래픽\n- 화면 대부분을 차지하는 거대한 음식 접시나 급식 트레이\n- 실제 크기의 음식 주변에 작은 학생만 세워 놓은 장면\n- 배경이 비어 있는 스튜디오 촬영형 구성\n- 학교 건물과 주변 환경이 거의 보이지 않는 구성\n- 학생 몇 명만 장식처럼 배치한 단순 포스터\n- 공사장, 크레인, 사다리, 작업자\n- 과도하게 사실적인 실사 인물\n- 광고용 제품 사진처럼 보이는 음식 클로즈업\n\n[삽입 정보]\n제목: [제목]\n날짜: [날짜]\n부제: [행사/특식 문구]\n식단: [식단 전체]\n하단 문구: [안내 문구]`,
    promptWeek:`[디자인 프리셋: 아기자기한 학교마을 미니어처 디오라마 - 주간 5일 버전]\n위에서 비스듬히 내려다보는 고정밀 학교마을 미니어처 디오라마로 표현한다. 월요일부터 금요일까지 5일 식단을 하나의 커다란 학교마을 안에서 자연스럽게 나누어 보여준다. 화면 속 학교마을은 하나로 연결되어 있어야 하며, 각 요일은 학교 건물의 게시판, 작은 광장, 급식실 앞 테이블, 정원 코너, 산책로 안내판 등으로 구분한다.\n\n월~금 요일별 섹션은 분절된 표처럼 딱딱하게 자르지 말고, 학교마을 속 5개의 미니 장면처럼 구성한다. 예를 들어 월요일은 정문 옆 게시판, 화요일은 급식실 앞 안내판, 수요일은 중앙광장 전시대, 목요일은 정원 산책로, 금요일은 학교 건물 벽면 현수막처럼 표현한다. 각 요일마다 작은 학생들과 음식 조형물이 등장하되, 전체 세계관과 축소 비율은 완전히 동일해야 한다.\n\n학교 환경은 화면의 절반 이상을 차지하도록 유지하고, 중앙에 거대한 메뉴판을 올려 디오라마를 가리지 않는다. 제목은 상단 여백 또는 학교 간판 형태로, 주간 식단 정보는 각 날짜의 작은 게시판이나 나무 프레임 속에 넣는다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 식단: [월~금 5일 식단]\n하단 문구: [주간 안내 문구]`,
    promptCustom:`[디자인 프리셋: 아기자기한 학교마을 미니어처 디오라마 - 기간 지정 버전]\n선택한 날짜 수만큼 학교마을 속 장면을 나누어 구성한다. 전체는 하나의 미니어처 학교마을이고, 각 날짜는 학교 건물 게시판·광장·정원·배식대 등으로 자연스럽게 구분한다. 거대한 흰색 메뉴판과 거대한 음식 접시는 사용하지 않는다. 학교 건물, 급식실, 광장, 돌길, 울타리, 화단, 나무, 벤치, 가로등, 학생들이 모두 하나의 연속된 작은 세계를 이뤄야 한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 식단: [선택 기간 식단]\n하단 문구: [안내 문구]`
  },
  {
    id:'blackgold',
    name:'넷플릭스 스타일 블랙골드 영화포스터',
    image:'assets/blackgold-day.png',weeklyImage:'weekly/blackgold-weekly.jpg',
    fit:['선택급식','대결형','행사성 홍보'],
    descDay:'블랙 배경과 골드·레드 포인트로 메뉴 대결이나 특식 홍보를 영화 포스터처럼 강렬하게 표현',
    descWeek:'이번 주 메뉴 라인업이나 선택급식 시리즈를 블랙골드 무드의 에피소드 포스터처럼 표현',
    descCustom:'선택한 기간의 주요 메뉴를 cinematic한 시리즈 포스터 느낌으로 정리',
    promptDay:`[디자인 프리셋: 넷플릭스 스타일 블랙골드 영화포스터]\n강렬한 블랙 배경 위에 골드·레드 포인트 조명을 사용한 시네마틱 영화 포스터 스타일로 표현한다. 고급스럽고 극적인 분위기, 강한 대비, 집중 조명, 은은한 연기 효과를 활용한다. 제목은 크고 임팩트 있게 배치하고, 주요 메뉴는 영화의 주인공처럼 시선을 압도하도록 표현한다.\n\n선택급식 A/B 대결인 경우에는 화면을 좌우 또는 상하로 명확하게 나누어 각 메뉴의 개성을 극적으로 보여준다. 왼쪽은 깊고 묵직한 골드톤, 오른쪽은 열정적인 레드·오렌지톤처럼 대비를 주어도 좋다. 음식은 광고 사진처럼 지나치게 제품컷 느낌이 아니라 영화 포스터의 메인 오브제로 보이게 한다.\n\n영화 포스터처럼 보이되 실제 브랜드 로고나 OTT 로고는 직접 사용하지 않는다. 하단 문구는 짧고 힘있게 정리한다.\n\n[삽입 정보]\n제목: [제목]\n부제: [짧은 카피]\n대결 메뉴 또는 메인 메뉴: [식단 정보]\n하단 안내 문구: [안내 문구]`,
    promptWeek:`[디자인 프리셋: 넷플릭스 스타일 블랙골드 영화포스터 - 주간 5일 버전]\n이번 주 5일 급식 또는 선택급식 라인업을 마치 한 시즌의 에피소드 포스터 시리즈처럼 표현한다. 전체는 블랙골드 무드로 통일하고, 월~금 5개 장면을 카드형 시네마 프레임으로 보여준다. 각 요일별 핵심 메뉴를 하루의 대표 장면처럼 보여주되, 제목·주간 기간·짧은 홍보 문구를 함께 넣는다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 대표 메뉴: [월~금 식단]\n하단 문구: [주간 안내 문구]`,
    promptCustom:`[디자인 프리셋: 넷플릭스 스타일 블랙골드 영화포스터 - 기간 지정 버전]\n선택한 날짜 수만큼 시네마틱 포스터 카드 또는 에피소드 컷으로 구성한다. 전체 무드는 블랙, 골드, 레드 계열의 고급스럽고 강렬한 대비로 유지한다. 각 날짜별 메뉴는 강한 시각적 중심을 갖도록 표현한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 대표 메뉴: [기간 식단]\n하단 문구: [안내 문구]`
  },
  {
    id:'choice-guide',
    name:'선택급식 A/B 설명형',
    image:'assets/choice-guide-day.png',weeklyImage:'weekly/choice-guide-weekly.jpg',
    fit:['선택급식','안내문','학생용 설명'],
    descDay:'학생들이 선택급식 참여 방법을 쉽게 이해하도록 A/B 메뉴와 배식 절차를 또렷하게 설명하는 안내형 포스터',
    descWeek:'5일치 선택급식 계획 또는 요일별 선택 항목을 정리해 보여주는 설명형 주간 안내',
    descCustom:'선택한 기간 동안의 선택 메뉴·방법·기억 문구를 한눈에 정리하는 안내형 레이아웃',
    promptDay:`[디자인 프리셋: 선택급식 A/B 설명형]\n학생들이 선택급식의 구조를 빠르게 이해할 수 있도록 친절하고 명확한 안내형 포스터로 제작한다. 학교 급식실 또는 배식대 장면을 밝고 깔끔하게 보여주고, 상단에는 제목과 핵심 안내 문구를 배치한다.\n\n중간에는 A메뉴와 B메뉴를 균형 있게 비교해 보여주고, 어떤 이름으로 선택하면 되는지 말풍선 또는 강조 박스로 명확하게 넣는다. 하단에는 '내가 미리 선택한 메뉴를 기억하고 배식대에서 그대로 말하면 된다'는 흐름이 바로 이해되도록 단계형으로 정리한다.\n\n문구는 기본 제공하되 교사가 쉽게 수정할 수 있어야 하므로, 문장은 또렷하고 일반적인 표현으로 설정한다.\n\n[기본 문구 예시 - 교사 수정 가능]\n상단: 내일은 자율선택급식!\n설명: 내가 선택한 선호도 조사를 미리 생각하고, 내일 배식대에서 배식받아요.\n안내: 내일 두 메뉴가 있는 배식대에 서면 주저하지 말고 오늘 미리 생각한 선택 메뉴를 골라주세요.\n말풍선 A: 저는 [A메뉴]요\n말풍선 B: 저는 [B메뉴]요\n마무리: 라고 선택한 후 배식받으면 됩니다!\n하단: 책임있는 선택으로 즐거운 점심시간을 만들어요!\n\n[삽입 정보]\n제목: [제목]\nA메뉴: [A메뉴]\nB메뉴: [B메뉴]\n추가 식단: [공통 식단]\n안내 문구: [교사 수정 문구]`,
    promptWeek:`[디자인 프리셋: 선택급식 A/B 설명형 - 주간 5일 버전]\n월~금 5일 동안 어떤 선택급식이 있는지, 각 날짜별 A/B 메뉴가 무엇인지, 학생이 어떻게 기억하고 배식받으면 되는지를 주간 안내형으로 보여준다. 레이아웃은 너무 복잡하지 않게 유지하고, 날짜별로 A/B 메뉴를 작은 카드로 반복 배치한다. 상단에는 선택급식 운영 안내, 중간에는 요일별 메뉴, 하단에는 공통 참여 방법을 넣는다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 A/B 메뉴: [월~금]\n공통 안내 문구: [교사 수정 문구]`,
    promptCustom:`[디자인 프리셋: 선택급식 A/B 설명형 - 기간 지정 버전]\n선택한 기간 동안의 A/B 선택 메뉴를 날짜별 안내 카드로 정리한다. 학생이 이해하기 쉬운 설명형 포스터로 구성하고, 각 날짜마다 어떤 메뉴를 선택하면 되는지 짧고 명확하게 보여준다. 기본 문구는 수정 가능하도록 일반적인 안내문으로 유지한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 A/B 메뉴: [기간 식단]\n안내 문구: [교사 수정 문구]`
  },
  {
    id:'white-minimal',
    name:'화이트 미니멀 선택 식단표',
    image:'assets/white-minimal-day.png',weeklyImage:'weekly/white-minimal-weekly.jpg',
    fit:['일일식단','주간식단','깔끔한 안내'],
    descDay:'흰 배경과 넉넉한 여백, 또렷한 음식 사진으로 식단을 깔끔하고 단정하게 전달하는 스타일',
    descWeek:'월~금 5일 식단을 표 형태가 아닌 미니멀 카드형으로 정돈하여 보여주는 주간 식단표',
    descCustom:'선택한 기간만큼 날짜별 식단을 여백감 있게 정리하는 화이트 베이스 레이아웃',
    promptDay:`[디자인 프리셋: 화이트 미니멀 선택 식단표]\n깨끗한 흰 배경과 넉넉한 여백을 중심으로 한 화이트 미니멀 스타일로 표현한다. 전체 인상은 산뜻하고 전문적이며, 학교 게시자료로서 가독성이 매우 좋아야 한다. 음식 사진은 또렷하고 정돈된 구도로 배치하고, 제목·날짜·메뉴명·알레르기 표기·영양정보를 질서 있게 정리한다.\n\n선택식단이 있다면 메인 메뉴 2가지는 좌우 또는 상하로 균형 있게 보여주고, 가운데에 OR 또는 선택 표시를 둔다. 나머지 공통 메뉴는 작은 정사각형 또는 원형 사진 카드로 정리한다. 전체적으로 군더더기 없는 깔끔함이 핵심이다.\n\n[삽입 정보]\n제목: [제목]\n날짜: [날짜]\n메뉴: [전체 식단]\n영양정보: [영양 수치]\n하단 문구: [안내 문구]`,
    promptWeek:`[디자인 프리셋: 화이트 미니멀 선택 식단표 - 주간 5일 버전]\n월~금 5일 식단을 흰 배경 위에 미니멀한 카드 또는 5열 그리드로 정리한다. 각 요일은 동일한 비율의 카드로 맞추고, 날짜·대표메뉴·공통 메뉴·간단한 영양 정보 또는 핵심 포인트를 넣는다. 전체적으로 깔끔하고 조용한 디자인, 정돈된 정보 전달이 핵심이다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 식단: [월~금]\n하단 문구: [안내 문구]`,
    promptCustom:`[디자인 프리셋: 화이트 미니멀 선택 식단표 - 기간 지정 버전]\n선택한 날짜 수만큼 화이트 베이스 카드형 레이아웃으로 구성한다. 과장된 장식 대신 균형 잡힌 여백, 읽기 쉬운 타이포그래피, 정돈된 메뉴 사진이 핵심이다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 식단: [기간 식단]\n영양정보: [선택 사항]`
  },
  {
    id:'premium-special',
    name:'프리미엄 특식',
    image:'assets/premium-special-day.png',weeklyImage:'weekly/premium-special-weekly.jpg',
    fit:['특식','행사식','레스토랑 분위기'],
    descDay:'호텔 다이닝이나 고급 레스토랑 메뉴판 같은 분위기로 특식의 품격을 살리는 프리미엄 포스터',
    descWeek:'이번 주 특식·행사식을 중심으로 고급스럽게 묶어 보여주는 스페셜 주간 포스터',
    descCustom:'선택한 기간의 행사식·특식을 레스토랑 시리즈처럼 표현하는 프리미엄 버전',
    promptDay:`[디자인 프리셋: 프리미엄 특식]\n고급 레스토랑 메뉴판 또는 프리미엄 다이닝 포스터 같은 분위기로 표현한다. 블랙, 딥네이비, 차콜, 다크 브라운 계열 배경에 골드 또는 아이보리 타이포그래피를 사용한다. 음식은 정갈하고 고급스럽게 담아내며, 메인 메뉴가 가장 중심에 오고 다른 음식들은 레스토랑 코스 요리처럼 조화롭게 배치한다.\n\n과도하게 화려한 장식보다 품위 있는 분위기, 조용한 고급감, 메뉴의 정돈된 진열이 핵심이다. 특식명과 날짜, 짧은 카피, 전체 메뉴, 영양정보를 세련되게 정리한다.\n\n[삽입 정보]\n제목: [제목]\n날짜: [날짜]\n부제: [특식 문구]\n식단: [전체 식단]\n영양정보: [영양 수치]`,
    promptWeek:`[디자인 프리셋: 프리미엄 특식 - 주간 5일 버전]\n이번 주 5일 식단 중 특식, 행사식, 시그니처 메뉴를 중심으로 고급 레스토랑 라인업처럼 구성한다. 날짜별 작은 카드 또는 코스 리스트 형태를 사용하되, 전체 무드는 통일된 프리미엄 감성을 유지한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 대표 특식: [월~금]\n영양정보 또는 부가 설명: [선택 사항]`,
    promptCustom:`[디자인 프리셋: 프리미엄 특식 - 기간 지정 버전]\n선택한 날짜 수만큼의 행사식·특식을 고급 레스토랑 시리즈처럼 보여준다. 블랙 또는 다크톤 배경, 고급 타이포그래피, 정갈한 음식 구성으로 품격 있는 분위기를 유지한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 메뉴: [기간 식단]`
  },
  {
    id:'ingredient-ad',
    name:'재료 몰입형 광고',
    image:'assets/ingredient-ad-day.png',weeklyImage:'weekly/ingredient-ad-weekly.jpg',
    fit:['후식/과일','재료 강조','광고형'],
    descDay:'과일·후식·특정 재료를 주인공으로 크게 강조하여 광고처럼 몰입감 있게 보여주는 스타일',
    descWeek:'5일간 과일·후식·간식 라인업을 재료 중심의 비주얼 광고 시리즈로 보여주는 주간형',
    descCustom:'선택한 기간 동안 특정 재료군이나 후식군을 테마로 시각적 몰입감을 살리는 구성',
    promptDay:`[디자인 프리셋: 재료 몰입형 광고]\n하나의 재료 또는 후식이 화면의 주인공이 되도록 광고형 비주얼로 표현한다. 과일이라면 과즙이 튀는 장면, 시원한 음료라면 얼음과 유리잔, 디저트라면 질감이 풍부하게 느껴지는 클로즈업을 사용한다. 다만 학교 게시자료이므로 과도하게 상업 광고처럼 복잡하지 않게 정리한다.\n\n배경은 깨끗하고 밝거나, 재료 색감에 맞는 선명한 그라데이션을 사용할 수 있다. 제목과 날짜, 재료명 또는 후식명, 짧은 카피를 명확하게 넣고, 필요한 경우 작은 학생 미니어처 또는 급식 요소를 곁들여 학교 급식 맥락이 유지되게 한다.\n\n[삽입 정보]\n제목: [제목]\n날짜: [날짜]\n메인 재료/후식: [주인공 식단]\n짧은 카피: [홍보 문구]\n보조 정보: [선택 사항]`,
    promptWeek:`[디자인 프리셋: 재료 몰입형 광고 - 주간 5일 버전]\n월~금 5일의 과일, 후식, 음료, 디저트 또는 특정 재료를 5개의 작은 광고 카드처럼 보여준다. 각 날짜별 주인공 재료가 다르게 보이도록 구성하되 전체 디자인 톤은 통일한다. 색감은 신선하고 선명하며, 과즙·질감·재료의 매력을 강조한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 주인공 재료/후식: [월~금]\n하단 문구: [안내 문구]`,
    promptCustom:`[디자인 프리셋: 재료 몰입형 광고 - 기간 지정 버전]\n선택한 기간 동안의 후식·과일·음료·특정 재료를 날짜별 광고 컷으로 구성한다. 각 날짜마다 주인공 재료가 한눈에 들어오도록 크게 보여주고, 전체 톤은 신선하고 선명하게 유지한다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 후식/재료: [기간 식단]`
  },
  {
    id:'food-character',
    name:'친근한 푸드 캐릭터',
    image:'assets/food-character-day.png',weeklyImage:'weekly/food-character-weekly.jpg',
    fit:['안내문','사과문','생활지도'],
    descDay:'귀엽고 따뜻한 음식 캐릭터와 말풍선으로 안내문·사과문·캠페인을 부드럽게 전달하는 스타일',
    descWeek:'5일치 캠페인, 위생 안내, 식생활 약속 등을 캐릭터 시리즈 카드로 전개하는 주간 버전',
    descCustom:'선택한 기간의 안내문을 부담 없이 전달하는 친근한 캐릭터형 레이아웃',
    promptDay:`[디자인 프리셋: 친근한 푸드 캐릭터]\n귀엽고 친근한 음식 캐릭터 또는 표정이 있는 식재료 캐릭터를 중심으로 따뜻한 안내형 포스터를 제작한다. 배경은 밝고 부드러우며, 말풍선·작은 아이콘·둥근 도형을 활용해 부담 없이 읽히도록 한다. 교직원용 사과 문구, 학생 안내 문구, 생활지도 문구를 너무 무겁지 않게 전달하기 좋다.\n\n메인 캐릭터는 과하지 않게 귀엽고 정돈된 느낌이어야 하며, 텍스트가 잘 읽히는 레이아웃이어야 한다. 상단에는 제목, 중간에는 캐릭터와 핵심 안내 문구, 하단에는 필요한 설명이나 추가 문장을 넣는다.\n\n[삽입 정보]\n제목: [제목]\n캐릭터 콘셉트: [음식/과일/급식 캐릭터]\n핵심 안내 문구: [교사 입력 문구]\n보조 문구: [추가 설명]`,
    promptWeek:`[디자인 프리셋: 친근한 푸드 캐릭터 - 주간 5일 버전]\n월~금 5일 동안의 캠페인, 위생수칙, 감사 인사, 알림 사항 등을 귀여운 캐릭터 시리즈 카드로 보여준다. 각 요일마다 다른 표정이나 다른 음식 캐릭터를 사용해도 되지만, 전체 스타일은 통일한다. 따뜻하고 부드러운 인상이 중요하다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n요일별 안내 문구: [월~금]\n캐릭터 콘셉트: [공통 캐릭터 테마]`,
    promptCustom:`[디자인 프리셋: 친근한 푸드 캐릭터 - 기간 지정 버전]\n선택한 날짜 수만큼의 안내문을 친근한 캐릭터 카드로 정리한다. 말풍선, 둥근 프레임, 부드러운 색감, 부담 없는 문체를 활용해 읽기 쉽게 만든다.\n\n[삽입 정보]\n제목: [제목]\n기간: [시작일]~[종료일]\n날짜별 안내 문구: [기간 안내 내용]`
  }
];

let state = {
  mode:'day',
  selectedPreset:'diorama',
  selectedSchool:null
};

const presetGrid = document.getElementById('presetGrid');
const promptBox = document.getElementById('promptBox');
const hero = document.getElementById('hero');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const copyStatus = document.getElementById('copyStatus');
const rangeRow = document.getElementById('rangeRow');
const rangeMode = document.getElementById('rangeMode');
const rangeHint = document.getElementById('rangeHint');
const moodSelect = document.getElementById('moodSelect');
const sizeSelect = document.getElementById('sizeSelect');
const titleInput = document.getElementById('titleInput');
const subtitleInput = document.getElementById('subtitleInput');
const mainMenuInput = document.getElementById('mainMenuInput');
const footerInput = document.getElementById('footerInput');
const mealEditInput = document.getElementById('mealEditInput');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');

function dayDiffInclusive(start, end){
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  if (isNaN(s) || isNaN(e) || e < s) return 3;
  return Math.min(7, Math.max(1, Math.round((e - s) / 86400000) + 1));
}

function getModeInfo(preset){
  const count = dayDiffInclusive(startDate.value, endDate.value);
  if(state.mode === 'day'){
    return {
      label:'하루 게시자료',
      desc:preset.descDay,
      titleSample:'오늘의 식단 / 단일 포스터',
      prompt:preset.promptDay,
      thumbType:'single',
      count:1
    };
  }
  if(state.mode === 'week' || state.mode === 'month'){
    return {
      label: state.mode === 'month' ? '한 달 게시자료' : '주간 5일 게시자료',
      desc:preset.descWeek,
      titleSample: state.mode === 'month' ? '주차별 요약형' : '월~금 5일 주간형',
      prompt:preset.promptWeek,
      thumbType:'week',
      count:5
    };
  }
  return {
    label:`기간 직접 설정 (${count}일)`,
    desc:preset.descCustom,
    titleSample:`선택 기간 ${count}일 구성`,
    prompt:preset.promptCustom,
    thumbType:'custom',
    count
  };
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function renderThumb(preset, modeInfo, small=false){
  const imgPath = (state.mode === 'week' || state.mode === 'month' || state.mode === 'custom') ? (preset.weeklyImage || preset.image) : preset.image;
  if(modeInfo.thumbType === 'single'){
    return `<div class="thumb thumb-single"><img src="${imgPath}" alt="${preset.name}"></div>`;
  }
  if(modeInfo.thumbType === 'week'){
    const cls = small ? 'thumb thumb-single' : 'hero-media';
    return `<div class="${cls}"><img src="${imgPath}" alt="${preset.name} 주간 예시"></div>`;
  }
  const cls = small ? 'thumb thumb-single' : 'hero-media';
  return `<div class="${cls}"><img src="${imgPath}" alt="${preset.name} 기간 예시"></div>`;
}

function renderPresets(){
  presetGrid.innerHTML = presets.map(preset => {
    const modeInfo = getModeInfo(preset);
    return `
      <article class="preset-card ${state.selectedPreset===preset.id?'active':''}" data-id="${preset.id}">
        <div class="thumb-wrap">${renderThumb(preset, modeInfo, true)}</div>
        <div class="preset-body">
          <div class="preset-name">${preset.name}</div>
          <div class="preset-desc">${modeInfo.desc}</div>
          <div class="pill-row">
            <span class="pill orange">${modeInfo.label}</span>
            ${preset.fit.slice(0,2).map(tag=>`<span class="pill">${tag}</span>`).join('')}
          </div>
          <div class="source-note">김소리T 제공 예시자료 기준</div>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.preset-card').forEach(card => {
    card.addEventListener('click', () => {
      state.selectedPreset = card.dataset.id;
      updateUI();
    });
  });
}

function renderHero(){
  const preset = presets.find(p => p.id===state.selectedPreset);
  const modeInfo = getModeInfo(preset);
  const media = state.mode === 'day'
    ? `<div class="hero-media"><img src="${preset.image}" alt="${preset.name}"></div>`
    : renderThumb(preset, modeInfo, false);

  const modeExampleMap = {
    day:'예시 결과: 오늘의 식단 1장',
    week:'예시 결과: 주간 5일 시리즈',
    custom:`예시 결과: 선택 기간 ${modeInfo.count}일`
  };

  hero.innerHTML = `
    <div class="hero">
      ${media}
      <div>
        <h2>${preset.name}</h2>
        <p>${modeInfo.desc}</p>
        <div class="meta-list">
          <div class="meta"><b>현재 게시 범위</b><span>${modeInfo.label}</span></div>
          <div class="meta"><b>예시 카드 형태</b><span>${modeExampleMap[state.mode]}</span></div>
          <div class="meta"><b>추천 사용 상황</b><span>${preset.fit.join(' · ')}</span></div>
          <div class="meta"><b>프롬프트 기준</b><span>${modeInfo.titleSample}</span></div>
          <div class="meta"><b>선택 분위기</b><span>${moodSelect.value}</span></div>
          <div class="meta"><b>디자인 사이즈</b><span>${getSizeMeta().label}</span></div>
        </div>
      </div>
    </div>
  `;
}

function parseCleanupRules(text){
  return (text || '').split(/\n+/).map(line => line.trim()).filter(Boolean).map(line => {
    if(line.includes('=>')){
      const parts = line.split('=>');
      const from = (parts.shift() || '').trim();
      const to = parts.join('=>').trim();
      return {type:'replace', from, to};
    }
    return {type:'remove', from:line, to:''};
  }).filter(rule => rule.from);
}
function applyCleanupRulesToText(text){
  const rules = parseCleanupRules(cleanupRulesInput.value);
  let output = text || '';
  rules.forEach(rule => {
    if(!rule.from) return;
    output = output.split(rule.from).join(rule.to || '');
  });
  output = output
    .replace(/[ \t]+\n/g,'\n')
    .replace(/\n{3,}/g,'\n\n')
    .replace(/\n\s+\n/g,'\n\n')
    .trim();
  return output;
}
function buildMealTextFromLoadedMeals(meals){
  return (meals || []).map(m => {
    const lines = [`[${m.dateLabel}]`, ...m.dishes];
    if(m.nutrition) lines.push(`영양정보: ${m.nutrition}`);
    return lines.join('\n');
  }).join('\n\n');
}
function refillMealEditor(useCurrentRules=true){
  const source = state.rawMealText || buildMealTextFromLoadedMeals(state.loadedMeals);
  mealEditInput.value = useCurrentRules ? applyCleanupRulesToText(source) : source;
  updatePrompt();
}

function getSizeMeta(){
  const map = {
    kiosk_9_16: {label:'키오스크 세로형 9:16', ratio:'9:16', usage:'학교 키오스크·세로형 디지털사이니지', detail:'권장 해상도 1080×1920'},
    tv_16_9: {label:'TV·디지털사이니지 가로형 16:9', ratio:'16:9', usage:'TV·가로형 디지털사이니지', detail:'권장 해상도 1920×1080'},
    a4_portrait: {label:'A4 세로형', ratio:'210:297', usage:'A4 인쇄 세로형', detail:'출력용 세로 레이아웃'},
    a4_landscape: {label:'A4 가로형', ratio:'297:210', usage:'A4 인쇄 가로형', detail:'출력용 가로 레이아웃'},
    a3_portrait: {label:'A3 세로형', ratio:'297:420', usage:'A3 인쇄 세로형', detail:'확대 게시용 세로 레이아웃'},
    a3_landscape: {label:'A3 가로형', ratio:'420:297', usage:'A3 인쇄 가로형', detail:'확대 게시용 가로 레이아웃'},
    a2_portrait: {label:'A2 세로형', ratio:'420:594', usage:'A2 인쇄 세로형', detail:'게시판용 대형 세로 레이아웃'},
    a2_landscape: {label:'A2 가로형', ratio:'594:420', usage:'A2 인쇄 가로형', detail:'게시판용 대형 가로 레이아웃'},
    a1_portrait: {label:'A1 세로형', ratio:'594:841', usage:'A1 인쇄 세로형', detail:'행사용 대형 세로 포스터'},
    a1_landscape: {label:'A1 가로형', ratio:'841:594', usage:'A1 인쇄 가로형', detail:'행사용 대형 가로 포스터'}
  };
  return map[sizeSelect.value] || map.kiosk_9_16;
}

function updatePrompt(){
  const preset = presets.find(p => p.id===state.selectedPreset);
  const modeInfo = getModeInfo(preset);
  const mood = moodSelect.value;
  const sizeMeta = getSizeMeta();
  copyStatus.textContent = '';

  const editedMealText = mealEditInput.value.trim();
  const mealText = editedMealText || (state.loadedMeals.length
    ? state.loadedMeals.map(m => {
        const lines = [`[${m.dateLabel}]`, ...m.dishes];
        if(m.nutrition) lines.push(`영양정보: ${m.nutrition}`);
        return lines.join('\n');
      }).join('\n\n')
    : '[나이스 식단을 아직 불러오지 않았습니다.]');

  const insertInfo = `[삽입 정보]
제목: ${titleInput.value.trim() || '[제목]'}
부제: ${subtitleInput.value.trim() || '[짧은 카피]'}
대결 메뉴 또는 메인 메뉴: ${mainMenuInput.value.trim() || '[식단 정보]'}
하단 안내 문구: ${footerInput.value.trim() || '[안내 문구]'}`;

  promptBox.value = `${modeInfo.prompt}

${insertInfo}

[출력 사이즈 설정]
출력 형식: ${sizeMeta.label}
권장 비율: ${sizeMeta.ratio}
사용 용도: ${sizeMeta.usage}
추가 지시: ${sizeMeta.detail}
레이아웃은 반드시 위 출력 비율에 맞게 최적화하고, 중요한 제목·식단·안내 문구가 잘리지 않도록 안정적으로 배치한다.

[나이스에서 불러온 실제 식단]
${mealText}

위 식단은 날짜별 순서 그대로 빠짐없이 반영한다.
메뉴명, 알레르기 번호, 영양정보를 임의로 바꾸거나 생략하지 않는다.

[추가 분위기 설정]
전체 분위기는 "${mood}" 느낌으로 조정한다.
같은 디자인 프리셋을 유지하되, 배경 색감·조명·장식·학생의 표정과 행동·음식의 연출 정도를 이 분위기에 맞게 미세 조정한다.
제목, 부제, 메뉴명, 날짜, 알레르기 번호, 영양정보, 안내 문구는 바꾸거나 생략하지 않는다.`;
}

function updateRangeVisibility(){
  rangeHint.textContent =
    state.mode === 'day' ? '현재 자료 구성: 하루 게시자료' :
    state.mode === 'week' ? '현재 자료 구성: 일주일 · 월~금 5일 게시자료' :
    state.mode === 'month' ? '현재 자료 구성: 한 달 · 주차별 요약 자료' :
    `현재 자료 구성: 직접 기간 · ${dayDiffInclusive(startDate.value,endDate.value)}일치`;
}

function updateModeButtons(){
  rangeMode.value = state.mode;
}

function syncDates(){
  const base = new Date(startDate.value + 'T00:00:00');
  if(isNaN(base)) return;
  const end = new Date(base);
  if(state.mode === 'day'){
    // 하루 자료에서도 종료 날짜 입력칸은 열어 두고,
    // 실제 프롬프트는 기준 날짜를 우선 사용한다.
  }else if(state.mode === 'week'){
    const day = base.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const monday = new Date(base);
    monday.setDate(base.getDate() + mondayOffset);
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);
    startDate.value = monday.toISOString().slice(0,10);
    endDate.value = friday.toISOString().slice(0,10);
  }else if(state.mode === 'month'){
    const first = new Date(base.getFullYear(), base.getMonth(), 1);
    const last = new Date(base.getFullYear(), base.getMonth()+1, 0);
    startDate.value = first.toISOString().slice(0,10);
    endDate.value = last.toISOString().slice(0,10);
  }
}

function updateUI(){
  updateModeButtons();
  updateRangeVisibility();
  renderPresets();
  renderHero();
  updatePrompt();
}

rangeMode.addEventListener('change',()=>{state.mode=rangeMode.value;syncDates();updateUI();});
[startDate,endDate].forEach(el => el.addEventListener('change',()=>{syncDates();updateUI();}));
moodSelect.addEventListener('change', updateUI);
sizeSelect.addEventListener('change', updateUI);
[titleInput,subtitleInput,mainMenuInput,footerInput,mealEditInput].forEach(el=>{
  el.addEventListener('input', updatePrompt);
});
cleanupRulesInput.addEventListener('input', updatePrompt);
document.getElementById('applyCleanupBtn').addEventListener('click',()=>{
  if(state.rawMealText){
    refillMealEditor(true);
  }else{
    mealEditInput.value = applyCleanupRulesToText(mealEditInput.value);
    updatePrompt();
  }
});
document.getElementById('resetMealEditBtn').addEventListener('click',()=>{
  refillMealEditor(true);
});
copyPromptBtn.addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(promptBox.value);
    copyStatus.textContent='프롬프트를 복사했습니다.';
  }catch(e){
    promptBox.select();
    document.execCommand('copy');
    copyStatus.textContent='프롬프트를 복사했습니다.';
  }
});


function ymd(dateStr){ return (dateStr || '').replaceAll('-',''); }
function formatDateInput(d){ return d.toISOString().slice(0,10); }
function mondayToFriday(base=new Date()){
  const day=base.getDay();
  const diff=day===0?-6:1-day;
  const mon=new Date(base); mon.setDate(base.getDate()+diff);
  const fri=new Date(mon); fri.setDate(mon.getDate()+4);
  return [formatDateInput(mon),formatDateInput(fri)];
}
function syncApiDates(){
  if(state.mode==='day'){
    endDate.value=startDate.value;
  }else if(state.mode==='week'){
    const [mon,fri]=mondayToFriday(startDate.value?new Date(startDate.value+'T00:00:00'):new Date());
    startDate.value=mon; endDate.value=fri;
  }
}
async function searchSchools(){
  const query=document.getElementById('schoolQuery').value.trim();
  const status=document.getElementById('apiStatus');
  const box=document.getElementById('schoolResults');
  if(!query){ status.textContent='학교명을 입력하세요.'; status.className='api-status error'; return; }
  status.textContent='학교를 검색하고 있습니다…'; status.className='api-status'; box.innerHTML='';
  try{
    const res=await fetch('/api/schools?query='+encodeURIComponent(query));
    const data=await res.json();
    if(!res.ok) throw new Error(data.error||'학교 검색 실패');
    if(!data.schools?.length){ status.textContent='검색 결과가 없습니다.'; return; }
    box.innerHTML=data.schools.map((s,i)=>`<div class="school-item" data-index="${i}"><b>${s.name}</b><span>${s.region} · ${s.address||''}</span></div>`).join('');
    box.querySelectorAll('.school-item').forEach(el=>el.addEventListener('click',()=>{
      state.selectedSchool=data.schools[Number(el.dataset.index)];
      box.querySelectorAll('.school-item').forEach(x=>x.classList.remove('active'));
      el.classList.add('active');
      status.textContent=`선택: ${state.selectedSchool.name}`;
    }));
    status.textContent=`${data.schools.length}개 학교를 찾았습니다. 학교를 선택하세요.`;
  }catch(e){ status.textContent=e.message; status.className='api-status error'; }
}
async function loadMeals(){
  const status=document.getElementById('apiStatus');
  const out=document.getElementById('mealResults');
  if(!state.selectedSchool){ status.textContent='먼저 학교를 검색해 선택하세요.'; status.className='api-status error'; return; }
  syncApiDates();
  status.textContent='중식 정보를 불러오고 있습니다…'; status.className='api-status'; out.innerHTML='';
  try{
    const qs=new URLSearchParams({
      atptCode:state.selectedSchool.atptCode,
      schoolCode:state.selectedSchool.schoolCode,
      from:ymd(startDate.value),
      to:ymd(endDate.value)
    });
    const res=await fetch('/api/meals?'+qs.toString());
    const data=await res.json();
    if(!res.ok) throw new Error(data.error||'급식 조회 실패');
    if(!data.meals?.length){ status.textContent='선택 기간에 등록된 중식이 없습니다.'; return; }
    state.loadedMeals = data.meals;
    out.innerHTML=data.meals.map(m=>`<div class="meal-item"><b>${m.dateLabel}</b><div>${m.dishes.map(x=>escapeHtml(x)).join('<br>')}</div>${m.nutrition?`<div class="status">영양정보: ${escapeHtml(m.nutrition)}</div>`:''}</div>`).join('');

    mealEditInput.value = data.meals.map(m=>{
      const lines = [`[${m.dateLabel}]`, ...m.dishes];
      if(m.nutrition) lines.push(`영양정보: ${m.nutrition}`);
      return lines.join('\n');
    }).join('\n\n');

    if(!mainMenuInput.value.trim()){
      const first = data.meals[0];
      if(first && first.dishes && first.dishes.length){
        mainMenuInput.value = first.dishes[0];
      }
    }

    updatePrompt();
    status.textContent=`${data.meals.length}일의 중식을 불러왔습니다. 식단 다듬기와 최종 프롬프트에 반영되었습니다.`;
  }catch(e){ status.textContent=e.message; status.className='api-status error'; }
}

document.getElementById('schoolSearchBtn').addEventListener('click',searchSchools);
document.getElementById('schoolQuery').addEventListener('keydown',e=>{if(e.key==='Enter')searchSchools();});
document.getElementById('loadMealsBtn').addEventListener('click',loadMeals);
document.getElementById('clearMealsBtn').addEventListener('click',()=>{
  state.loadedMeals=[];
  document.getElementById('mealResults').innerHTML='';
  document.getElementById('apiStatus').textContent='';
  mealEditInput.value='';
  mainMenuInput.value='';
  state.rawMealText='';
  updatePrompt();
});

updateUI();
