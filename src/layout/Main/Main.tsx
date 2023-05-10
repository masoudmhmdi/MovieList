import Form from '../../Components/Form';
import Table from '../../Components/Table';
import { FormContextProvider } from '../../Store/FormContext';
import { MovieContextProvider } from '../../Store/MovieContext';

function Main() {
  return (
    <FormContextProvider>
      <MovieContextProvider>
        <div className="w-full ">
          <Form />
          <Table />
        </div>
      </MovieContextProvider>
    </FormContextProvider>
  );
}

export default Main;
