import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../../screen/home/HomePage';
import AboutPage from '../../screen/about/AboutPage';
import MainLayout from '../../layout/MainLayout';
import ProjectPage from '../../screen/project/ProjectPage';
import ConnectPage from '../../screen/connect/ConnectPage';

interface hookFace {
  routers: ReturnType<typeof createBrowserRouter>;
}

const useRouter = (): hookFace => {
  const routers = createBrowserRouter(
    [
      {
        path: `/`,
        element: <MainLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/about', element: <AboutPage /> },
          { path: '/project', element: <ProjectPage /> },
          { path: '/connect', element: <ConnectPage /> },
        ],
      },
    ],
    { basename: '/eunsoly' }
  );

  return {
    routers,
  };
};

export default useRouter;
