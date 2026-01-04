import { useNavigate } from "react-router-dom";
import { SPopExit, SPopExitBlock, SPopExitContainer, SPopExitFormGroup, SPopExitNo, SPopExitNoA, SPopExitTtl, SPopExitYes, SPopExitYesA, SPopUserButton, SPopUserButtonDirect, SPopUserCheckbox, SPopUserSet, SPopUserSetMail, SPopUserSetName, SPopUserSetTheme, SPopUserSetThemeText } from "./PopUser.styled";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const PopUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); 
  const { user, logout, isAuth } = useContext(AuthContext);

  const handleLogout = () => {
    navigate('/sign-in'); 
  };

  return (
    <>
      <SPopUserSet className="pop-user-set" id="user-set-target">
        <SPopUserSetName>{user?.name || 'Имя'}</SPopUserSetName>
        <SPopUserSetMail>{user?.login || 'email@example.com'}</SPopUserSetMail>
        <SPopUserSetTheme>
          <SPopUserSetThemeText>Темная тема</SPopUserSetThemeText>
          <SPopUserCheckbox type="checkbox" name="checkbox" />
        </SPopUserSetTheme>
        <SPopUserButton type="button" className="_hover03">
          <SPopUserButtonDirect
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            Выйти
          </SPopUserButtonDirect>
        </SPopUserButton>
      </SPopUserSet>

      {isModalOpen && (
        <SPopExit id="popExit">
          <SPopExitContainer>
            <SPopExitBlock>
              <div>
                <SPopExitTtl>Выйти из аккаунта?</SPopExitTtl>
              </div>
              <form id="formExit" action="#">
                <SPopExitFormGroup>
                  <SPopExitYes className="_hover01" id="exitYes">
                    <SPopExitYesA
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                        handleLogout();
                      }}
                    >
                      Да, выйти
                    </SPopExitYesA>
                  </SPopExitYes>
                  <SPopExitNo className="_hover03" id="exitNo">
                    <SPopExitNoA
                      onClick={(e) => {
                        e.preventDefault();
                        setModalOpen(false);
                      }}
                    >
                      Нет, остаться
                    </SPopExitNoA>
                  </SPopExitNo>
                </SPopExitFormGroup>
              </form>
            </SPopExitBlock>
          </SPopExitContainer>
        </SPopExit>
      )}
    </>
  );
};

export default PopUser;