  import { useEffect, useState } from "react";
  import Calendar from "../Calendar/Calendar.jsx";
  import { Link, useNavigate } from "react-router-dom";
  import { fetchTaskById } from "../../services/api.js";

  const PopBrowse = ({ taskId, onClose }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    if (taskId) {
      const idToFetch = typeof taskId === 'string' ? taskId : taskId?.id;
      setLoading(true);
      fetchTaskById(idToFetch)
        .then((data) => {
          setTask(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [taskId]);

  console.log('Удаляемая задача id:', task._id || task.id);

const handleDelete = async () => {
  if (!task || !task._id) {
    alert('Некорректный id задачи');
    return;
  }
  if (window.confirm('Вы действительно хотите удалить задачу?')) {
    try {
      await deleteTask(task._id || task.id);
      alert('Задача удалена');
      onClose();
    } catch (err) {
      alert('Ошибка при удалении задачи');
    }
  }
};

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!task) {
    return null; // или сообщение о том, что задача не найдена
  }

  // Обработчик закрытия — возвращает на страницу
  const handleClose = () => {
    navigate(-1); // Вернуться на предыдущую страницу
  };

    return (
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{task.title}</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">{task.topic || 'Без названия'}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  {/* тут ваши статусы */}
                  <div className="status__theme _hide"><p>Без статуса</p></div>
                  <div className="status__theme _gray"><p className="_gray">Нужно сделать</p></div>
                  <div className="status__theme _hide"><p>В работе</p></div>
                  <div className="status__theme _hide"><p>Тестирование</p></div>
                  <div className="status__theme _hide"><p>Готово</p></div>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                      value={task.description || ''}
                    />
                  </div>
                </form>
                <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar />
              </div>
              </div>
              {/* Категория, кнопки и т.д. */}
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  {/* Редактировать, Удалить */}
                  <button className="btn-browse__edit _btn-bor _hover03">
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>
                  <Link>Закрыть</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default PopBrowse;