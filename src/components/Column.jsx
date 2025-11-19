import Card from "./Card.jsx";
import { CardList } from "./data.js";

const Column = () => {
  // Функция для получения карточек по статусу
  const getCardsByStatus = (status) => {
    return CardList.filter(card => card.status === status);
  };

  return (
    <div className="main__content">
      {/* Столбец "Без статуса" */}
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
          {getCardsByStatus("Без статуса").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Столбец "Нужно сделать" */}
      <div className="main__column">
        <div className="column__title">
          <p>Нужно сделать</p>
        </div>
        <div className="cards">
          {getCardsByStatus("Нужно сделать").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Столбец "В работе" */}
      <div className="main__column">
        <div className="column__title">
          <p>В работе</p>
        </div>
        <div className="cards">
          {getCardsByStatus("В работе").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Столбец "Тестирование" */}
      <div className="main__column">
        <div className="column__title">
          <p>Тестирование</p>
        </div>
        <div className="cards">
          {getCardsByStatus("Тестирование").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Столбец "Готово" */}
      <div className="main__column">
        <div className="column__title">
          <p>Готово</p>
        </div>
        <div className="cards">
          {getCardsByStatus("Готово").map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;

