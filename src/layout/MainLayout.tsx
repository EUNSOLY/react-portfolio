import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useMainLayout from './hooks/useMainLayout';

const MainLayout = () => {
  const hook = useMainLayout();
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
