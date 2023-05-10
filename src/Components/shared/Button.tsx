import React from 'react';
type ITypes = {
  save: string;
  [type: string]: string;
};

type IButton = {
  type: string;
  children: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isValid?: boolean;
};
function Button({ type, children, onclick }: IButton) {
  const types: ITypes = {
    save: 'w-[100px] h-[35px] text-sm text-medium rounded text-[#515050] bg-[#F6C90E] outline-none text-black',
    cancel:
      'w-[100px] h-[35px] text-sm text-medium rounded border border-white',
    delete: 'w-24 h-[35px] text-sm text-medium rounded border border-red-500',
    info: ' h-[35px] text-sm text-medium rounded border border-blue-500',
  };
  return (
    <button
      onClick={onclick}
      type={type === 'save' ? 'submit' : 'button'}
      className={`${types[type]} w-24`}
    >
      {children}
    </button>
  );
}

export default Button;
