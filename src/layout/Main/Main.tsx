import Form from '../../Components/Form';
import { FormContextProvider } from '../../Store/FormContext';

function Main() {
  return (
    <FormContextProvider>
      <div className="w-full ">
        <Form />
      </div>
    </FormContextProvider>
  );
}

export default Main;
