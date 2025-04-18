import { ProjectType } from '../../utils/type';
import PROJECTEMPY from '../../assets/image/readyImage.jpg';
import OMDBMOCKUP from '../../assets/image/OMDBMOCKUP.jpg';
import PORTFOLIOMOCKUP from '../../assets/image/portFolioMockup.jpg';
export interface AboutDataType {
  title: string;
  icon: string;
  content: string[];
}
export const skillsData: AboutDataType[] = [
  {
    title: 'HTML',
    icon: '',
    content: [
      '시맨틱 태그를 활용하여 웹 페이지의 구조를 설계하고 SEO와 접근성을 개선했습니다.',
      // 'AI 데이터를 표시하는 대시보드에서 사용자 친화적인 테이블 구조를 설계했습니다.',
    ],
  },
  {
    title: 'CSS',
    icon: '',
    content: [
      'Flexbox와 Grid를 사용해 반응형 레이아웃을 구현했습니다.',
      'SCSS를 사용해 CSS 코드를 모듈화하고 유지보수성을 향상시켰습니다.',
    ],
  },
  {
    title: 'Javascript',
    icon: '',
    content: [
      'ES6 문법을 활용해 코드 가독성과 생산성을 향상시켰습니다.',
      'Promise와 async/await를 사용해 비동기 API 호출 로직을 구현했습니다.',
    ],
  },
  {
    title: 'TypeScript',
    icon: '',
    content: [
      'React 컴포넌트에 TypeScript를 적용해 컴파일 단계에서 타입 오류를 방지했습니다.',
      '제네릭과 유틸리티 타입을 사용해 API 응답 데이터 모델을 효율적으로 정의했습니다.',
    ],
  },
  {
    title: 'React',
    icon: '',
    content: [
      'React의 상태 관리 기능과 Context API를 사용해 글로벌 상태를 처리했습니다.',
      '재사용 가능한 컴포넌트를 설계해 코드 중복을 줄이고 개발 속도를 개선했습니다.',
    ],
  },
  {
    title: 'NextJs',
    icon: '',
    content: [
      '서버 사이드 렌더링(SSR)을 활용해 SEO와 초기 로딩 성능을 개선했습니다.',
      '정적 사이트 생성(SSG)으로 블로그 페이지를 제작해 배포 속도를 높였습니다.',
    ],
  },
  {
    title: 'MySql',
    icon: '',
    content: [
      '광고 데이터를 저장하고 검색하기 위한 효율적인 데이터베이스 스키마를 설계했습니다.',
      'JOIN 쿼리를 활용해 여러 테이블의 데이터를 효과적으로 조합했습니다.',
    ],
  },
  {
    title: 'MongoDB',
    icon: '',
    content: [
      'NoSQL 구조를 활용해 광고 로그 데이터를 저장하고 빠르게 조회했습니다.',
      '복잡한 쿼리를 Aggregation Framework를 사용해 처리했습니다.',
    ],
  },
  {
    title: 'Flutter',
    icon: '',
    content: [
      '크로스 플랫폼 앱에서 공통 UI 컴포넌트를 제작해 개발 속도를 개선했습니다.',
      'StatefulWidget과 Provider 패턴을 사용해 상태 관리를 효율화했습니다.',
    ],
  },
  {
    title: 'ReduxToolkit',
    icon: '',
    content: [
      'Redux Toolkit의 createSlice를 사용해 모듈화된 상태 관리 로직을 구현했습니다.',
      'RTK Query를 사용해 API 요청 상태를 쉽게 처리했습니다.',
    ],
  },
];

export const toolsData: AboutDataType[] = [
  { title: 'Notion', icon: '', content: [] },
  { title: 'Slack', icon: '', content: [] },
  { title: 'DBeaver', icon: '', content: [] },
  { title: 'Photoshop', icon: '', content: [] },
  { title: 'Lllustrator', icon: '', content: [] },
  { title: 'Figma', icon: '', content: [] },
  { title: 'Github', icon: '', content: [] },
  // { title: 'GithubDesktop', icon: '', content: [] },
];

export const educationData = [
  {
    title: '그린 컴퓨터아카데미',
    content: '<산대특>리액트(React)\n리액트네이티브 EXPO 활용\n프론트엔드개발자 양성과정',
    date: '2022.12.19 - 2023.06.27',
  },
  {
    title: '대전과학기술대학교',
    content: '외식조리제빵계열 - 조리전공',
    date: '2013.03 - 2015.02',
  },
];
export const certificateData = [
  {
    title: '웹디자인 기능사',
    date: '2023.04',
  },
  {
    title: '컴퓨터그래픽스 운용기능사',
    date: '2022.07',
  },
  {
    title: 'SQL개발자(SQLD)',
    date: '2024.04',
  },
];

export const projectData: ProjectType[] = [
  {
    title: '개인 포트폴리오 사이트',
    description:
      '기존에 Vanilla JavaScript로 제작했던 포트폴리오 사이트를 React와 TypeScript 기반으로 리뉴얼하였습니다. Tailwind CSS와 SCSS를 조합해 빠르고 일관된 스타일링을 적용하고, Redux Toolkit을 통해 상태 관리를 효율적으로 처리하였습니다. 정적 사이트로 구성하여 Vercel을 통해 배포하였습니다.',
    techs: ['React', 'TypeScript', 'TSX', 'Tailwind', 'Redux Toolkit', 'SCSS'],
    mockupImage: PORTFOLIOMOCKUP,
    githubLink: 'https://github.com/EUNSOLY/react-portfolio',
    liveLink: 'https://portfolio-silk-ten-50.vercel.app/',
  },
  {
    title: 'OMDBAPI.COM',
    description:
      'Vanilla JS 기반의 영화 검색 사이트로, Class형 컴포넌트 구조로 설계 및 구현하였습니다. OMDB 오픈 API를 활용해 실시간으로 해외 영화를 검색할 수 있으며, Parcel 번들러를 통해 프로젝트를 구성하고 Vercel을 통해 배포하였습니다.',
    techs: ['HTML', 'CSS', 'TypeScript', 'parcel', 'vercel'],
    mockupImage: OMDBMOCKUP,
    githubLink: 'https://github.com/EUNSOLY/vanillajs-movie-app',
    liveLink: 'https://movie-app-eunsoly.vercel.app/#/',
  },
  {
    title: 'DisneyPlus[클론코딩]',
    description:
      'DisneyPlus를 클론코딩한 프로젝트로, 실사용 가능한 UI 및 기능을 구현하였습니다. Firebase를 활용한 구글 로그인 기능을 포함해 사용자 인증을 구현하였고, 영화 및 시리즈 데이터를 Swiper로 슬라이드 형식으로 보여줍니다. Styled Component를 활용한 컴포넌트 스타일링과 Redux Toolkit을 통한 상태 관리를 적용하였습니다.',
    techs: ['React', 'JavaScript', 'Styled Component', 'Swiper', 'FireBase', 'Redux Toolkit'],
    mockupImage: 'https://github.com/EUNSOLY/React_DisneyPlus/blob/main/public/images/ReadmeImage/image.png?raw=true',
    githubLink: 'https://github.com/EUNSOLY/React_DisneyPlus',
    liveLink: 'https://react-disney-plus-app-ab04b.firebaseapp.com/main',
  },
  {
    title: 'PDF 전자서명 사이트(가제)',
    description: '모두의 싸인을 모티브로한 간단한 전자서명 사이트 제작 예정 입니다.',
    techs: ['Nextjs', 'TypeScript', 'TSX', 'Tailwind', 'SCSS'],
    mockupImage: PROJECTEMPY,
    githubLink: '#none',
    liveLink: '#none',
  },
];
