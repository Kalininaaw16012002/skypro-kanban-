import { useNavigate } from "react-router-dom";
import { SPopExit, SPopExitBlock, SPopExitContainer, SPopExitFormGroup, SPopExitNo, SPopExitNoA, SPopExitTtl, SPopExitYes, SPopExitYesA, SPopUserButton, SPopUserButtonDirect, SPopUserCheckbox, SPopUserSet, SPopUserSetMail, SPopUserSetName, SPopUserSetTheme, SPopUserSetThemeText } from "./PopUser.styled";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";


const PopUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate(); 
  const { user, logout} = useContext(AuthContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleLogout = () => {
    navigate('/sign-in'); 
  };

 const handleCheckboxChange = () => {
    toggleTheme(); 
  };

  return (
    <>
      <SPopUserSet $isDark={isDark} className="pop-user-set" id="user-set-target">
        <SPopUserSetName $isDark={isDark}>{user?.name || 'Имя'}</SPopUserSetName>
        <SPopUserSetMail >{user?.login || 'email@example.com'}</SPopUserSetMail>
        <SPopUserSetTheme>
          <SPopUserSetThemeText $isDark={isDark}>Темная тема</SPopUserSetThemeText>
          <SPopUserCheckbox $isDark={isDark}
            type="checkbox"
            name="checkbox"
            checked={isDark}
            onChange={handleCheckboxChange}
          />
        </SPopUserSetTheme>
        <SPopUserButton $isDark={isDark} type="button" className="_hover03">
          <SPopUserButtonDirect $isDark={isDark}
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
        <SPopExit  id="popExit">
          <SPopExitContainer>
            <SPopExitBlock $isDark={isDark}>
              <div>
                <SPopExitTtl $isDark={isDark}>Выйти из аккаунта?</SPopExitTtl>
              </div>
              <form id="formExit" action="#">
                <SPopExitFormGroup>
                  <SPopExitYes className="_hover01" id="exitYes">
                    <SPopExitYesA $isDark={isDark}
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                        handleLogout();
                      }}
                    >
                      Да, выйти
                    </SPopExitYesA>
                  </SPopExitYes>
                  <SPopExitNo $isDark={isDark} className="_hover03" id="exitNo">
                    <SPopExitNoA $isDark={isDark}
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