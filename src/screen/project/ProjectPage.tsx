import React, { useEffect, useRef, useState } from 'react';
import { tm } from '../../utils/twMerge';
import { ProjdectType } from '../../utils/type';
import { useIsMobile } from '../../utils/useIsMobile';
import { IconBrandGithub, IconCirclesRelation } from '@tabler/icons-react';
import styles from './style/projects.module.scss';
import emptyImage from '../../assets/image/readyimageIcon.png';
const ProjectPage = () => {
  const projects: ProjdectType[] = [
    {
      title: '프로젝트1',
      description: '설명',
      techs: ['React', 'TypeScript', 'Tailwind', 'Redux', 'Node.js'],
      mockupImage: 'https://blog.kakaocdn.net/dn/bh3xaW/btrd04olbd6/HkQMeUpJsB6D3GcVdXfrc1/img.jpg',
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce-site.com',
    },
    {
      title: '프로젝트2',
      description:
        '해당 프로젝트는 제가 아어랴호다옿 가나다라 마바사 아자차카타바하파아호댜ㅗㅎ ㅣㅁ나회댜아 니ㅏ어니햐ㅚㄴ다ㅓㅣㅏㅇ ㅓㅣㄴ야ㅓ니ㅏ어 니ㅓㄴ댜ㅓㅣㅏㅓ 어니ㅏ 안녕하세요 저는 이은솔입니다. 안녕하세요 저는 이은솔입니다 ㅎㅎ 안녕하세요 저는 이은솔입니다 ㅎㅎ 안녕하세요 저는 이은솔입니다 ㅎㅎ',
      techs: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      mockupImage: '',
      githubLink: 'https://github.com/yourusername/dashboard',
      liveLink: 'https://your-dashboard.com',
    },
    {
      title: '프로젝트3',
      description: '설명',
      techs: ['React', 'TypeScript', 'OpenAI', 'WebSockets'],
      mockupImage: 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg',
      githubLink: '',
      liveLink: '',
    },
    {
      title: '프로젝트4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit',
      techs: ['React', 'TypeScript', 'OpenAI', 'WebSockets'],
      mockupImage:
        'https://media.istockphoto.com/id/1482199015/ko/%EC%82%AC%EC%A7%84/%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%95%EC%95%84%EC%A7%80-%EC%9B%A8%EC%9D%BC%EC%8A%A4-%EC%96%B4-%EC%BD%94%EA%B8%B0-14-%EC%A3%BC%EB%A0%B9-%EA%B0%9C%EA%B0%80-%EC%9C%99%ED%81%AC%ED%95%98%EA%B3%A0-%ED%97%90%EB%96%A1%EC%9D%B4%EA%B3%A0-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD%EB%90%98%EC%96%B4-%EC%95%89%EC%95%84-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=vW29tbABUS2fEJvPi8gopZupfTKErCDMfeq5rrOaAME=',
      githubLink: '',
      liveLink: '',
    },
    {
      title: '프로젝트5',
      description: '-',
      techs: ['React', 'TypeScript', 'OpenAI', 'WebSockets'],
      mockupImage:
        'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG',
      githubLink: '',
      liveLink: '',
    },
  ];
  const isMobile = useIsMobile();
  const [selectProject, setSelectProject] = useState<ProjdectType>(projects[0]);
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  let [count, setCount] = useState<number>(0);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [isLongText, setIsLongText] = useState(false);

  // 프로젝트 변경 핸들러
  const changeProjectHandler = (project: ProjdectType) => {
    setSelectProject(project);
  };

  // 글자 수가 두 줄 이상인지를 체크하는 함수
  useEffect(() => {
    if (descRef.current) {
      // 높이를 측정해서, 두 줄 이상인지 확인
      const isOverflowing = descRef.current.scrollHeight > descRef.current.clientHeight;
      setIsLongText(isOverflowing);
    }
  }, [descRef.current, selectProject.description]);

  return (
    <div className={tm(`${styles.projects}`)}>
      <ul className={tm(`${styles['side-bar']}`)}>
        {projects.map((project) => (
          <li
            key={project.title}
            className={tm(`${styles['side-menu']}`, project.title === selectProject.title && styles['action'])}
            onClick={() => changeProjectHandler(project)}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <div className={tm(`${styles.content}`)}>
        <div className={tm(`${styles['mokup-con']}`)}>
          <img
            src={selectProject.mockupImage !== '' ? selectProject.mockupImage : emptyImage}
            alt={`${styles['project-mokup']}`}
          />
        </div>

        <p className={tm(`${styles['project-title']}`)}>{selectProject.title}</p>

        <div className={tm(`${styles['link-con']}`)}>
          <a href={selectProject.githubLink}>
            <IconBrandGithub />
          </a>
          <a href={selectProject.liveLink}>
            <IconCirclesRelation />
          </a>
        </div>

        <div className={tm(styles['desc-con'])}>
          <p ref={descRef} className={tm(`${styles.desc}`, !isEllipsis ? '' : styles.full)}>
            {selectProject.description}
          </p>
          {isLongText && (
            <button onClick={() => setIsEllipsis(!isEllipsis)} className={tm(styles['text-btn'])}>
              {!isEllipsis ? '더보기' : '간략히 보기'}
            </button>
          )}
        </div>

        <ul className={tm(`${styles['tech-con']}`)}>
          {selectProject.techs.map((tech: string) => (
            <li key={tech} className={tm(``)}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
