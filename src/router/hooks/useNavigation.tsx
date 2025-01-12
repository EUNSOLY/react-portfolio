import { useNavigate } from 'react-router-dom';

interface hookNavi {
  back: () => void;
}
const useNavigation = (): hookNavi => {
  const navigate = useNavigate();
  // 뒤로가기
  const back = () => {
    navigate(-1);
  };
  return {
    back,
  };
};

export default useNavigation;
