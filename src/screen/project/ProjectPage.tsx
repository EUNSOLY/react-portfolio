import React, { useEffect, useRef, useState } from 'react';
import { tm } from '../../utils/twMerge';
import { ProjectType } from '../../utils/type';
import { IconBrandGithub, IconCirclesRelation } from '@tabler/icons-react';
import styles from './style/projects.module.scss';
import emptyImage from '../../assets/image/readyimageIcon.png';

import Select from '../../components/ui/Select';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { projectData } from '../../data/portfolioData/projectsData';

const ProjectPage = () => {
  const { isMobile } = useWindowDimensions();
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectProject, setSelectProject] = useState<ProjectType | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null); // 실제 text 높이 계산을 위한 Ref
  const [isMoreView, setIsMoreView] = useState<boolean>(false); // 더보기 버튼의 여부
  const [isShowText, setIsShowText] = useState<boolean>(false); // 내용이 더 보여지고, 접기 버튼의 여부

  // 외부 호출 프로젝트 현재 페이지의 변수에서 상태관리
  useEffect(() => {
    setProjects(projectData);
    setSelectProject(projectData[0]);
  }, []);

  // 프로젝트 변경 핸들러
  const changeProjectHandler = (project: ProjectType) => {
    setSelectProject(project);
  };

  // 높이가 200px 이상이라면 더보기 버튼 노출
  useEffect(() => {
    requestAnimationFrame(() => {
      if (!textRef.current) return;
      const contentHeight = textRef.current.clientHeight;
      setIsMoreView(contentHeight > 200);
    });
  }, [isMobile, selectProject]);

  // 더비고 접기 버튼 클릭
  const onClickMoreDesc = () => {
    setIsShowText((s) => !s);
  };

  return (
    <div className={tm(`${styles.projects}`)}>
      <ul className={tm(`${styles['side-bar']} `)}>
        {isMobile ? (
          <Select<ProjectType>
            menuList={projects}
            setState={setSelectProject}
            defaultValue={selectProject ? selectProject : projects[0]}
            getLabel={(project) => project.title} // ProjectType의 title을 label로 사용
            getValue={(project) => project.title} // ProjectType의 title을 value로 사용
          />
        ) : (
          projects.map((project) => (
            <li
              key={project.title}
              className={tm(
                `${styles['side-menu']}`,
                selectProject && project.title === selectProject.title && styles['action']
              )}
              onClick={() => changeProjectHandler(project)}
            >
              {project.title}
            </li>
          ))
        )}
      </ul>

      {selectProject && (
        <div
          className={tm(`${styles.content}`)}
          style={{
            overflowY: 'scroll',
          }}
        >
          <div className={tm(`${styles['mokup-con']}`)}>
            <img
              src={selectProject.mockupImage !== '' ? selectProject.mockupImage : emptyImage}
              alt={`${styles['project-mokup']}`}
            />
          </div>

          <p className={tm(`${styles['project-title']} `)}>{selectProject.title}</p>

          <div className={tm(`${styles['link-con']}`)}>
            <a
              href={selectProject.githubLink}
              target={selectProject.liveLink === '#none' ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <IconBrandGithub />
            </a>
            <a
              href={selectProject.liveLink}
              target={selectProject.liveLink === '#none' ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <IconCirclesRelation />
            </a>
          </div>

          <div>
            <div
              className={tm(styles['desc-con'])}
              style={{
                maxHeight: isShowText ? 'none' : '50px',
                overflowY: 'hidden',
              }}
            >
              <p className={tm(styles.desc)} ref={textRef}>
                {selectProject.description}
              </p>
            </div>
            {isMoreView && (
              <p className={tm(styles.more)} onClick={onClickMoreDesc}>
                {isShowText ? '접기' : '...더보기'}
              </p>
            )}
          </div>

          <ul className={tm(`${styles['tech-con']}`)}>
            {selectProject.techs.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
