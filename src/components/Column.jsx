import Card from "./Card.jsx";

const Column = () => {
  return (
    <div class="main__content">
      <div class="main__column column">
        <div class="column__title">
          <p>Без статуса</p>
        </div>
        <div class="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Нужно сделать</p>
        </div>
        <div class="cards">
          <Card />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>В работе</p>
        </div>
        <div class="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Тестирование</p>
        </div>
        <div class="cards">
          <Card />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Готово</p>
        </div>
        <div class="cards">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Column;
