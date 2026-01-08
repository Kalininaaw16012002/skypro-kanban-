import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const SCardsItem = styled.div`
  position: relative;
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;

  @keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
`;

export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  background: ${({ $isDark }) => ($isDark ? "rgba(32, 32, 44, 1)":"#FFF")};

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background: ${({ $isDark }) => ($isDark ? "rgba(32, 32, 44, 1)":"#FFF")};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const SCardsGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardsTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

`;

export const SCardsText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const SCardsBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const SCardsPoint = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`;

export const SCardsContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SCardsTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
`;

export const SCardsDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SCardsDateSvg = styled.svg`
  width: 13px;
`;

export const SCardsDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`;

export const GradientDiv = styled.div`
  width: 100%;
  height: 64px; 
  border-radius: 18px; /* закругление углов */
  background: linear-gradient(90deg, rgba(193.26, 204.72, 220, 1), rgba(233.02, 237.53, 246.56, 1) 46%, rgba(193, 205, 220, 1));
  background-size: 200% 100%;
  animation: ${gradientAnimation} 1.5s infinite ease-in-out;
`;