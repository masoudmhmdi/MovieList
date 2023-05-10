/* eslint-disable no-case-declarations */
import { ReactNode, createContext, useContext, useReducer } from 'react';
import { IState } from './FormContext';
import { Action } from 'react-query/types/core/query';
import axios from 'axios';

const moveContext = createContext<IMovieProvider | []>([]);

type IAction =
  | {
      type: string;
      payload: IState;
    }
  | { type: string; payload: IState[] };

type IMovieProvider = {
  movieState: IState[];
  movieDispatch: React.Dispatch<IAction>;
};

const movieReducer = (state: IState[] | [], action: IAction) => {
  switch (action.type) {
    case 'INIT': {
      const state = [...(action.payload as any)];
      return state;
    }
    case 'ADD-MOVIE':
      axios.post('http://localhost:3000/movies', {
        ...action.payload,
        id: Date.now(),
      });
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE-MOVIE':
      const newArr = state.filter((i) => i.id !== +action.payload);
      axios.delete(`http://localhost:3000/movies/${action.payload}`);
      return newArr;
    default:
      return state;
  }
};

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  const [movieState, movieDispatch] = useReducer(movieReducer, []);
  return (
    <moveContext.Provider value={{ movieState, movieDispatch }}>
      {children}
    </moveContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(moveContext);
};
