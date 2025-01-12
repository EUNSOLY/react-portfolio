import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
