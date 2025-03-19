import { useState, useEffect } from 'react';

const useWindowDimensions = (pageWidth: number = 360) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      // 사용자 브라우저 정보가 있다면 브라우저 정보 반환 없다면 빈 문자열 반환
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      // 정규식 모바일 장치 키워드 포함 체크 (i는 대소문자 구분 없이 검사(case-insensitive)를 의미)
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobile || ('ontouchstart' in window && window.innerWidth <= 780) || window.innerWidth <= pageWidth);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return { width, height, isMobile };
};

export default useWindowDimensions;
