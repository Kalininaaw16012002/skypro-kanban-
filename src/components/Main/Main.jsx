import { useCallback, useContext, useState } from "react";
import Column from "../Column/Column.jsx";
import { SMain, SMainBlock, SMainLoading } from "../Main/Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";
import PopBrowse from "../PopBrowse/PopBrowse.jsx";
import { TaskContext } from "../../context/TaskContext.js";
import { useTheme } from "styled-components";



export const Main = () => {
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const { tasks, loadTasks, isLoading } = useContext(TaskContext);
  const { isDark, toggleTheme } = useTheme();

const handleCardDragStart = (e, id) => {
  e.dataTransfer.setData('text/plain', id);
};

  const handleTaskClick = (taskId) => {
    setSelectedTaskId(taskId);
    setPopBrowseOpen(true);
  };

  const handleClosePopBrowse = () => {
    setPopBrowseOpen(false);
  };


const handleTaskDeleted = async () => {
  await loadTasks();
};

  return (
    <SMain $isDark={isDark}>
      <SContainer>
        <SMainBlock>
          {/* {isLoading ? (
            <SMainLoading $isDark={isDark}>Данные загружаются</SMainLoading>
          ) : ( */}
            <Column tasks={tasks} onClick={handleTaskClick} onCardDragStart={handleCardDragStart} loading={isLoading}/>
          {/* )} */}
        </SMainBlock>
      </SContainer>

      {isPopBrowseOpen && (
        <PopBrowse
          taskId={selectedTaskId}
          onClose={handleClosePopBrowse}
          onTaskDeleted={handleTaskDeleted}
        />
      )}
    </SMain>
  );
};

export default Main;