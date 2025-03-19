import { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/image/profileImage.png';
import profile from '../../assets/image/profile.jpeg';
import { AboutDataType, certificateData, educationData, skillsData, toolsData } from '../../data/mock/mockupData';
import { tm } from '../../utils/twMerge';
import useWindowDimensions from '../../utils/useWindowDimensions';
import javascriptIcon from '../../assets/image/javascriptIcon.svg';
import typescriptIcon from '../../assets/image/typescriptIcon.svg';
import htmlIcon from '../../assets/image/htmlIcon.svg';
import cssIcon from '../../assets/image/cssIcon.svg';
import reactIcon from '../../assets/image/reactIcon.svg';
import nextIcon from '../../assets/image/nextjsIcon.svg';
import mysqlIcon from '../../assets/image/mysqlIcon.svg';
import mongodbIcon from '../../assets/image/mongodbIcon.svg';
import flutterIcon from '../../assets/image/flutterIcon.svg';
import reduxToolkitIcon from '../../assets/image/reduxIcon.svg';
import notionIcon from '../../assets/image/notionIcon.svg';
import slackIcon from '../../assets/image/slackIcon.svg';
import photoshopIcon from '../../assets/image/photoshopIcon.svg';
import lllustratorIcon from '../../assets/image/llustratorIcon.svg';
import figmaIcon from '../../assets/image/figmaIcon.svg';
import githubIcon from '../../assets/image/githubIcon.svg';
import dbeaver from '../../assets/image/dbeaver.svg';

const AboutPage = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { height, width, isMobile } = useWindowDimensions();

  const skillIcons = {
    Javascript: javascriptIcon,
    TypeScript: typescriptIcon,
    HTML: htmlIcon,
    CSS: cssIcon,
    React: reactIcon,
    NextJs: nextIcon,
    MySql: mysqlIcon,
    MongoDB: mongodbIcon,
    Flutter: flutterIcon,
    ReduxToolkit: reduxToolkitIcon,
    Notion: notionIcon,
    Slack: slackIcon,
    Photoshop: photoshopIcon,
    Lllustrator: lllustratorIcon,
    Figma: figmaIcon,
    Github: githubIcon,
    DBeaver: dbeaver,
  };

  return (
    <div
      className={tm('h-full', 'flex flex-col', 'p-4 sm:p-6 md:p-8', 'overflow-y-auto', 'select-none', 'bg-[#232323]')}
    >
      {/* Profile Section */}
      <div className={tm('flex flex-col md:flex-row items-center gap-8', 'mb-12', 'animate-fadeIn')}>
        <div className={tm('w-48 h-48 md:w-64 md:h-64', 'rounded-full overflow-hidden')}>
          <img src={profile} alt="profile" className="w-full h-full object-cover object-[bottom_90%]" />
        </div>

        <div className={tm('flex-1', 'text-center md:text-left')}>
          <h2
            className={tm(
              'text-2xl md:text-4xl font-bold mb-4',
              'bg-gradient-to-r from-pointColor to-purple-500',
              'bg-clip-text text-transparent'
            )}
          >
            Front-end Developer
          </h2>
          <p className="text-gray-300 text-lg">안녕하세요, 끊임없이 성장하는 개발자 이은솔입니다.</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className={tm('grid grid-cols-1 md:grid-cols-2 gap-8', 'mb-12')}>
        {/* My Skills */}
        <div className={tm('bg-white/5', 'rounded-2xl', 'p-6', 'backdrop-blur-sm')}>
          <h3 className={tm('text-xl font-bold mb-6', 'flex items-center gap-2', 'text-pointColor')}>My Skills</h3>

          <div className="grid grid-cols-4 gap-4">
            {skillsData.map((data, i) => (
              <div
                key={`${data.title}-${i}`}
                className={tm(
                  'aspect-square',
                  'flex flex-col items-center justify-center gap-2',
                  'p-3',
                  'rounded-xl',
                  'bg-white/5 hover:bg-white/10',
                  'cursor-pointer',
                  'transition-all duration-300',
                  'group',
                  `min-w-[40px] min-h-[40px]`
                )}
              >
                <img
                  src={skillIcons[data.title as keyof typeof skillIcons]}
                  alt={data.title}
                  className={`w-8 h-8 group-hover:scale-110 transition-transform duration-300`}
                />
                {!isMobile && (
                  <span className={`text-sm text-gray-400 group-${isMobile ? 'active:' : 'hover:'}:text-pointColor`}>
                    {data.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className={tm('bg-white/5', 'rounded-2xl', 'p-6', 'backdrop-blur-sm')}>
          <h3 className={tm('text-xl font-bold mb-6', 'flex items-center gap-2', 'text-pointColor')}>My Tools</h3>

          <div className="grid grid-cols-4 gap-4">
            {toolsData.map((data, i) => (
              <div
                key={`${data.title}-${i}`}
                className={tm(
                  'aspect-square',
                  'flex flex-col items-center justify-center gap-2',
                  'p-3',
                  'rounded-xl',
                  'bg-white/5 hover:bg-white/10',
                  'cursor-pointer',
                  'transition-all duration-300',
                  'group'
                )}
              >
                <img
                  src={skillIcons[data.title as keyof typeof skillIcons]}
                  alt={data.title}
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                />
                {!isMobile && (
                  <span className={`text-sm text-gray-400 group-${isMobile ? 'active:' : 'hover:'}:text-pointColor`}>
                    {data.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certificate Section */}
      <div className={tm('grid grid-cols-1 md:grid-cols-2 gap-8')}>
        {/* Education */}
        <div className={tm('bg-white/5', 'rounded-2xl', 'p-6', 'backdrop-blur-sm')}>
          <h3 className={tm('text-xl font-bold mb-6', 'flex items-center gap-2', 'text-pointColor')}>My Education</h3>

          <div className="space-y-4">
            {educationData.map((data, i) => (
              <div key={`${data.title}-${i}`} className="border-l-2 border-pointColor pl-4 py-2">
                <h4 className="font-bold text-white">{data.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{data.content}</p>
                <p className="text-xs text-pointColor mt-2">{data.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate */}
        <div className={tm('bg-white/5', 'rounded-2xl', 'p-6', 'backdrop-blur-sm')}>
          <h3 className={tm('text-xl font-bold mb-6', 'flex items-center gap-2', 'text-pointColor')}>My Certificate</h3>

          <div className="space-y-4">
            {certificateData.map((data, i) => (
              <div key={`${data.title}-${i}`} className="border-l-2 border-pointColor pl-4 py-2">
                <h4 className="font-bold text-white">{data.title}</h4>
                <p className="text-xs text-pointColor mt-2">{data.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
