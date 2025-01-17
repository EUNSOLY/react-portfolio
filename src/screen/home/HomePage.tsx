import { useEffect, useState } from 'react';
import { tm } from '../../utils/twMerge';
import useNavigation from '../../router/hooks/useNavigation';
import { useAppDispatch } from '../../utils/store';
import { setSelectMenuName } from '../../data/menuSlice';
import Button from '../../components/ui/Button';
import axios from 'axios';

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
    <div className={tm('h-full flex flex-col justify-center items-center gap-8 select-none')}>
      <div className="grid gap-2 text-center">
        <h2 className={tm('text-base', 'sm:text-3xl')}>안녕하세요!</h2>
        <p
          className={tm('text-lg font-bold text-pointColor cursor-pointer', 'sm:text-4xl')}
          onClick={onClickChangeTitle}
        >
          {title}
        </p>
        <p className={tm('text-base', 'sm:text-3xl')}>프론트엔드 개발자 이은솔입니다.</p>
      </div>

      <div className={tm('flex gap-2 flex-wrap px-2', 'max-xs:justify-center')}>
        <Button
          onClick={onClickPDFDownload}
          className="max-sx:w-[120px] max-xs:min-w-[120px] max-xs:max-w-[120px] max-xs:px-0"
        >
          이력서
        </Button>
        {/* <Button
          onClick={naviToProjects}
          className="max-sx:w-[120px] max-xs:min-w-[120px] max-xs:max-w-[120px] max-xs:px-0"
        >
          프로젝트 바로보기
        </Button> */}
        <Button
          onClick={() => alert('준비중 입니다.')}
          className="max-sx:w-[120px] max-xs:min-w-[120px] max-xs:max-w-[120px] max-xs:px-0"
        >
          경력기술서
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
