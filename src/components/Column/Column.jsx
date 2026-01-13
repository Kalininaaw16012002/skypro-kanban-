import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext.js";
import Card from "../Card/Card.jsx";
import {
  SMainCards,
  SMainColumn,
  SMainColumnTitle,
  SMainColumnTitleText,
  SMainContent,
} from "../Column/Column.styled.js";
import { CardSkeleton } from "../Card/CardSceleton.jsx";
import { useTheme } from "styled-components";

const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Column = ({ tasks, onTaskClick, onCardDragStart, loading }) => {
  const { updateTaskInState } = useContext(TaskContext);
    const { isDark, toggleTheme } = useTheme();

    const hasAnyTasks = tasks.length > 0;

  const getCardsByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    if (!taskId) {
      return;
    }
    const task = tasks.find((t) => t._id === taskId);
    if (task && task.status !== newStatus) {
      updateTaskInState({ ...task, status: newStatus });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const skeletonCountPerColumn = 1;

  if (!loading && !hasAnyTasks) {
    return (
      <SMainContent>
        <div style={{ padding: "20px", textAlign: "center", color: isDark ? "#fff" : "#000" }}>
          Новых задач нет
        </div>
      </SMainContent>
    );
  }

  return (
    <SMainContent>
      {STATUSES.map((status) => {
        const tasksInStatus = getCardsByStatus(status);
        const hasTasks = tasksInStatus.length > 0;

        return (
          <SMainColumn
            key={status}
            className="column"
            onDrop={(e) => handleDrop(e, status)}
            onDragOver={handleDragOver}
          >
            <SMainColumnTitle>
              <SMainColumnTitleText>{status}</SMainColumnTitleText>
            </SMainColumnTitle>
            <SMainCards>
              {loading ? (
                Array.from({ length: skeletonCountPerColumn }).map((_, index) => (
                  <CardSkeleton $isDark={isDark} key={index} />
                ))
              ) : hasTasks ? (
                tasksInStatus.map((task) => (
                  <Card
                    key={task._id}
                    id={task._id}
                    title={task.title}
                    date={task.date}
                    topic={task.topic}
                    onClick={onTaskClick}
                    onDragStart={onCardDragStart}
                  />
                ))
              ) : (
                null
              )}
            </SMainCards>
          </SMainColumn>
        );
      })}
    </SMainContent>
  );
};

export default Column;