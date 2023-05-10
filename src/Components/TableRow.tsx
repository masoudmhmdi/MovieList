import { IState, useForm } from '../Store/FormContext';
import { useModal } from '../Store/ModalContext';
import { useMovie } from '../Store/MovieContext';
import Button from './shared/Button';

function TableRow({ item, index }: { item: IState; index: string }) {
  const { movieState, movieDispatch }: any = useMovie();
  const { info, SetInfo, isOpen, setIsOpen }: any = useModal();
  const { state, dispatch }: any = useForm();
  return (
    <tr className="h-12 ">
      <td className="min-w-[100px] h-20">{index}</td>
      <td className="min-w-[100px] h-20">{item.movieName}</td>
      <td className="min-w-[100px] h-20">{item.director}</td>
      <td className="min-w-[100px] h-20">{item.genre}</td>
      <td className="min-w-[100px] h-20">{item.productionYear}</td>
      <td className="min-w-[100px] h-20">
        <Button
          onclick={() => {
            setIsOpen(true);
            SetInfo(item.info);
          }}
          type="info"
        >
          توضیحات
        </Button>
      </td>
      <td className="min-w-[100px]">
        <Button
          onclick={() => {
            movieDispatch({
              type: 'DELETE-MOVIE',
              payload: item.id,
            });
          }}
          type="delete"
        >
          حذف
        </Button>
      </td>
      <td className="min-w-[100px]">
        <Button
          onclick={() => {
            dispatch({
              type: 'EDIT-VALUE',
              payload: item,
            });
          }}
          type="save"
        >
          ویرایش
        </Button>
      </td>
    </tr>
  );
}

export default TableRow;
