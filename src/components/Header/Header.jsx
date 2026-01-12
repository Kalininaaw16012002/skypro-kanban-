import { SContainer, SHeader, SHeaderBlock, SHeaderNav, SHeaderLogo, SHeaderLogoDark, SHeaderButtonMainNew, SHeaderUser, StyledImage } from "./Header.styled.js";
import PopUser from "../PopUser/PopUser.jsx";
import { useContext, useState } from "react";
import PopNewCard from "../PopNewCard/PopNewCard.jsx";
import { AuthContext } from "../../context/AuthContext.js";
import { useTheme } from "../../context/ThemeContext.jsx";

const Header = () => {
  const { isDark } = useTheme();
  const [showPopUser, setShowPopUser] = useState(false);
  const [showPopNewCard, setShowPopNewCard] = useState(false);
  const { user } = useContext(AuthContext);

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
    <SHeader $isDark={isDark}>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo $isLight={!isDark}>
            <a href="" target="_self" style={{ display: 'block' }}>
              <StyledImage src="/images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogoDark $isDark={isDark}>
            <a href="" target="_self" style={{ display: 'block' }}>
              <StyledImage src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogoDark>
          <SHeaderNav>
            <SHeaderButtonMainNew className="_hover01" id="btnMainNew" onClick={handleOpenPopNewCard}>
              Создать новую задачу
            </SHeaderButtonMainNew>
            <SHeaderUser $isDark={isDark}
              className="_hover02"
              onClick={handleUserClick}
            >
              {user?.name || "Пользователь"}
            </SHeaderUser>
            {showPopUser && <PopUser onClose={handleClosePopUser} />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>

      {showPopNewCard && (
        <PopNewCard onClose={handleClosePopNewCard}/>
      )}
    </SHeader>
  );
};

export default Header;


