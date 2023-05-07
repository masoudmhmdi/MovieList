import { IFormProvider, useForm } from '../Store/FormContext';
import { ITextField } from '../Type/Typex';

function TextField({ placeholder, title, name }: ITextField) {
  const { state, dispatch }: any = useForm();
  console.log(state);
  return (
    <div className="w-full  2xl:w-[300px]">
      <div className="flex items-center mb-2 mr-1 gap-1">
        <div className="w-2 h-4 rounded-sm bg-yellow-500 "></div>
        <h2>{title}</h2>
      </div>
      <input
        required
        value={state[name]}
        name={name}
        onChange={(e) => {
          console.log(e.target.name);
          dispatch({
            type: 'UPDATE-VALUE',
            payload: {
              key: e.target.name,
              value: e.target.value,
            },
          });
        }}
        placeholder={placeholder}
        className="w-full bg-transparent border rounded py-2 outline-none px-2 placeholder:text-xs"
        type="text"
        onFocus={(e) => {
          const el = e.target;
          el.style.backgroundColor = '#59564D';
          el.style.borderColor = '#FFE664';
        }}
        onBlur={(e) => {
          const el = e.target;
          el.style.backgroundColor = 'transparent';
          el.style.borderColor = 'white';
        }}
      />
    </div>
  );
}

export default TextField;
