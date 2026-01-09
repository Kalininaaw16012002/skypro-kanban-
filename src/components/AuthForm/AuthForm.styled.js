import styled from "styled-components";

export const SBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:  ${({ $isDark }) => ($isDark ? "rgba(21, 20, 25, 1)": "rgba(234, 238, 246, 1)" )};
`;

export const SModal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SWrapper = styled.div`
display: block;
  margin: 0 auto;
  background-color: ${({ $isDark }) => ($isDark ? "rgba(32, 32, 44, 1)": "#fff" )};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border: 0.7px solid ${({ $isDark }) => ($isDark ? "rgba(78, 85, 102, 1)": "rgba(212, 219, 229, 1)" )};
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

      @media screen and (max-width: 495px) {
      border: none;
      background-color: ${({ $isDark }) => ($isDark ? "rgba(21, 20, 25, 1)": "#fff" )};
    }
`;

export const STitle = styled.h2`
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  color: ${({ $isDark }) => ($isDark ? "#fff": "#000" )};
`;

export const SInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 7px;
`;

export const SFormGroup = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const SFormGroupP = styled.p`
    text-align: center;
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;
`;
