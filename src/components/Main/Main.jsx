import { useContext, useState } from "react";
import Column from "../Column/Column.jsx";
import { SMain, SMainBlock, SMainLoading } from "../Main/Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";
import PopBrowse from "../PopBrowse/PopBrowse.jsx";
import { TaskContext } from "../../context/TaskContext.js";


export const Main = () => {
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const { tasks, loadTasks, isLoading } = useContext(TaskContext);

  const handleTaskClick = (taskId) => {
    console.log('Клик по задаче, ID:', taskId);
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
    <SMain>
      <SContainer>
        <SMainBlock>
          {isLoading ? (
            <SMainLoading>Данные загружаются</SMainLoading>
          ) : (
            <Column tasks={tasks} onClick={handleTaskClick}  />
          )}
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