import { tm } from '../utils/twMerge';
import logo from '../assets/image/logo.svg';
import { MenuNameType } from '../utils/type';
import { useAppDispatch, useAppSelector } from '../utils/store';
import { setSelectMenuName } from '../data/menuSlice';
import useNavigation from '../router/hooks/useNavigation';
import { useEffect } from 'react';
const Header = () => {
  const navList: { name: MenuNameType; path: string }[] = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONNECT', path: '/connect' },
  ];

  const dispatch = useAppDispatch();
  const navi = useNavigation();
  const selectMenu = useAppSelector((state) => state.menu.selectMenuName);
  const handleSelectMenu = (menuName: MenuNameType, path: string) => {
    dispatch(setSelectMenuName(menuName));
    navi.naviToIntegration(path);
  };

  // 새로고침 할 때 주소 새로고침 안되는 현상 있어 최초 1회 루트 경로 적용
  useEffect(() => {
    navi.naviToMain();
  }, []);
  return (
    <div className={tm('flex flex-wrap items-center justify-between h-[50px] gap-2')}>
      <h1 className={tm('min-w-16 w-16')}>
        <img src={logo} alt="logo" />
      </h1>
      <nav>
        <ul className={tm('flex items-center gap-5')}>
          {navList.map((nav) => (
            <li
              key={nav.name}
              className={tm('cursor-pointer', 'hover:text-pointColor', selectMenu === nav.name && 'text-pointColor')}
              onClick={() => handleSelectMenu(nav.name, nav.path)}
            >
              {nav.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
