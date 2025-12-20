import { useEffect, useState } from "react";
import Column from "../Column/Column.jsx";
import { SMain, SMainBlock, SMainLoading } from "../Main/Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);


  // Имитируем загрузку данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Обработчик клика по задаче
  const handleTaskClick = (taskId) => {
    setSelectedTaskId(taskId);
    setPopBrowseOpen(true);
  };

  // Закрытие попапа
  const handleClosePopBrowse = () => {
    setPopBrowseOpen(false);
  };

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          {isLoading ? (
            <SMainLoading>Данные загружаются</SMainLoading>
          ) : (
            <Column onTaskClick={handleTaskClick} /> // передаем обработчик в Column
          )}
        </SMainBlock>
      </SContainer>

      {/* Показываем PopBrowse, если открыт */}
      {isPopBrowseOpen && (
        <PopBrowse taskId={selectedTaskId} onClose={handleClosePopBrowse} />
      )}
    </SMain>
  );
};

export default Main;
