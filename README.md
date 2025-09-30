# SocialFlow

AI 기반 차세대 소셜 미디어 광고 플랫폼. Next.js, MUI, Zustand, GTM을 사용하여 구축된 실시간 분석과 자동화된 최적화 기능을 제공합니다.

## 🚀 주요 기능

- **AI 기반 광고 최적화**: 머신러닝을 활용한 실시간 광고 성과 분석 및 자동 최적화
- **소셜 미디어 통합**: 다양한 소셜 플랫폼의 광고를 하나의 대시보드에서 관리
- **실시간 분석**: GA4와 GTM을 활용한 상세한 사용자 행동 분석
- **자동화된 타겟팅**: AI가 학습한 데이터를 바탕으로 최적의 타겟 오디언스 자동 설정
- **브랜드 안전성**: AI 기반 콘텐츠 모더레이션으로 브랜드 이미지 보호
- **반응형 디자인**: 모바일과 데스크톱에서 최적화된 사용자 경험
- **SEO 최적화**: 메타 태그, 구조화된 데이터, 사이트맵, 다국어 지원
- **성능 최적화**: 이미지 최적화, 압축, 캐싱, Next.js 최적화 기능

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Google Analytics 4 Tracking ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Site URL (프로덕션 환경에서 설정)
NEXT_PUBLIC_SITE_URL=https://socialflow.ai

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 SocialFlow를 확인하세요.

## 🔧 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **UI Library**: Material-UI (MUI) v5
- **상태 관리**: Zustand
- **스타일링**: Tailwind CSS, Emotion
- **분석**: Google Analytics 4, Google Tag Manager

## 📊 GA4 이벤트 추적

이 애플리케이션은 다음과 같은 이벤트들을 GA4에서 추적합니다:

### 광고 관련 이벤트
- `ad_click`: 광고 클릭
- `ad_view`: 광고 조회

### 사용자 상호작용 이벤트
- `post_like`: 포스트 좋아요/좋아요 취소
- `post_view`: 포스트 조회

### 이벤트 파라미터
- `ad_id`: 광고 ID
- `ad_brand`: 광고 브랜드
- `ad_cta`: 광고 CTA 텍스트
- `post_id`: 포스트 ID
- `action`: 사용자 액션 (like/unlike)

## 🎨 컴포넌트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (GTM, GA4 설정)
│   ├── page.tsx                # 메인 페이지 (다국어 리다이렉트)
│   ├── providers.tsx           # MUI 테마 프로바이더
│   ├── globals.css             # 글로벌 스타일
│   ├── sitemap.ts              # 사이트맵 생성
│   ├── robots.ts               # robots.txt 생성
│   └── [locale]/               # 다국어 라우팅
│       ├── layout.tsx          # 언어별 레이아웃
│       └── page.tsx            # 언어별 페이지
├── components/
│   ├── Feed.tsx                # 메인 피드 컴포넌트
│   ├── PostCard.tsx            # 개별 포스트 카드
│   ├── LanguageSelector.tsx    # 언어 선택기
│   ├── StructuredData.tsx      # 구조화된 데이터
│   └── SEOHead.tsx             # SEO 헤드 컴포넌트
├── store/
│   └── useStore.ts             # Zustand 상태 관리
├── lib/
│   └── i18n.ts                 # 다국어 설정
└── utils/
    └── gtag.ts                 # GA4 이벤트 추적 유틸리티
```

## 🎯 주요 기능 설명

### 1. AI 기반 광고 최적화
- 머신러닝 알고리즘을 통한 실시간 성과 분석
- 자동 타겟팅 및 예산 최적화
- A/B 테스트 자동화
- ROI 기반 광고 배치 자동 조정

### 2. 소셜 미디어 통합 관리
- 다양한 플랫폼의 광고를 하나의 대시보드에서 관리
- 크로스 플랫폼 캠페인 동기화
- 통합된 성과 리포트 및 분석
- 실시간 알림 및 알림 시스템

### 3. 브랜드 안전성 보장
- AI 기반 콘텐츠 모더레이션
- 부적절한 콘텐츠 자동 필터링
- 브랜드 가이드라인 자동 검증
- 위험도 점수 기반 광고 승인 시스템

### 4. 반응형 디자인
- 모바일 우선 설계
- 터치 디바이스 최적화
- 모던하고 직관적인 UI/UX
- 다크/라이트 모드 지원

## 🔍 GA4 설정 가이드

### 1. Google Analytics 4 설정
1. [Google Analytics](https://analytics.google.com/)에서 새 속성 생성
2. 측정 ID (G-XXXXXXXXXX) 복사
3. `.env.local`에 `NEXT_PUBLIC_GA_ID` 설정

### 2. Google Tag Manager 설정
1. [Google Tag Manager](https://tagmanager.google.com/)에서 새 컨테이너 생성
2. 컨테이너 ID (GTM-XXXXXXX) 복사
3. `.env.local`에 `NEXT_PUBLIC_GTM_ID` 설정

### 3. 이벤트 확인
GA4 실시간 보고서에서 다음 이벤트들을 확인할 수 있습니다:
- 광고 클릭 및 조회 (AI 최적화 추적)
- 사용자 상호작용 패턴 분석
- 캠페인 성과 실시간 모니터링
- 브랜드 안전성 지표 추적

## 🔍 SEO 최적화 기능

### 1. 메타 태그 최적화
- **동적 메타 태그**: 페이지별 맞춤 제목, 설명, 키워드
- **Open Graph**: 소셜 미디어 공유 최적화
- **Twitter Card**: 트위터 공유 최적화
- **다국어 지원**: 한국어/영어 메타 태그

### 2. 구조화된 데이터 (JSON-LD)
- **WebSite**: SocialFlow 플랫폼 정보
- **Organization**: SocialFlow 조직 정보
- **WebPage**: 페이지별 최적화된 정보
- **SocialMediaPosting**: AI 기반 소셜 미디어 포스트 정보

### 3. 사이트맵 및 robots.txt
- **자동 사이트맵 생성**: `/sitemap.xml`
- **robots.txt**: 검색엔진 크롤링 가이드
- **다국어 사이트맵**: 언어별 URL 포함

### 4. 이미지 최적화
- **Next.js Image**: 자동 최적화 및 지연 로딩
- **WebP/AVIF**: 최신 이미지 포맷 지원
- **반응형 이미지**: 디바이스별 최적 크기
- **Alt 태그**: 접근성 및 SEO 향상

### 5. 성능 최적화
- **압축**: Gzip/Brotli 압축
- **캐싱**: 정적 자산 캐싱
- **코드 분할**: 자동 번들 최적화
- **프리페치**: DNS 및 리소스 프리페치

### 6. 다국어 SEO
- **hreflang**: 언어별 페이지 연결
- **언어별 URL**: `/ko`, `/en` 경로
- **언어 선택기**: 사용자 언어 변경
- **지역화된 메타데이터**: 언어별 최적화

## 🚀 배포

### Vercel 배포
```bash
npm run build
```

Vercel에 배포할 때 환경 변수를 설정하는 것을 잊지 마세요.

### 환경 변수 설정
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 측정 ID
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager 컨테이너 ID
- `NEXT_PUBLIC_SITE_URL`: SocialFlow 도메인 (https://socialflow.ai)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console 인증 코드

## 📝 라이선스

MIT License

## 🤝 기여

이슈나 풀 리퀘스트를 환영합니다!