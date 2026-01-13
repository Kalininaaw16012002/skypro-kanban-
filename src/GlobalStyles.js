import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme.isDark ? '#202229' : '#FFF')};
    color: ${({ theme }) => (theme.isDark ? '#000' :'#FFF' )};
  }
`;
