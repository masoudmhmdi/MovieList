import React from 'react';
type ITypes = {
  save: string;
  [type: string]: string;
};

type IButton = {
  type: string;
  children: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function Button({ type, children, onclick }: IButton) {
  const types: ITypes = {
    save: 'w-[100px] h-[35px] text-sm text-medium rounded text-[#515050] bg-[#F6C90E]',
    cancel:
      'w-[100px] h-[35px] text-sm text-medium rounded border border-white',
  };
  return (
    <button
      onClick={onclick}
      type={type === 'cancel' ? 'button' : 'submit'}
      className={`${types[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
