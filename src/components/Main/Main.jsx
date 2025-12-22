import { useEffect, useState } from "react";
import Column from "../Column/Column.jsx";
import { SMain, SMainBlock, SMainLoading } from "../Main/Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";
import PopBrowse from "../PopBrowse/PopBrowse.jsx";
import { fetchTasks } from "../../services/api.js";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchTasks(token)
        .then((data) => {
          setTasks(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Ошибка при загрузке задач:", err);
          setIsLoading(false);
        });
    } else {
      console.warn('Токен не найден');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    console.log('Клик по задаче, ID:', taskId);
    setSelectedTaskId(taskId);
    setPopBrowseOpen(true);
  };

  const handleClosePopBrowse = () => {
    setPopBrowseOpen(false);
  };

  const handleTaskDeleted = () => {
    loadTasks();
  };

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          {isLoading ? (
            <SMainLoading>Данные загружаются</SMainLoading>
          ) : (
            <Column tasks={tasks} onClick={() => handleTaskClick(tasks._id)} />
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