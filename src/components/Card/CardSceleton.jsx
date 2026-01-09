import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const CardSkeletonWrapper = styled.div`
  width: 220px;   
  height: 130px;  
  padding: 15px 13px 19px; 
  background-color: ${({ $isDark }) => ($isDark ? "rgba(32, 32, 44, 1)":"#FFF")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
`;

const SkeletonLine = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "16px"};
  border-radius: 4px;
  margin: 4px 0;
  background: linear-gradient(
    90deg,
    rgba(193, 204, 220, 0.3),
    rgba(233, 237, 246, 0.3),
    rgba(193, 204, 220, 0.3)
  );
  background-size: 200% 100%;
  animation: ${gradientAnimation} 1.5s infinite ease-in-out;
`;

export const CardSkeleton = ({ $isDark }) => (
  <CardSkeletonWrapper $isDark={$isDark}>
    <SkeletonLine width="70%" height="20px" /> 
    <SkeletonLine width="50%"/> 
    <SkeletonLine width="30%"/> 
  </CardSkeletonWrapper>
);