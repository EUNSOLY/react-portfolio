import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/useRouter';

const Router = () => {
  const hookRouter = useRouter();
  return <RouterProvider router={hookRouter.routers} />;
};

export default Router;
