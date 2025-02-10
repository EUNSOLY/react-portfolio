import React, { useState } from 'react';
import { tm } from '../../utils/twMerge';
const ProjectPage = () => {
  const projects = [
    {
      title: '프로젝트1',
      description: '설명',
      techs: ['React', 'TypeScript', 'Tailwind', 'Redux', 'Node.js'],
      mockupImage: '/path/to/ecommerce-mockup.png',
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce-site.com',
    },
    {
      title: '프로젝트2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit',
      techs: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      mockupImage: '/path/to/dashboard-mockup.png',
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
  return (
    <div className={tm(`grid h-full w-full`)}>
      <div className={tm(`overflow-x-scroll overflow-y-hidden`, `flex gap-8 max-h-[400px]`)}>
        {projects.map((project) => (
          <div
            key={project.title}
            className={tm(`flex rounded-3xl overflow-hidden shadow-2xl`, `min-w-[300px]`, 'md:min-w-[600px]')}
          >
            <div className="w-1/2 bg-black flex items-center justify-center ">
              <img
                src={project.mockupImage}
                alt={project.title}
                className="max-w-full max-h-full object-contain transform transition-transform hover:scale-105"
              />
            </div>

            <div className="w-1/2 bg-[#111111] flex flex-col justify-center  text-white px-4">
              <h3 className="text-4xl font-bold  text-[#00b2ff]">{project.title}</h3>

              <p className="text-lg text-gray-300 ">{project.description}</p>

              <div className="flex flex-wrap gap-2 ">
                {project.techs.map((tech, index) => (
                  <span key={index} className="px-3  bg-[#00b2ff]/10 rounded-full text-sm text-[#a855f7]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-6 ">
                {project.githubLink && (
                  <a
                    href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex items-center space-x-2 hover:text-[#00b2ff] transition-colors"
                  >
                    {/* <Github size={24} /> */}
                    아이콘
                    <span>GitHub</span>
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex items-center space-x-2 hover:text-[#a855f7] transition-colors"
                  >
                    아이콘
                    {/* <ExternalLink size={24} /> */}
                    <span>DEMO</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={tm(`border overflow-x-scroll overflow-y-hidden`)}>2</div>
    </div>
  );
};

export default ProjectPage;
