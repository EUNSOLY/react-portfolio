import { useEffect, useState } from 'react';
import { tm } from '../../utils/twMerge';
import useNavigation from '../../router/hooks/useNavigation';
import { useAppDispatch } from '../../utils/store';
import { setSelectMenuName } from '../../data/menuSlice';
import Button from '../../components/ui/Button';
import axios from 'axios';
import { IconArrowRight, IconChevronCompactRight, IconChevronDown, IconFileDownload } from '@tabler/icons-react';

const HomePage = () => {
  const navi = useNavigation();
  const dispatch = useAppDispatch();
  const pdfPath = '/src/assets/etc/이은솔 프론트엔드 개발자 이력서.pdf'; // PDF 파일 경로

  const titleList: string[] = ['전세계가 주목하는', '끊임없이 성장하는', '끊임없이 도전하는', '오늘과 내일이 다른'];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [title, setTitle] = useState<string>(titleList[currentIdx]);

  // INFO 메인 타이틀 변경 핸들러
  const onClickChangeTitle = () => {
    setCurrentIdx((prevIdx) => {
      const nextIdx = (prevIdx + 1) % titleList.length; // 다음 인덱스 계산
      setTitle(titleList[nextIdx]);
      return nextIdx;
    });
  };

  // INFO PDF 이력서 다운로드
  const onClickPDFDownload = async () => {
    console.log('PDF 다운로드 작동');
    const fileUrl = `${process.env.PUBLIC_URL}/eunsolResume.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '이은솔이력서.pdf'; // 다운로드될 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const naviToProjects = () => {
    dispatch(setSelectMenuName('PROJECTS'));
    navi.naviToProjects();
  };

  return (
    <div
      className={tm(
        'min-h-screen',
        'flex flex-col justify-center items-center',
        'px-4 sm:px-6 md:px-8',
        'py-8 sm:py-12',
        'select-none',
        'relative' // 하단 화살표를 위한 relative 포지셔닝
      )}
    >
      {/* Main Content */}
      <div
        className={tm(
          'text-center',
          'space-y-4 sm:space-y-6 md:space-y-8',
          'max-w-[95%] sm:max-w-[85%] md:max-w-2xl',
          'mb-8 sm:mb-12'
        )}
      >
        {/* Title Section */}
        <div className={tm('space-y-2 sm:space-y-4 md:space-y-6', 'animate-fadeIn')}>
          <h2
            className={tm(
              'text-2xl sm:text-4xl md:text-6xl',
              'font-bold',
              'bg-gradient-to-r from-pointColor to-purple-500',
              'bg-clip-text text-transparent',
              'transition-all duration-300'
            )}
          >
            Front Developer
          </h2>

          <div
            className={tm('space-y-2 sm:space-y-3', 'cursor-pointer', 'transition-all duration-300')}
            onClick={onClickChangeTitle}
          >
            {/* <p className={tm('text-lg sm:text-2xl md:text-3xl', 'font-semibold')}>{title}</p> */}
            <p className={tm('text-base sm:text-xl md:text-4xl ', 'font-semibold')}>안녕하세요 이은솔입니다.</p>
          </div>
        </div>

        {/* Buttons */}
        <div
          className={tm('flex flex-col sm:flex-row', 'gap-3 sm:gap-4', 'justify-center items-center', 'mt-6 sm:mt-8')}
        >
          <Button
            onClick={onClickPDFDownload}
            className={tm(
              'w-full sm:w-auto',
              'px-4 py-2 sm:px-6 sm:py-3',
              'text-sm sm:text-base',
              'flex items-center justify-center gap-2'
            )}
          >
            <IconFileDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            이력서 다운로드
          </Button>

          <Button
            onClick={naviToProjects}
            className={tm(
              'w-full sm:w-auto',
              'px-4 py-2 sm:px-6 sm:py-3',
              'text-sm sm:text-base',
              'bg-purple-600 hover:bg-purple-700',
              'flex items-center justify-center gap-2'
            )}
          >
            프로젝트 보기
          </Button>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div
        className={tm('absolute bottom-8', 'animate-bounce cursor-pointer', 'transition-all duration-300')}
        onClick={() => navi.naviToAbout()}
      >
        <IconChevronDown className={tm('w-6 h-6 sm:w-8 sm:h-8', 'text-gray-400 hover:text-white')} />
      </div>
    </div>
  );
};

export default HomePage;
