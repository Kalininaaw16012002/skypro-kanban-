import Card from "../Card/Card.jsx";
import { SMainCards, SMainColumn, SMainColumnTitle, SMainColumnTitleText, SMainContent } from "../Column/Column.styled.js";
import { CardList } from "../../data.js";

const Column = () => {
  // Функция для получения карточек по статусу
  const getCardsByStatus = (status) => {
    return CardList.filter(card => card.status === status);
  };

  return (
    <SMainContent>
      {/* Столбец "Без статуса" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Без статуса</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Без статуса").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Столбец "Нужно сделать" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>Нужно сделать</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Нужно сделать").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Столбец "В работе" */}
      <SMainColumn className="column">
        <SMainColumnTitle>
          <SMainColumnTitleText>В работе</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("В работе").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Столбец "Тестирование" */}
      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Тестирование</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Тестирование").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </SMainCards>
      </SMainColumn>

      {/* Столбец "Готово" */}
      <SMainColumn>
        <SMainColumnTitle>
          <SMainColumnTitleText>Готово</SMainColumnTitleText>
        </SMainColumnTitle>
        <SMainCards>
          {getCardsByStatus("Готово").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </SMainCards>
      </SMainColumn>
    </SMainContent>
  );
};

export default Column;

