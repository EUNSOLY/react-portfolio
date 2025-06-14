import { ProjectType } from '../../utils/type';
import PROJECTEMPY from '../../assets/image/readyImage.jpg';
import OMDBMOCKUP from '../../assets/image/OMDBMOCKUP.jpg';
import PORTFOLIOMOCKUP from '../../assets/image/portFolioMockup.jpg';
export const projectData: ProjectType[] = [
  {
    title: '개인 포트폴리오 사이트',
    description:
      '기존에 Vanilla JavaScript로 제작했던 포트폴리오 사이트를 React와 TypeScript 기반으로 리뉴얼하였습니다. Tailwind CSS와 SCSS를 함께 사용하여 빠르고 일관된 스타일링을 적용하였고, Redux Toolkit을 활용해 간단한 메뉴 상태 관리를 구현했습니다. 또한, emailjs 라이브러리를 사용하여 방문자가 직접 메일을 전송할 수 있도록 자동화 기능을 추가하여 편의성과 효율성을 높였습니다. 이 과정에서 emailjs의 key 값이 노출되지 않도록 .env 파일을 활용하여 보안에도 신경을 기울였습니다. 추가로 Vercel을 통해 프로젝트를 배포하고, GitHub와 연동하여 커밋 시 자동으로 빌드 및 배포가 이루어지도록 설정하여 배포 효율성을 높였습니다.',
    techs: ['React', 'TypeScript', 'TSX', 'Tailwind', 'Redux Toolkit', 'SCSS'],
    mockupImage: PORTFOLIOMOCKUP,
    githubLink: 'https://github.com/EUNSOLY/react-portfolio',
    liveLink: 'https://portfolio-silk-ten-50.vercel.app/',
  },
  {
    title: '신규 사이드 프로젝트',
    description: '신규 사이드 프로젝트 구상 중 입니다.',
    techs: ['Nextjs', 'TypeScript', 'TSX', 'Tailwind', 'SCSS'],
    mockupImage: PROJECTEMPY,
    githubLink: '#none',
    liveLink: '#none',
  },
];
