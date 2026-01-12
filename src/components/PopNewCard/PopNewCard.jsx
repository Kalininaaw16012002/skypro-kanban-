import Calendar from "../Calendar/Calendar.jsx";
import { useEffect, useState } from "react";
import { addTask } from "../../services/api.js";
import { SPopNewCard, SPopNewCardBlock, SPopNewCardCalendar, SPopNewCardCategories, SPopNewCardClose, SPopNewCardContainer, SPopNewCardContent, SPopNewCardForm, SPopNewCardFormArea, SPopNewCardFormBlock, SPopNewCardFormCalendarttl, SPopNewCardFormCategoriesttl, SPopNewCardFormCreate, SPopNewCardFormInput, SPopNewCardFormSubttl, SPopNewCardTtl, SPopNewCardWrap } from "./PopNewCard.styled.js";
import { useTheme } from "styled-components";

const categories = [
  { name: 'Web Design', className: '_orange' },
  { name: 'Research', className: '_green' },
  { name: 'Copywriting', className: '_purple' },
];


const PopNewCard = ({ onClose, onRefreshTasks}) => {
  const { isDark } = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Research'); 
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

const handleCreate = async () => {
  setIsButtonDisabled(true);
  const taskData = {
    title: title.trim() || 'Новая задача',
    topic: category || 'Research',
    description: description && description.trim() !== '' ? description : '', 
    date: selectedDate || new Date().toISOString(),
    status: 'Без статуса',
  };

  try {
    await addTask(taskData);
     if (onRefreshTasks) onRefreshTasks();
    onClose();
  } catch (err) {
    alert(err.message);
    setIsButtonDisabled(false);
  }
};

  return (
    <SPopNewCard id="popNewCard">
      <SPopNewCardContainer>
        <SPopNewCardBlock $isDark={isDark} >
          <SPopNewCardContent>
            <SPopNewCardTtl $isDark={isDark}>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose onClick={onClose}>
              &#10006;
            </SPopNewCardClose>
            <SPopNewCardWrap>
              <SPopNewCardForm
                id="formNewCard"
                action="#"
              >
                <SPopNewCardFormBlock>
                  <SPopNewCardFormSubttl $isDark={isDark} htmlFor ="formTitle">
                    Название задачи
                  </SPopNewCardFormSubttl>
                  <SPopNewCardFormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></SPopNewCardFormInput>
                </SPopNewCardFormBlock>
                <SPopNewCardFormBlock>
                  <SPopNewCardFormSubttl $isDark={isDark} htmlFor ="textArea">
                    Описание задачи
                  </SPopNewCardFormSubttl>
                  <SPopNewCardFormArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></SPopNewCardFormArea>
                </SPopNewCardFormBlock>
              </SPopNewCardForm>
              <SPopNewCardCalendar className="pop-new-card__calendar calendar">
                <SPopNewCardFormCalendarttl $isDark={isDark}>Даты</SPopNewCardFormCalendarttl>
                <Calendar
                  editable={true}
                  date={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                />
              </SPopNewCardCalendar>
            </SPopNewCardWrap>
            <SPopNewCardCategories>
              <SPopNewCardFormCategoriesttl $isDark={isDark}>Категория</SPopNewCardFormCategoriesttl>
              {categories.map((cat) => (
          <div
            key={cat.name}
            className={`categories__theme ${cat.className} ${category === cat.name ? '_active-category' : ''}`}
            onClick={() => setCategory(cat.name)}
          >
            <p className={cat.className}>{cat.name}</p>
          </div>
        ))}
            </SPopNewCardCategories>
            <SPopNewCardFormCreate className=" _hover01" id="btnCreate" onClick={handleCreate} disabled={isButtonDisabled}>
              Создать задачу
            </SPopNewCardFormCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;


