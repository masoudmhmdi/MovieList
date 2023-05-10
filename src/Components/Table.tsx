import { useQuery } from 'react-query';
import { IState } from '../Store/FormContext';
import { useMovie } from '../Store/MovieContext';
import TableRow from './TableRow';

function Table() {
  const { movieState, movieDispatch }: any = useMovie();

  useQuery('getMovie', () => {
    return fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        movieDispatch({
          type: 'INIT',
          payload: data,
        });
      });
  });

  return (
    <div className="w-full bg-[#595959] text-gray-200 py-6 px-12">
      <div className="w-full flex gap-1 justify-start items-center ">
        <div className="w-2 h-5 rounded-sm bg-yellow-500 "></div>
        <h1 className="text-xl">لیست فیلم</h1>
      </div>
      <div className="w-full overflow-auto">
        <table className=" w-full my-6 text-center ">
          <thead>
            <tr className="border-b-2 border-gray-200 ">
              <th className="min-w-[100px]">ردیف</th>
              <th className="min-w-[100px]">تام فیلم</th>
              <th className="min-w-[100px]">کارگردان</th>
              <th className="min-w-[100px]">ژانر فیلم</th>
              <th className="min-w-[100px]">سال ساخت</th>
              <th className="min-w-[100px]">توضیحات</th>
              <th className="min-w-[100px] ">حذف</th>
            </tr>
          </thead>
          <tbody>
            {movieState.map((item: IState, index: string) => {
              return <TableRow item={item} index={index} key={item.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  7;
}

export default Table;
