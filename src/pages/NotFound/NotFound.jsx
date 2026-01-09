import { useTheme } from "styled-components";
import { Message, NotFoundContainer, StyledLink, Title } from "./NotFound.styled";

const NotFound = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <NotFoundContainer $isDark={isDark}>
      <Title $isDark={isDark}>404</Title>
      <Message $isDark={isDark}>Страница не найдена</Message>
      <StyledLink to="/">На главную</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;