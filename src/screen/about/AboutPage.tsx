import { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/image/profileImage.png';
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

const AboutPage = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (width <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

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
  };

  const [selectSkillTitle, setSelectSkillTitle] = useState<string>('HTML');
  const [selectSkill, setSelectSkill] = useState<AboutDataType>({ title: '', content: [], icon: '' });
  const [selectToolTitle, setSelectToolTitle] = useState<string>('Notion');

  useEffect(() => {
    const temp: AboutDataType = skillsData.find((skill) => skill.title === selectSkillTitle) ?? {
      title: '',
      content: [],
      icon: '',
    };
    setSelectSkill(temp);
  }, [selectSkillTitle]);

  return (
    <div
      ref={divRef}
      className="h-full bg-boardBg rounded-md p-2 text-dark select-none  overflow-y-scroll overflow-x-hidden"
    >
      <div className={tm('flex justify-center items-center')}>
        {isMobile && (
          <div
            className={tm(
              'self-center',
              'flex justify-center items-center border-4 rounded-full overflow-hidden min-h-64 min-w-64 w-64'
            )}
          >
            <img src={profileImage} alt="profile" className={tm('min-w-64 w-64 -mt-1', '')} />
          </div>
        )}
      </div>

      <div className={tm('mt-6 w-full')}>
        <p className={tm('font-bold text-xl border-b border-dark pb-2')}>
          My Skills
          {/* <span className="text-xs">더 알아보기</span> */}
        </p>
        <div className={tm('w-full flex gap-3 mt-2 flex-wrap')}>
          {skillsData.map((data, i) => {
            return (
              <div
                key={`${data.title}-${i}`}
                className={tm(
                  'min-w-9 w-9 h-9 min-h-9 flex justify-center items-center cursor-pointer ',
                  selectSkillTitle === data.title && 'scale-110'
                )}
                onClick={() => setSelectSkillTitle(data.title)}
              >
                <img src={skillIcons[data.title as keyof typeof skillIcons]} alt="icon" className={tm('h-full')} />
              </div>
            );
          })}
        </div>
        {selectSkill && (
          <div className={tm('mt-4')}>
            <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
              <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
              <span>{selectSkill.title}</span>
            </p>
            {selectSkill.content.map((content) => (
              <p className={tm('pl-2')}>- {content}</p>
            ))}
          </div>
        )}
      </div>

      <div className={tm('mt-6 w-full')}>
        <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Tools</p>
        <div className={tm('flex gap-3 mt-2')}>
          {toolsData.map((data, i) => {
            return (
              <div
                key={`${data.title}-${i}`}
                className={tm(
                  'min-w-9 w-9 h-9 min-h-9 flex justify-center items-center cursor-pointer',
                  selectToolTitle === data.title && 'scale-110'
                )}
                onClick={() => setSelectToolTitle(data.title)}
              >
                <img src={skillIcons[data.title as keyof typeof skillIcons]} alt="icon" className={tm('h-full')} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={tm('mt-12 w-full')}>
        <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Certificate</p>
        <div className={tm('flex gap-6')}>
          {certificateData.map((data, i) => {
            return (
              <div key={`${data.title}-${i}`} className={tm('flex flex-col py-2 text-xs')}>
                <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
                  <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
                  <span>{data.title}</span>
                </p>
                <p className="text-[10px] pl-2">{data.date}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={tm('mt-3 w-full')}>
        <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Education</p>
        <div className={tm('flex gap-6')}>
          {educationData.map((data, i) => {
            return (
              <div key={`${data.title}-${i}`} className={tm('flex flex-col gap-2 py-2 text-xs')}>
                <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
                  <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
                  <span>{data.title}</span>
                </p>
                <p className={'whitespace-pre-wrap pl-2'}>{data.content}</p>
                <p className="text-[10px] pl-2">{data.date}</p>
              </div>
            );
          })}
        </div>
      </div>
      {!isMobile && <img src={profileImage} alt="profile" className={tm('flex w-80 fixed bottom-0 right-0')} />}
    </div>
  );
};

export default AboutPage;
