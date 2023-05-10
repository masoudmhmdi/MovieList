import { useState } from 'react';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import TextField from './TextField';
import Button from './shared/Button';
import { useForm } from '../Store/FormContext';
import { useMovie } from '../Store/MovieContext';
import DateField from './DateField';

function Form() {
  const { state, dispatch }: any = useForm();
  const { movieState, movieDispatch }: any = useMovie();

  // console.log(state);

  return (
    <form
      className="flex flex-col md:flex-row w-full bg-[#515050] text-gray-200 px-12 py-24  gap-12 "
      onSubmit={(e) => {
        e.preventDefault();
        if (
          state.statusDirector === true &&
          state.statusMovieName === true &&
          state.statusProductYear === true &&
          state.statusGenre === true
        ) {
          if (state.mood === 'submit') {
            movieDispatch({
              type: 'ADD-MOVIE',
              payload: state,
            });
            dispatch({ type: 'CLEAR-STATE' });
          } else {
            dispatch({
              type: 'EDIT-MOVIE',
              payload: state,
            });
            dispatch({
              type: 'TOGGLE-MOOD',
            });
          }
        } else {
          dispatch({
            type: 'AUTH-movieName',
          });
          dispatch({
            type: 'AUTH-genre',
          });
          dispatch({
            type: 'AUTH-productionYear',
          });
          dispatch({
            type: 'AUTH-director',
          });
        }
      }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="w-full flex flex-col  gap-6">
          <TextField
            name="movieName"
            title="نام فیلم "
            placeholder="نام فیلم را بنویسید"
            errMassage={state.errorMovieName}
          />
          <SelectField
            name="genre"
            title="ژانر فیلم"
            placeholder="نام فیلم را بنویسید"
            errMassage={state.errorGenre}
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          <TextField
            errMassage={state.errorDirector}
            name="director"
            title="کارگردان"
            placeholder="نام فیلم را بنویسید"
          />
          <DateField
            errMassage={state.errorProductYear}
            name="productionYear"
            title="سال تولید"
            placeholder="نام فیلم را بنویسید"
          />
        </div>
      </div>
      <div className="w-full    flex flex-col  items-center gap-3">
        <TextAreaField
          name="info"
          title="توضیحات"
          placeholder="توضیحات درباره فیلم"
        />
        <div className="flex gap-3 mr-auto">
          <Button type="save">ذخیره</Button>
          <Button
            onclick={() => {
              dispatch({ type: 'CLEAR-STATE' });
            }}
            type="cancel"
          >
            انصراف
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
