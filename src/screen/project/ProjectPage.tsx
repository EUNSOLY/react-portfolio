import React, { useEffect, useRef, useState } from 'react';
import { tm } from '../../utils/twMerge';
import { ProjectType } from '../../utils/type';
import { IconBrandGithub, IconCirclesRelation } from '@tabler/icons-react';
import styles from './style/projects.module.scss';
import emptyImage from '../../assets/image/readyimageIcon.png';
import { projectData } from '../../data/mock/mockupData';
import Select from '../../components/ui/Select';
import useWindowDimensions from '../../utils/useWindowDimensions';

const ProjectPage = () => {
  const { height, width, isMobile } = useWindowDimensions(768);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectProject, setSelectProject] = useState<ProjectType | null>(null);
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [isLongText, setIsLongText] = useState(false);

  useEffect(() => {
    setProjects(projectData);
    setSelectProject(projectData[0]);
  }, []);

  // 프로젝트 변경 핸들러
  const changeProjectHandler = (project: ProjectType) => {
    setSelectProject(project);
  };

  // 글자 수가 두 줄 이상인지를 체크하는 함수
  // FIXME : 현재 넓이값 조정으로 디스크립션 엘리스 처리 하기
  useEffect(() => {
    const checkTextOverflow = () => {
      if (descRef.current) {
        const isOverflowing = descRef.current.scrollHeight > descRef.current.clientHeight;
        setIsLongText(isOverflowing);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);

    return () => {
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, [selectProject?.description]);

  return (
    <div className={tm(`${styles.projects}`)}>
      <ul className={tm(`${styles['side-bar']} `)}>
        {isMobile ? (
          <Select<ProjectType>
            menuList={projects}
            setState={setSelectProject}
            defaultValue={projects[0]}
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
        <div className={tm(`${styles.content}`)}>
          <div className={tm(`${styles['mokup-con']}`)}>
            <img
              src={selectProject.mockupImage !== '' ? selectProject.mockupImage : emptyImage}
              alt={`${styles['project-mokup']}`}
            />
          </div>

          <p className={tm(`${styles['project-title']} `)}>{selectProject.title}</p>

          <div className={tm(`${styles['link-con']}`)}>
            <a href={selectProject.githubLink} target="_blank">
              <IconBrandGithub />
            </a>
            <a href={selectProject.liveLink} target="_blank">
              <IconCirclesRelation />
            </a>
          </div>

          {!isMobile && (
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
          )}

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
