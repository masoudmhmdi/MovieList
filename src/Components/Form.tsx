import { useState } from 'react';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import TextField from './TextField';
import Button from './shared/Button';
import { useForm } from '../Store/FormContext';

function Form() {
  const { state, dispatch }: any = useForm();
  return (
    <form className="w-full bg-[#515050] text-gray-200 px-12 py-24 flex gap-48">
      <div className="w-1/2 flex flex-wrap justify-between items-center gap-12">
        <div className="w-full flex gap-6 flex-wrap">
          <TextField
            name="movieName"
            title="نام فیلم "
            placeholder="نام فیلم را بنویسید"
          />
          <SelectField
            name="genre"
            title="ژانر فیلم"
            placeholder="نام فیلم را بنویسید"
          />
        </div>
        <div className="w-full flex gap-6 flex-wrap">
          <TextField
            name="director"
            title="کارگردان"
            placeholder="نام فیلم را بنویسید"
          />
          <TextField
            name="productionYear"
            title="سال تولید"
            placeholder="نام فیلم را بنویسید"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col  items-center gap-3">
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
