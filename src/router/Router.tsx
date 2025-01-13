import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from '../screen/home/HomePage';
import AboutPage from '../screen/about/AboutPage';
import useRouter from './hooks/useRouter';

const Router = () => {
  const hookRouter = useRouter();
  return <RouterProvider router={hookRouter.routers} />;
};

export default Router;
