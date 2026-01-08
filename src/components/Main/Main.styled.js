import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ $isDark }) => ($isDark ? "rgba(21, 20, 25, 1)": "#EAEEF6" )};`;

export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const SMainLoading = styled.div`
  text-align: center; 
  color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )}
`;