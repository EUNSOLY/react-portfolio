import { NavigateOptions, useNavigate } from 'react-router-dom';

interface hookNavi {
  back: () => void;
  naviToMain: (options?: NavigateOptions | undefined) => void;
  naviToAbout: (options?: NavigateOptions | undefined) => void;
  naviToProjects: (options?: NavigateOptions | undefined) => void;
  naviToConnect: (options?: NavigateOptions | undefined) => void;
  naviToIntegration: (pathName: string, options?: NavigateOptions | undefined) => void;
}
const useNavigation = (): hookNavi => {
  const navigate = useNavigate();
  // 뒤로가기
  const back = () => {
    navigate(-1);
  };
  // 메인페이지
  const naviToMain = (options?: NavigateOptions | undefined) => {
    navigate('/');
  };
  // 어바웃페이지
  const naviToAbout = (options?: NavigateOptions | undefined) => {
    navigate('/about');
  };
  // 프로젝트페이지
  const naviToProjects = (options?: NavigateOptions | undefined) => {
    navigate('/projects');
  };
  // 커넥트페이지
  const naviToConnect = (options?: NavigateOptions | undefined) => {
    navigate('/connect');
  };
  const naviToIntegration = (pathName: string, options?: NavigateOptions | undefined) => {
    navigate(`${pathName}`);
  };
  return {
    back,
    naviToMain,
    naviToAbout,
    naviToProjects,
    naviToConnect,
    naviToIntegration,
  };
};

export default useNavigation;
