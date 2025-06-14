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
    content: [],
  },
  {
    title: 'CSS',
    icon: '',
    content: [],
  },
  {
    title: 'Javascript',
    icon: '',
    content: [],
  },
  {
    title: 'TypeScript',
    icon: '',
    content: [],
  },
  {
    title: 'React',
    icon: '',
    content: [],
  },
  {
    title: 'NextJs',
    icon: '',
    content: [],
  },
  {
    title: 'MySql',
    icon: '',
    content: [],
  },
  {
    title: 'MongoDB',
    icon: '',
    content: [],
  },
  {
    title: 'Flutter',
    icon: '',
    content: [],
  },
  {
    title: 'ReduxToolkit',
    icon: '',
    content: [],
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
