import React from 'react';
import { tm } from '../../utils/twMerge';

type InputTypes = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputProps extends InputTypes {
  //   children: React.ReactNode;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...porps }, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={tm(
          'bg-transparent border-b border-white text-white text-sm w-full p-2.5',
          'focus:outline-none focus:ring-pointColor ',
          className
        )}
        {...porps}
      />
    );
  }
);
Input.displayName = 'Input';
export default Input;
