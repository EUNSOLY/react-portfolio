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
    <div className={tm('h-full flex flex-col justify-center items-center gap-10 select-none')}>
      <div className={tm(`text-center grid gap-1`, `md:gap-6`)}>
        <h2
          className={tm(
            `bg-gradient-to-r from-pointColor to-purple-500`,
            `bg-clip-text text-transparent`,
            `text-lg font-bold`,
            `md:text-6xl `
          )}
        >
          Front Developer
        </h2>

        <p className={tm(`text-base font-semibold`, `md:text-3xl`)}>안녕하세요 이은솔입니다.</p>
      </div>

      <div className={tm(`flex gap-4 justify-center`, `max-sx:flex-wrap`)}>
        <Button onClick={onClickPDFDownload} className={tm(`gap-1`)}>
          {window.innerWidth >= 480 && <IconFileDownload />}
          이력서 다운로드
        </Button>
        <Button onClick={() => navi.naviToProjects()} className={tm(`bg-purple-600 gap-1`, `hover:bg-purple-700`)}>
          프로젝트 보기
          {/* {window.innerWidth >= 480 && <IconArrowRight size={14} />} */}
        </Button>
      </div>
      <div className={tm(`absolute bottom-8 animate-bounce`, 'cursor-pointer')} onClick={() => navi.naviToAbout()}>
        <IconChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default HomePage;
