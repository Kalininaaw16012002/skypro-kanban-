import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext.js";
import Card from "../Card/Card.jsx";
import { SMainCards, SMainColumn, SMainColumnTitle, SMainColumnTitleText, SMainContent } from "../Column/Column.styled.js";

const Column = ({ tasks, onTaskClick, onCardDragStart }) => {
  const { updateTaskInState } = useContext(TaskContext);

  const getCardsByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

const handleDrop = (e, newStatus) => {
  const taskId = e.dataTransfer.getData('text/plain');
  console.log('Dropped task ID:', taskId);
  console.log('to', newStatus);
  const task = tasks.find(t => t._id === taskId);
  if (task && task.status !== newStatus) {
    updateTask(task._id, { ...task, status: newStatus });
  }
};

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };


  return (
    <SMainContent>
      <SMainColumn className="column" onDrop={(e) => handleDrop(e, "Без статуса")}
        onDragOver={handleDragOver}>
        <SMainColumnTitle>
          <SMainColumnTitleText>Без статуса</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Без статуса").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} onDragStart={(e, id) => onCardDragStart(e, id)}/>
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn className="column" onDrop={(e) => handleDrop(e, "Нужно сделать")}
        onDragOver={handleDragOver}>
        <SMainColumnTitle>
          <SMainColumnTitleText>Нужно сделать</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Нужно сделать").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} onDragStart={(e, id) => onCardDragStart(e, id)}/>
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn className="column" onDrop={(e) => handleDrop(e, "В работе")}
        onDragOver={handleDragOver}>
        <SMainColumnTitle>
          <SMainColumnTitleText>В работе</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("В работе").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} onDragStart={(e, id) => onCardDragStart(e, id)}/>
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn onDrop={(e) => handleDrop(e, "Тестирование")}
        onDragOver={handleDragOver}>
        <SMainColumnTitle>
          <SMainColumnTitleText>Тестирование</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Тестирование").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} onDragStart={(e, id) => onCardDragStart(e, id)}/>
          ))}
        </SMainCards>
      </SMainColumn>

      <SMainColumn onDrop={(e) => handleDrop(e, "Готово")}
        onDragOver={handleDragOver}>
        <SMainColumnTitle>
          <SMainColumnTitleText>Готово</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Готово").map(task => (
            <Card key={task._id} id={task._id} {...task} onClick={onTaskClick} onDragStart={(e, id) => onCardDragStart(e, id)}/>
          ))}
        </SMainCards>
      </SMainColumn>
    </SMainContent>
  );
};

export default Column;