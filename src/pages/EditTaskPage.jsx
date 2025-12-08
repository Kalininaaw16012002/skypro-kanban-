import { useParams } from 'react-router-dom';
import { CardList } from '../data';
import PopBrowse from '../components/PopBrowse/PopBrowse';

const EditTaskPage = () => {
  const { id } = useParams();
  const taskId = parseInt(id, 10);
  const task = CardList.find((item) => item.id === taskId);

  if (!task) {
    return <div>Задача не найдена</div>;
  }

  return <PopBrowse task={task} />;
};

export default EditTaskPage;