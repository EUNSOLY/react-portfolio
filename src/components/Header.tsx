import { tm } from '../utils/twMerge';
import logo from '../assets/image/logo.svg';
import '../style/header.css';
import { useState } from 'react';
import { MenuNameType } from '../utils/type';
import { useAppDispatch, useAppSelector } from '../utils/store';
import { setSelectMenuName } from '../data/menuSlice';
const Header = () => {
  const navList: { name: MenuNameType; path: string }[] = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/project' },
    { name: 'CONNECT', path: '/connect' },
  ];

  const dispatch = useAppDispatch();
  const selectMenu = useAppSelector((state) => state.menu.selectMenuName);
  const handleSelectMenu = (menuName: MenuNameType) => {
    dispatch(setSelectMenuName(menuName));
  };

  return (
    <div className={tm('그리드컨테이너', 'header-grid')}>
      <h1 className={tm('header-logo', 'min-w-16 w-16')}>
        <img src={logo} alt="logo" />
      </h1>
      <nav className={tm('-slate-400')}>
        <ul className={tm('flex items-center gap-5', 'header-nav')}>
          {navList.map((nav) => (
            <li
              key={nav.name}
              className={tm('cursor-pointer', 'hover:text-pointColor', selectMenu === nav.name && 'text-pointColor')}
              onClick={() => handleSelectMenu(nav.name)}
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
