import { useNavigate, useParams } from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';


const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <div>Некорректный идентификатор задачи</div>;
  }

  return <PopBrowse taskId={id} onClose={() => navigate(-1)} />;
};

export default EditTaskPage;