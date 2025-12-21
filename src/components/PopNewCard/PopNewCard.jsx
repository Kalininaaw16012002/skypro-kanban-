import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { useState } from "react";
import { addTask } from "../../services/api.js";

const categories = [
  { name: 'Web Design', className: '_orange' },
  { name: 'Research', className: '_green' },
  { name: 'Copywriting', className: '_purple' },
];

const PopNewCard = ({ onClose, refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Research'); // по умолчанию
  const [date, setDate] = useState(new Date().toISOString());

const handleCreate = async () => {
  const taskData = {
    title: title.trim() || 'Новая задача',
    topic: category || 'Research',
    description: description && description.trim() !== '' ? description : '', // всегда передавайте строку
    date: date || new Date().toISOString(),
    status: 'Без статуса',
  };

  try {
    await addTask(taskData);
    if (refreshTasks) refreshTasks();
    onClose();
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link className="pop-new-card__close" onClick={onClose}>
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor ="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </div>
                <div className="form-new__block">
                  <label htmlFor ="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              {categories.map((cat) => (
          <div
            key={cat.name}
            className={`categories__theme ${cat.className} ${category === cat.name ? '_active-category' : ''}`}
            onClick={() => setCategory(cat.name)}
          >
            <p className={cat.className}>{cat.name}</p>
          </div>
        ))}
            </div>
            <button className="form-new__create _hover01" id="btnCreate" onClick={handleCreate}>
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
