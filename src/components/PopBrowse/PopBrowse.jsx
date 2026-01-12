import { useContext, useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar.jsx";
import { useNavigate } from "react-router-dom";
import { deleteTask, updateTask } from "../../services/api.js";
import { TaskContext } from "../../context/TaskContext.js";
import { PopBrowseContainer, SPopBrowse, SPopBrowseBlock, SPopBrowseCalendar, SPopBrowseContainer, SPopBrowseContent, SPopBrowseForm, SPopBrowseFormArea, SPopBrowseFormBlock, SPopBrowseFormCalendarttl, SPopBrowseFormSubttl, SPopBrowseStatus, SPopBrowseStatusTheme, SPopBrowseStatusThemes, SPopBrowseStatusTtl, SPopBrowseTopBlock, SPopBrowseTtl, SPopBrowseWrap } from "./PopBrowse.styled.js";
import { useTheme } from "styled-components";

const categories = [
  { name: 'Web Design', className: '_orange' },
  { name: 'Research', className: '_green' },
  { name: 'Copywriting', className: '_purple' },
];

const PopBrowse = ({ taskId, onClose, onTaskDeleted }) => {
  const { isDark } = useTheme();
  const { tasks, deleteTaskFromState, updateTaskInState } = useContext(TaskContext);
  const [task, setTask] = useState(null);
  const [originalTask, setOriginalTask] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(task ? task.date : null);
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const [isCancelButtonDisabled, setIsCancelButtonDisabled] = useState(false);

    const category = task ? categories.find(cat => cat.name === task.topic) : null;
    const categoryClass = category ? category.className : '_orange';

  useEffect(() => {
    document.body.style.overflow = 'hidden';  
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (taskId && tasks.length > 0) {
      const foundTask = tasks.find(t => t._id === taskId);
      if (foundTask) {
        setTask(foundTask);
        setOriginalTask(foundTask);
        setLoading(false);
      } else {
        setError('Задача не найдена');
        setLoading(false);
      }
    }
  }, [taskId, tasks]);

  const handleDelete = async () => {
    setIsDeleteButtonDisabled(true);
    if (!task || !task._id) {
      alert('Некорректный id задачи');
      return;
    }
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      try {
        await deleteTask(task._id);
        deleteTaskFromState(task._id);
        if (onTaskDeleted) onTaskDeleted();
        if (onClose) onClose();
      } catch (err) {
        alert('Ошибка при удалении задачи');
      }
    }
  };

    const handleClose = () => {
      navigate(-1);
    };

      const handleEdit = () => {
      setIsEditButtonDisabled(true);
      setIsEditing(true);
    };

      const handleCancel = () => {
      setTask(originalTask);
      setIsEditing(false);
      setIsEditButtonDisabled(false);
      setIsDeleteButtonDisabled(false);
      setIsSaveButtonDisabled(false);
      setIsCancelButtonDisabled(false);
    };

const handleSave = async () => {
    setIsSaveButtonDisabled(true);
    try {
      const updatedTaskData = { ...task, date: task.date };
      const response = await updateTask(task._id, updatedTaskData);
      if (response) {
        updateTaskInState(response);
      }
      if (onTaskDeleted) onTaskDeleted();
      if (onClose) onClose();
    } catch (err) {
      alert('Ошибка при сохранении изменений');
      setIsSaveButtonDisabled(false);
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
        <SPopBrowse id="popBrowse">
          <SPopBrowseContainer>
            <SPopBrowseBlock $isDark={isDark}>
              <SPopBrowseContent>
                <SPopBrowseTopBlock>
                  <SPopBrowseTtl $isDark={isDark}>{task.title}</SPopBrowseTtl>
                  <div className={`categories__theme theme-top ${categoryClass} _active-category`}>
                  <p className={categoryClass}>{task.topic || 'Без названия'}</p>
                  </div>
                  </SPopBrowseTopBlock>
                </SPopBrowseContent>
                <SPopBrowseStatus>
                  <SPopBrowseStatusTtl $isDark={isDark}>Статус</SPopBrowseStatusTtl>
                  <SPopBrowseStatusThemes $isDark={isDark}>
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
                    <SPopBrowseStatusTheme $isDark={isDark} className=" _gray">
                    <p className="_gray">{task.status}</p>
                  </SPopBrowseStatusTheme>
                  )}
                  </SPopBrowseStatusThemes>
                </SPopBrowseStatus>
                <SPopBrowseWrap>
                  <SPopBrowseForm id="formBrowseCard" action="#">
                    <SPopBrowseFormBlock>
                      <SPopBrowseFormSubttl $isDark={isDark} htmlFor="textArea01">Описание задачи</SPopBrowseFormSubttl>
                      {isEditing ? (
                      <SPopBrowseFormArea $isDark={isDark}
                        name="text"
                        id="textArea01"
                        value={task.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                      />
                    ) : (
                      <SPopBrowseFormArea $isDark={isDark}
                        name="text"
                        id="textArea01"
                        readOnly
                        value={task.description || ''}
                      />
                    )}
                    </SPopBrowseFormBlock>
                  </SPopBrowseForm>
                  <SPopBrowseCalendar className="pop-new-card__calendar calendar">
                  <SPopBrowseFormCalendarttl $isDark={isDark}>Даты</SPopBrowseFormCalendarttl>
                                    <Calendar
                    editable={isEditing}
                    date={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                  />
                </SPopBrowseCalendar>
                </SPopBrowseWrap>
                <PopBrowseContainer $isDark={isDark}>
                  <div className="btn-group" >
                    {isEditing ? (
                    <>
                      <button className="_btn-bor _hover03" onClick={handleSave} disabled={isSaveButtonDisabled}>Сохранить</button>
                      <button className="_btn-bor _hover03" onClick={handleCancel} disabled={isCancelButtonDisabled}>Отмена</button>
                    </>
                    ) : (
                      <button className="_btn-bor _hover03" onClick={handleEdit} disabled={isEditButtonDisabled}>Редактировать задачу</button>
                    )}
                      <button className="_btn-bor _hover03" onClick={handleDelete} disabled={isDeleteButtonDisabled}>Удалить задачу</button>
                  </div>
                  <button className="close-button" onClick={handleClose}>
                    <a>Закрыть</a>
                  </button>
                </PopBrowseContainer>
              </SPopBrowseBlock>
            </SPopBrowseContainer>
          </SPopBrowse>
      );
    };

export default PopBrowse;