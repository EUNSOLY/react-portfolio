import { useEffect, useRef, useState } from 'react';
import profile from '../../assets/image/profile.jpeg';
import removeProfile from '../../assets/image/removeProfile.png';
import profileCharacter from '../../assets/image/removeProfileCharacter.png';
import { educationData } from '../../data/mock/mockupData';
import { tm } from '../../utils/twMerge';
import useWindowDimensions from '../../utils/useWindowDimensions';

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

  return (
    <div
      ref={divRef}
      className="h-full bg-boardBg rounded-md p-2 text-dark select-none overflow-x-hidden overflow-y-scroll"
    >
      <div className={tm('flex flex-col w-full h-full')}>
        {isMobile && (
          <div className={tm('flex justify-center items-center border-4 rounded-full ')}>
            <img src={removeProfile} alt="profile" className={tm('w-64 -mt-5', '')} />
          </div>
        )}

        <div className={tm('flex-1')}>
          <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Skills</p>
          <div className={tm('flex gap-6')}>
            {educationData.map((data, i) => {
              return (
                <div key={`${data.title}-${i}`} className={tm('flex flex-col gap-2 py-2 text-xs')}>
                  <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
                    <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
                    <span>{data.title}</span>
                  </p>
                  <p className={'whitespace-pre-wrap'}>{data.content}</p>
                  <p className="text-[10px] ">{data.date}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={tm('')}>
          <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Education</p>
          <div className={tm('flex gap-6')}>
            {educationData.map((data, i) => {
              return (
                <div key={`${data.title}-${i}`} className={tm('flex flex-col gap-2 py-2 text-xs')}>
                  <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
                    <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
                    <span>{data.title}</span>
                  </p>
                  <p className={'whitespace-pre-wrap'}>{data.content}</p>
                  <p className="text-[10px] ">{data.date}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={tm('')}>
          <p className={tm('font-bold text-xl border-b border-dark pb-2')}>My Education</p>
          <div className={tm('flex gap-6')}>
            {educationData.map((data, i) => {
              return (
                <div key={`${data.title}-${i}`} className={tm('flex flex-col gap-2 py-2 text-xs')}>
                  <p className={tm('font-bold text-sm', 'flex items-center gap-1')}>
                    <span className={tm('text-transparent bg-dark w-[5px] h-[5px] rounded-full')} />
                    <span>{data.title}</span>
                  </p>
                  <p className={'whitespace-pre-wrap'}>{data.content}</p>
                  <p className="text-[10px] ">{data.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {!isMobile && <img src={removeProfile} alt="profile" className={tm('flex w-80 fixed bottom-0 right-0')} />}
    </div>
  );
};

export default AboutPage;
