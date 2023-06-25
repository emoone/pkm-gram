import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cn from 'clsx';

interface PropsType {
  type?: string;
  placeHolder?: string;
  className?: string;
  accept?: string;
  register: UseFormRegisterReturn;
  id?: string;
}
export function CustomInput(props: PropsType) {
  const {
    type = 'text',
    placeHolder = 'placeHolder',
    className = '',
    accept,
    register,
    id,
  } = props;

  // block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6]
  return (
    <input
      id={id}
      type={type}
      {...register}
      placeholder={placeHolder}
      className={cn('focus:ring-0 w-full bg-transparent', className)}
      accept={accept} // 미디어 파일 확장자 |audio/*|video/*|image/*|미디어 타입"
    />
  );
}
