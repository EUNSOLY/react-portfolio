import { useEffect, useState } from 'react';
import { tm } from '../../utils/twMerge';
import styles from './style/select.module.scss';

interface SelectProps<T> {
  menuList: T[];
  setState: React.Dispatch<React.SetStateAction<T | null>>;
  defaultValue: T;
  getLabel: (item: T) => string; // 각 아이템에서 표시할 텍스트를 추출하는 함수
  getValue: (item: T) => string | number; // 각 아이템의 고유 값을 추출하는 함수
}

const Select = <T,>({ menuList, setState, defaultValue, getLabel, getValue }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  // 초기값 설정을 useEffect로 이동
  useEffect(() => {
    if (defaultValue) {
      setSelectedItem(defaultValue);
    } else if (menuList.length > 0) {
      setSelectedItem(menuList[0]);
    }
  }, [defaultValue, menuList]);

  //   useEffect(() => {
  //     if (selectedItem) {
  //       setState(selectedItem);
  //     }
  //   }, [selectedItem, setState]);

  const handleChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: T) => {
    e.stopPropagation();
    setSelectedItem(item);
    setState(item);
    setIsOpen(false);
  };

  return (
    <div className={tm(`${styles['select-con']}`)} onClick={() => setIsOpen((prev) => !prev)}>
      <label className={tm(`${styles.label}`)}>{selectedItem ? getLabel(selectedItem) : '선택하세요'}</label>
      <ul className={tm(`${styles.list} ${isOpen ? styles.on : ''}`)}>
        {menuList.map((item) => (
          <li
            key={getValue(item)}
            className={tm(
              `${styles.select}`,
              selectedItem && getValue(selectedItem) === getValue(item) && styles.active
            )}
            onClick={(e) => handleChangeSelectValue(e, item)}
          >
            {getLabel(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
