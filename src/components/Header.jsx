import { SContainer, SHeader, SHeaderBlock, SHeaderNav, SHeaderLogo, SHeaderLogoDark, SHeaderButtonMainNew, SHeaderUser } from "./Header.styled.js";
import PopUser from "./PopUser.jsx";
import { useState } from "react";

const Header = () => {
  const [showPopUser, setShowPopUser] = useState(false);

   const handleUserClick = () => {
    setShowPopUser(prev => !prev);
  };

  const handleClosePopUser = () => {
    setShowPopUser(false);
  };

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
            <SHeaderButtonMainNew className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
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
    </SHeader>
  );
};

export default Header;
