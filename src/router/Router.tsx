import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from '../screen/home/HomePage';
import AboutPage from '../screen/about/AboutPage';
import useRouter from './hooks/useRouter';

const Router = () => {
  const hookRouter = useRouter();
  return (
    <RouterProvider router={hookRouter.routers} />

    // NOTE react-router-dom v6 하위에서는 아래와 같이 사용
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/test" element={<AboutPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default Router;
