/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, ReactNode, useContext, useReducer } from 'react';
const formContext = createContext<IFormProvider | undefined>(undefined);

export type IState = {
  movieName: string;
  genre: string;
  director: string;
  productionYear: string;
  info: string;
  id: number;
  errorMovieName: string;
  errorGenre: string;
  errorDirector: string;
  errorProductYear: string;
  statusMovieName: boolean;
  statusDirector: boolean;
  statusProductYear: boolean;
  statusGenre: boolean;
};

type IPayload = { key: string; value: string } | undefined;

export type IAction = { type: string; payload: IPayload };

const formReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'UPDATE-VALUE':
      return {
        ...state,
        [action.payload!.key]: action.payload!.value,
      };
    case 'CLEAR-STATE':
      return {
        movieName: '',
        genre: '',
        director: '',
        productionYear: '',
        info: '',
        id: 0,
        errorMovieName: '',
        errorGenre: '',
        errorDirector: '',
        errorProductYear: '',
        isValid: false,
        statusMovieName: false,
        statusDirector: false,
        statusProductYear: false,
        statusGenre: false,
      };

    case 'AUTH-movieName':
      if (state.movieName.length < 3) {
        return {
          ...state,
          errorMovieName: 'اسم باید حداقل دارای سه کاراکتر باشد',
          statusMovieName: false,
        };
      } else {
        return { ...state, errorMovieName: '', statusMovieName: true };
      }
    case 'AUTH-director':
      if (state.director.length === 0) {
        return {
          ...state,
          errorDirector: 'لطفا نام کارگردان را وارد کنید',
          statusDirector: false,
        };
      } else {
        return { ...state, errorDirector: '', statusDirector: true };
      }
    case 'AUTH-productionYear':
      if (state.productionYear.length === 0) {
        return {
          ...state,
          errorProductYear: 'لطفا تاریخ تولید را وارد کنید',
          statusProductYear: false,
        };
      } else {
        return { ...state, errorProductYear: '', statusProductYear: true };
      }
    case 'AUTH-genre':
      if (state.genre === '') {
        return {
          ...state,
          statusGenre: false,
          errorGenre: 'لطفا ژانر را انتخاب کنید',
        };
      } else {
        return {
          ...state,
          statusGenre: true,
          errorGenre: '',
        };
      }
    case 'EDIT-VALUE':
      return { ...action.payload };
    default:
      return { ...state };
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
    id: 0,
    errorMovieName: '',
    errorGenre: '',
    errorDirector: '',
    errorProductYear: '',
    statusMovieName: false,
    statusDirector: false,
    statusProductYear: false,
    statusGenre: false,
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
