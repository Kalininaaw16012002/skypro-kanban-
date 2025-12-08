import { SContainer, SHeader, SHeaderBlock, SHeaderNav, SHeaderLogo, SHeaderLogoDark, SHeaderButtonMainNew, SHeaderUser } from "./Header.styled.js";
import PopUser from "../PopUser/PopUser.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopNewCard from "../PopNewCard/PopNewCard.jsx";

const Header = () => {
  const [showPopUser, setShowPopUser] = useState(false);
  const [showPopNewCard, setShowPopNewCard] = useState(false);

  const handleUserClick = () => {
    setShowPopUser(prev => !prev);
  };

  const handleClosePopUser = () => {
    setShowPopUser(false);
  };

  const handleOpenPopNewCard = () => {
    setShowPopNewCard(true);
  };

  const handleClosePopNewCard = () => {
    setShowPopNewCard(false);
  }

  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogoDark className=" _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogoDark>
          <SHeaderNav>
            <SHeaderButtonMainNew className="_hover01" id="btnMainNew" onClick={handleOpenPopNewCard}>
              Создать новую задачу
            </SHeaderButtonMainNew>
            <SHeaderUser 
              className="_hover02"
              onClick={handleUserClick}
            >
              Ivan Ivanov
            </SHeaderUser>
            {showPopUser && <PopUser onClose={handleClosePopUser} />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>

      {showPopNewCard && (
        <PopNewCard onClose={handleClosePopNewCard} />
      )}
    </SHeader>
  );
};

export default Header;
