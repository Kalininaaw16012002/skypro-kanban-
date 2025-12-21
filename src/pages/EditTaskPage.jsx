import { useParams } from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';


const EditTaskPage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Некорректный идентификатор задачи</div>;
  }

  console.log('Получен id из URL:', id);

  return <PopBrowse taskId={id} onClose={() => {}} />;
};

export default EditTaskPage;