import React from 'react';
import { tm } from '../../utils/twMerge';

type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends ButtonTypes {
  onClick?: () => void;
  children: React.ReactNode | string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, children, ...props }, ref?: React.Ref<HTMLButtonElement>) => {
    return (
      <button
        ref={ref}
        className={tm(
          `flex items-center`,
          `px-8 py-3`,
          `bg-blue-600 rounded-full font-semibold`,
          `transition-colors duration-200`,
          `hover:bg-blue-700`,
          `max-sx:px-0 max-sx:py-0 max-sx:w-[110px] max-sx:h-[30px] max-sx:justify-center max-sx:text-xs`, // 일반 모바일 보다 작을 때
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
