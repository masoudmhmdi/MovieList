/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, ReactNode, useContext, useReducer } from 'react';
const formContext = createContext<IFormProvider | undefined>(undefined);

export type IState = {
  movieName: string;
  genre: string;
  director: string;
  productionYear: string;
  info: string;
};

type IPayload = { key: string; value: string } | undefined;

export type IAction = { type: string; payload: IPayload };

const formReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'UPDATE-VALUE':
      return { ...state, [action.payload!.key]: action.payload!.value };
    case 'CLEAR-STATE':
      return {
        movieName: '',
        genre: '',
        director: '',
        productionYear: '',
        info: '',
      };

    default:
      return state;
      break;
  }
};
export type IFormProvider = {
  state: IState;
  dispatch: React.Dispatch<IAction>;
};
export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const init: IState = {
    movieName: '',
    genre: '',
    director: '',
    productionYear: '',
    info: '',
  };
  const [state, dispatch] = useReducer(formReducer, init);
  return (
    <formContext.Provider value={{ state, dispatch }}>
      {children}
    </formContext.Provider>
  );
};

export const useForm = () => {
  return useContext(formContext);
};
