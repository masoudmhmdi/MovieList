import { useForm } from '../Store/FormContext';
import { ITextField } from '../Type/Typex';

function SelectField({ placeholder, title, name, errMassage }: ITextField) {
  const { state, dispatch }: any = useForm();
  return (
    <div className="w-full  xl:w-[300px]">
      <div className="flex items-center mb-2 mr-1 gap-1">
        <div className="w-2 h-4 rounded-sm bg-yellow-500 "></div>
        <h2>{title}</h2>
      </div>
      <select
        value={state[name]}
        name={name}
        onChange={(e) => {
          dispatch({
            type: 'UPDATE-VALUE',
            payload: {
              key: e.target.name,
              value: e.target.value,
            },
          });
          dispatch({
            type: 'AUTH-genre',
          });
        }}
        placeholder={placeholder}
        className="w-full bg-transparent border rounded py-2 outline-none px-2 text-xs"
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
      >
        <option value="وحشت/هیجانی">وحشت/هیجانی</option>
        <option value="درام">درام</option>
        <option value="علمی تخیلی">علمی تخیلی</option>
        <option value="عاشقانه">عاشقانه</option>
        <option value="موزیکال">موزیکال</option>
        <option value="تینیجر">تینیجر</option>
        <option value="کمدی">کمدی</option>
        <option value="معمایی">معمایی</option>
      </select>
      <p>{errMassage}</p>
    </div>
  );
}

export default SelectField;
