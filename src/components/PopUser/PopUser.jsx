import { SPopUserButton, SPopUserButtonDirect, SPopUserCheckbox, SPopUserSet, SPopUserSetMail, SPopUserSetName, SPopUserSetTheme, SPopUserSetThemeText } from "./PopUser.styled";

const PopUser = ({}) => {
  return (
    <SPopUserSet className="pop-user-set" id="user-set-target"> 
      <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
      <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
      <SPopUserSetTheme>
        <SPopUserSetThemeText>Темная тема</SPopUserSetThemeText>
        <SPopUserCheckbox type="checkbox" name="checkbox"></SPopUserCheckbox>
      </SPopUserSetTheme>
      <SPopUserButton type="button" className="_hover03">
        <SPopUserButtonDirect href="#popExit">Выйти</SPopUserButtonDirect>
      </SPopUserButton>
    </SPopUserSet>
  );
};

export default PopUser;
