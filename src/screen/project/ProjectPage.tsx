import React, { useEffect, useState } from 'react';
import { tm } from '../../utils/twMerge';
import { IconBlendMode, IconBrandGithub } from '@tabler/icons-react';
import SliderComponent from '../../components/ui/Slider';
import { ProjdectType } from '../../utils/type';
import { useIsMobile } from '../../utils/useIsMobile';
import Card from '../../components/ui/Card';

const ProjectPage = () => {
  const projects: ProjdectType[] = [
    {
      title: '프로젝트1',
      description: '설명',
      techs: ['React', 'TypeScript', 'Tailwind', 'Redux', 'Node.js'],
      mockupImage:
        'https://media.istockphoto.com/id/1482199015/ko/%EC%82%AC%EC%A7%84/%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%95%EC%95%84%EC%A7%80-%EC%9B%A8%EC%9D%BC%EC%8A%A4-%EC%96%B4-%EC%BD%94%EA%B8%B0-14-%EC%A3%BC%EB%A0%B9-%EA%B0%9C%EA%B0%80-%EC%9C%99%ED%81%AC%ED%95%98%EA%B3%A0-%ED%97%90%EB%96%A1%EC%9D%B4%EA%B3%A0-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD%EB%90%98%EC%96%B4-%EC%95%89%EC%95%84-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=vW29tbABUS2fEJvPi8gopZupfTKErCDMfeq5rrOaAME=',
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce-site.com',
    },
    {
      title: '프로젝트2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit',
      techs: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      mockupImage: '',
      githubLink: 'https://github.com/yourusername/dashboard',
      liveLink: 'https://your-dashboard.com',
    },
    {
      title: '프로젝트3',
      description: '설명',
      techs: ['React', 'TypeScript', 'OpenAI', 'WebSockets'],
      mockupImage:
        'https://media.istockphoto.com/id/1482199015/ko/%EC%82%AC%EC%A7%84/%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%95%EC%95%84%EC%A7%80-%EC%9B%A8%EC%9D%BC%EC%8A%A4-%EC%96%B4-%EC%BD%94%EA%B8%B0-14-%EC%A3%BC%EB%A0%B9-%EA%B0%9C%EA%B0%80-%EC%9C%99%ED%81%AC%ED%95%98%EA%B3%A0-%ED%97%90%EB%96%A1%EC%9D%B4%EA%B3%A0-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD%EB%90%98%EC%96%B4-%EC%95%89%EC%95%84-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=vW29tbABUS2fEJvPi8gopZupfTKErCDMfeq5rrOaAME=',
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
        'https://media.istockphoto.com/id/1482199015/ko/%EC%82%AC%EC%A7%84/%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%95%EC%95%84%EC%A7%80-%EC%9B%A8%EC%9D%BC%EC%8A%A4-%EC%96%B4-%EC%BD%94%EA%B8%B0-14-%EC%A3%BC%EB%A0%B9-%EA%B0%9C%EA%B0%80-%EC%9C%99%ED%81%AC%ED%95%98%EA%B3%A0-%ED%97%90%EB%96%A1%EC%9D%B4%EA%B3%A0-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD%EB%90%98%EC%96%B4-%EC%95%89%EC%95%84-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=vW29tbABUS2fEJvPi8gopZupfTKErCDMfeq5rrOaAME=',
      githubLink: '',
      liveLink: '',
    },
  ];
  const isMobile = useIsMobile();

  useEffect(() => {
    console.log(isMobile, 'isMobile');
  }, [isMobile]);
  return (
    <div className={tm(`overflow-hidden`, `h-full`, `flex flex-col justify-center`, isMobile ? ` gap-2` : ` gap-10`)}>
      <h2
        className={tm(
          `bg-gradient-to-r from-pointColor to-purple-500`,
          `bg-clip-text text-transparent text-center`,
          `text-lg font-bold`,
          `md:text-6xl`,
          isMobile && `mt-4`
        )}
      >
        PROJECTS
      </h2>

      {isMobile ? (
        <ul className={tm(`flex flex-wrap overflow-x-scroll h-full gap-2`)}>
          {projects.map((project) => (
            <li key={project.title} className={tm(`w-full`)}>
              <Card key={project.title} list={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={tm(` px-5 flex justify-center items-center`)}>
          <SliderComponent key={`projectSlider`} list={projects} className={tm(`w-full max-w-[1000px]`)} />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
