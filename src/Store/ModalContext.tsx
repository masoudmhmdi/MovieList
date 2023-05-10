import { ReactNode, createContext, useContext, useState } from 'react';
const modalContext = createContext<IInfoContext | undefined>(undefined);

export type IInfoContext = {
  info: string;
  SetInfo: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [info, SetInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <modalContext.Provider value={{ info, SetInfo, isOpen, setIsOpen }}>
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(modalContext);
};
