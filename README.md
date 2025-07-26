# KCC 창호 원페이지 홈페이지

KCC 창호 전문 시공 업체를 위한 현대적이고 반응형 원페이지 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Database**: Supabase
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📋 주요 기능

### 1. 메인 히어로 섹션
- 매력적인 배경과 메인 메시지
- 상담신청 폼 (이름, 연락처, 이메일, 주소, 문의사항)
- 전화 상담 및 전시장 안내 버튼

### 2. KCC 창호 장점 섹션
- 안전성, 단열성, 차음성, 품질보증
- 각 장점별 상세 설명 및 특징
- KCC만의 차별화된 기술력 소개

### 3. 제품 소개 섹션
- 아파트, 오피스텔, 상업시설, 맞춤형 창호
- 창호 형태별 특징 (여닫이창, 미서기창, 상하슬라이딩, 픽스창)
- 제품별 상세 스펙 정보

### 4. 신청 후 진행과정
- 5단계 프로세스 (상담신청 → 현장방문 → 정밀측정 → 전문시공 → 검수완료)
- 각 단계별 소요시간 및 세부사항
- 서비스 특징 및 주의사항 안내

### 5. 전시장 위치 정보
- 본점, 분당점, 일산점 위치 정보
- 각 전시장별 운영시간, 시설안내, 교통정보
- 방문 예약 및 준비사항 안내

## 🛠️ 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd kcc-landing
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase 설정
1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. `supabase-setup.sql` 파일의 SQL을 실행하여 테이블 생성
3. 환경 변수에 프로젝트 URL과 키 입력

### 5. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── Hero.tsx             # 히어로 섹션
│   ├── Benefits.tsx         # 장점 섹션
│   ├── Products.tsx         # 제품 소개 섹션
│   ├── Process.tsx          # 진행과정 섹션
│   └── Location.tsx         # 전시장 위치 섹션
└── lib/
    └── supabase.ts          # Supabase 설정 및 함수
```

## 🗄️ 데이터베이스 스키마

### consultation_requests 테이블
- `id`: UUID (Primary Key)
- `name`: 신청자 이름
- `phone`: 연락처
- `email`: 이메일 (선택)
- `address`: 시공 주소 (선택)
- `message`: 문의사항 (선택)
- `status`: 처리 상태 (pending, contacted, completed)
- `created_at`: 생성 시간
- `updated_at`: 수정 시간

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **현대적 UI**: 깔끔하고 전문적인 디자인
- **접근성**: WCAG 가이드라인 준수
- **성능 최적화**: 이미지 최적화, 코드 스플리팅

## 🚀 배포

### Vercel 배포
1. Vercel 계정에 로그인
2. GitHub 저장소 연결
3. 환경 변수 설정
4. 자동 배포 완료

### 환경 변수 (Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📞 상담 신청 플로우

1. 사용자가 폼 작성 후 제출
2. 데이터가 Supabase에 저장
3. 관리자에게 알림 (추후 구현 가능)
4. 전화 상담 진행

## 🔒 보안

- Supabase RLS (Row Level Security) 적용
- 입력 데이터 검증
- HTTPS 강제 사용

## 📱 반응형 브레이크포인트

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 커스터마이징

### 색상 변경
`src/app/globals.css`와 Tailwind CSS 클래스를 수정하여 브랜드 색상 변경 가능

### 내용 수정
각 컴포넌트 파일에서 텍스트 및 이미지 수정 가능

### 연락처 정보 변경
- 전화번호: 여러 컴포넌트에서 `tel:` 링크 수정
- 주소: `Location.tsx`에서 전시장 정보 수정

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 연락주세요.
