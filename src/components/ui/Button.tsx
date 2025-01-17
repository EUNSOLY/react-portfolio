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
          `min-w-[100px]  border px-4 py-2 cursor-pointer text-[12px] font-bold`,
          'hover:bg-pointColor hover:border-pointColor',
          `sm:text-sm`,
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
