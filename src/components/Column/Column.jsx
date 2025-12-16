import Card from "../Card/Card.jsx";
import { SMainCards, SMainColumn, SMainColumnTitle, SMainColumnTitleText, SMainContent } from "../Column/Column.styled.js";
import { CardList } from "../../data.js";
import { fetchTasks } from "../../services/api.js";
import { useEffect, useState } from "react";

const Column = () => {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  const token = localStorage.getItem('authToken');
  if (token) {
    fetchTasks(token)
      .then((data) => setTasks(data))
      .catch((err) => console.error("Ошибка загрузки задач:", err));
  } else {
    console.warn('Токен не найден');
  }
}, []);

  // Функция для получения карточек по статусу из задач
  const getCardsByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <SMainContent>
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Без статуса</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Без статуса").map(task => (
            <Card key={task._id} {...task} />
          ))}
        </SMainCards>
      </SMainColumn>
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Нужно сделать</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Нужно сделать").map(task => (
            <Card key={task._id} {...task} />
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>В работе</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("В работе").map(task => (
            <Card key={task._id} {...task} />
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Тестирование</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Тестирование").map(task => (
            <Card key={task._id} {...task} />
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Готово</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Готово").map(task => (
            <Card key={task._id} {...task} />
          ))}
        </SMainCards>
      </SMainColumn>
    </SMainContent>
  );
};

export default Column;
