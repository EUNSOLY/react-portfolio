import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // 사용자 브라우저 정보가 있다면 브라우저 정보 반환 없다면 빈 문자열 반환
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      // 정규식 모바일 장치 키워드 포함 체크
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobile || ('ontouchstart' in window && window.innerWidth <= 1024) || window.innerWidth <= 524);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
