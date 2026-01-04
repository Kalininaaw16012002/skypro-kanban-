import Card from "../Card/Card.jsx";
import { SMainCards, SMainColumn, SMainColumnTitle, SMainColumnTitleText, SMainContent } from "../Column/Column.styled.js";

const Column = ({ tasks, onTaskClick }) => {

  // Функция для фильтрации задач по статусу
  const getCardsByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <SMainContent>
      {/* Колонка "Без статуса" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Без статуса</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Без статуса").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Колонка "Нужно сделать" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Нужно сделать</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Нужно сделать").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Колонка "В работе" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>В работе</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("В работе").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Колонка "Тестирование" */}
      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Тестирование</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Тестирование").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Колонка "Готово" */}
      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Готово</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Готово").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} />
          ))}
        </SMainCards>
      </SMainColumn>
    </SMainContent>
  );
};

export default Column;