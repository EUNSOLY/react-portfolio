import { tm } from '../../utils/twMerge';
import useNavigation from '../../router/hooks/useNavigation';
import { useAppDispatch } from '../../utils/store';
import { setSelectMenuName } from '../../data/menuSlice';
import Button from '../../components/ui/Button';
import { IconChevronDown, IconFileDownload } from '@tabler/icons-react';
import useWindowDimensions from '../../utils/useWindowDimensions';

const HomePage = () => {
  const navi = useNavigation();
  const dispatch = useAppDispatch();
  const { height, width, isMobile } = useWindowDimensions();
  const pdfPath = '/src/assets/etc/이은솔 프론트엔드 개발자 이력서.pdf'; // PDF 파일 경로

  // INFO PDF 이력서 다운로드
  const onClickPDFDownload = async () => {
    try {
      const fileUrl = `${process.env.PUBLIC_URL}/eunsolResume.pdf`;

      // fetch를 사용하여 파일을 blob으로 가져옵니다
      const response = await fetch(fileUrl);
      console.log(response, 'response');
      const blob = await response.blob();
      console.log(blob, 'blob');

      // Blob URL 생성
      const blobUrl = window.URL.createObjectURL(blob);
      console.log(blobUrl, 'blobUrl');

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = '프론트엔드_이은솔이력서.pdf'; // 원하는 파일명 지정

      document.body.appendChild(link);
      link.click();

      // cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('PDF 다운로드 중 오류 발생:', error);
    }
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
        <div className={tm('space-y-2 sm:space-y-4 md:space-y-6', 'animate-fadeIn')}>
          <h2
            className={tm(
              'text-2xl sm:text-4xl md:text-6xl',
              'font-bold',
              'bg-gradient-to-r from-pointColor to-purple-500',
              'bg-clip-text text-transparent',
              'transition-all duration-300',
              isMobile && ' text-2xl'
            )}
          >
            Front Developer
          </h2>

          <div className={tm('space-y-2 sm:space-y-3', 'transition-all duration-300')}>
            <p
              className={tm('text-base sm:text-xl md:text-4xl ', 'font-semibold', isMobile && ' text-sm')}
              style={{
                lineHeight: isMobile ? '' : '2.9rem',
              }}
            >
              안녕하세요 <span className={tm(isMobile ? 'text-xs' : 'text-3xl')}>🙂</span> <br />
              저는 어떤 개발자 일까요?
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div
          className={tm('flex flex-col sm:flex-row', 'gap-3 sm:gap-4', 'justify-center items-center', 'mt-6 sm:mt-8')}
        >
          {/* 'my-auto' // 수직 가운데 정렬 */}
          <Button
            onClick={onClickPDFDownload}
            className={tm(
              'w-full sm:w-auto max-sx:w-[140px]',
              'px-4 py-2 sm:px-6 sm:py-3',
              'text-sm sm:text-base',
              'flex items-center justify-center gap-2',
              isMobile && ' text-xs'
            )}
          >
            <IconFileDownload className={tm(`w-4 h-4 sm:w-5 sm:h-5`)} />
            이력서 다운로드
          </Button>

          <Button
            onClick={naviToProjects}
            className={tm(
              'w-full sm:w-auto max-sx:w-[140px]',
              'px-4 py-2 sm:px-6 sm:py-3',
              'text-sm sm:text-base',
              'bg-purple-600 hover:bg-purple-700',
              'flex items-center justify-center gap-2',
              isMobile && ' text-xs'
            )}
          >
            PROJECTS 바로가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
