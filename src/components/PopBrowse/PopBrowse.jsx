    import { useContext, useEffect, useState } from "react";
    import Calendar from "../Calendar/Calendar.jsx";
    import { Link, useNavigate } from "react-router-dom";
    import { deleteTask, fetchTaskById, updateTask } from "../../services/api.js";
import { TaskContext } from "../../context/TaskContext.js";

    const categories = [
  { name: 'Web Design', className: '_orange' },
  { name: 'Research', className: '_green' },
  { name: 'Copywriting', className: '_purple' },
];

  const PopBrowse = ({ taskId, onClose, onTaskDeleted }) => {
    const { deleteTaskFromState, updateTaskInState } = useContext(TaskContext);
    const [task, setTask] = useState(null);
    const [originalTask, setOriginalTask] = useState(null); // для отмены
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(task ? task.date : null);

    const category = task ? categories.find(cat => cat.name === task.topic) : null;
    const categoryClass = category ? category.className : '_orange';

    useEffect(() => {
      if (taskId) {
        fetchTaskById(taskId)
          .then((data) => {
            setTask(data);
            setOriginalTask(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }
    }, [taskId]);

  const handleDelete = async () => {
    console.log('Начинаю удаление задачи с id:', task?._id);
    if (!task || !task._id) {
      alert('Некорректный id задачи');
      return;
    }
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      try {
        await deleteTask(task._id);
        deleteTaskFromState(task._id);
        console.log('Задача успешно удалена');
        if (onTaskDeleted) {
          console.log('Обновляем список задач');
          onTaskDeleted();
        }
        if (onClose) {
        console.log('Вызов onClose()');
        onClose();
      }
      } catch (err) {
        console.error('Ошибка при удалении:', err);
        alert('Ошибка при удалении задачи');
      }
    }
  };

    // Обработчик закрытия — возвращает на страницу
    const handleClose = () => {
      navigate(-1);
    };

      const handleEdit = () => {
      setIsEditing(true);
    };

      const handleCancel = () => {
      setTask(originalTask);
      setIsEditing(false);
    };

const handleSave = async () => {
  console.log('Отправляем данные для обновления:', task);
  try {
    const updatedTaskData = { ...task, date: selectedDate || task.date };
    const response = await updateTask(task._id, updatedTaskData);
    if (response) {
      updateTaskInState(response); // передаем один объект задачи
    } 
    if (onTaskDeleted) {
      console.log('Обновляем список задач');
      onTaskDeleted();
    }
    if (onClose) {
      console.log('Вызов onClose()');
      onClose();
    }
    setIsEditing(false);
  } catch (err) {
    console.error('Ошибка при сохранении:', err);
    alert('Ошибка при сохранении изменений');
  }
};

    const handleChange = (field, value) => {
      setTask(prev => ({ ...prev, [field]: value }));
    };
    
    if (error) {
      return <div>Ошибка: {error}</div>;
    }

    if (!task) {
      return null; 
    }

      return (
        <div className="pop-browse" id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{task.title}</h3>
                  <div className={`categories__theme theme-top ${categoryClass} _active-category`}>
                  <p className={categoryClass}>{task.topic || 'Без названия'}</p>
                  </div>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    {isEditing ? (
                    <div className="status__themes status__themes--inline">
                      {[
                        'Без статуса',
                        'Нужно сделать',
                        'В работе',
                        'Тестирование',
                        'Готово'
                      ].map((statusOption) => (
                        <button
                          key={statusOption}
                          type="button"
                          className={`status__theme ${
                            task.status === statusOption ? '_active' : ''
                          }`}
                          onClick={() => handleChange('status', statusOption)}
                        >
                          {statusOption}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="status__theme _gray">
                    <p className="_gray">{task.status}</p>
                  </div>
                  )}
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                      {isEditing ? (
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        value={task.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                      />
                    ) : (
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        value={task.description || ''}
                      />
                    )}
                    </div>
                  </form>
                  <div className="pop-new-card__calendar calendar">
                  <p className="calendar__ttl subttl">Даты</p>
                                    <Calendar
                    editable={isEditing}
                    date={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                  />
                </div>
                </div>
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    {isEditing ? (
                    <>
                      <button className="btn-browse__save _btn-bor _hover03" onClick={handleSave}>Сохранить</button>
                      <button className="btn-browse__cancel _btn-bor _hover03" onClick={handleCancel}>Отмена</button>
                    </>
                  ) : (
                    <button className="btn-browse__edit _btn-bor _hover03" onClick={handleEdit}>Редактировать задачу</button>
                  )}
                    <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
                      Удалить задачу
                    </button>
                  </div>
                  <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>
                    <Link>Закрыть</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
      );
    };

export default PopBrowse;