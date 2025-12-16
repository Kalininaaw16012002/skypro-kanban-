import { useParams } from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';

const EditTaskPage = () => {
  const { id } = useParams(); // получаем параметр url
  const taskId = id ? parseInt(id, 10) : null; // преобразуем в число, если есть

  if (!taskId) {
    return <div>Некорректный идентификатор задачи</div>;
  }

  return <PopBrowse taskId={taskId} onClose={() => { /* обработчик */ }} />;
};

export default EditTaskPage;