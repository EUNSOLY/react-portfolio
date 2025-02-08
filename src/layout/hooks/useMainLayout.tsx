import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuNameType } from '../../utils/type';
import { useAppDispatch } from '../../utils/store';
import { setSelectMenuName } from '../../data/menuSlice';

interface hookType {}
const useMainLayout = (): hookType => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const path = location.pathname;
  useEffect(() => {
    if (path !== '/') {
      const tempPath = path.replace('/', '').toLocaleUpperCase() as MenuNameType;
      dispatch(setSelectMenuName(tempPath));
    } else {
      dispatch(setSelectMenuName('HOME'));
    }
  }, [path]);

  return {};
};

export default useMainLayout;
