import PopUser from "./PopUser.jsx";
import { useState } from "react";

const Header = () => {
  const [showPopUser, setShowPopUser] = useState(false);

   const handleUserClick = () => {
    setShowPopUser(prev => !prev); // переключает состояние
  };

  const handleClosePopUser = () => {
    setShowPopUser(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#user-set-target" 
              className="header__user _hover02"
              onClick={handleUserClick}
              style={{ cursor: "pointer" }}
            >
              Ivan Ivanov
            </a>
            {showPopUser && <PopUser onClose={handleClosePopUser} />}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
