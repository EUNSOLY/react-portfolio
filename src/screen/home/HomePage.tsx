import { useEffect, useState } from 'react';
import { tm } from '../../utils/twMerge';

const HomePage = () => {
  const titleList: string[] = ['끊임없이 성장하는', '끊임없이 도전하는', '오늘과 내일이 다른'];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [title, setTitle] = useState<string>(titleList[currentIdx]);

  const onClickChangeTitle = () => {
    setCurrentIdx((prevIdx) => {
      const nextIdx = (prevIdx + 1) % titleList.length; // 다음 인덱스 계산
      setTitle(titleList[nextIdx]);
      return nextIdx;
    });
  };
  return (
    <div className={tm('h-full flex flex-col justify-center items-center gap-2 select-none')}>
      <h2 className={tm('text-3xl')}>안녕하세요!</h2>
      <p className={tm('text-4xl font-bold text-pointColor cursor-pointer ')} onClick={onClickChangeTitle}>
        {title}
      </p>
      <p className={tm('text-3xl')}>프론트엔드 개발자 이은솔입니다.</p>
    </div>
  );
};

export default HomePage;
