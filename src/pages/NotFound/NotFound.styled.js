import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ $isDark }) => ($isDark ? "rgba(21, 20, 25, 1)" : "#D4DBE5")};
  color: #565EEF;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 72px;
  margin: 0;
`;

export const Message = styled.p`
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 20px;
  color: ${({ $isDark }) => ($isDark ? "#86aaff" : "#565EEF")};
  background-color: transparent;
  border: 2px solid ${({ $isDark }) => ($isDark ? "#86aaff" : "#565EEF")};
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ $isDark }) => ($isDark ? "rgba(86, 94, 239, 0.2)" : "rgba(86, 94, 239, 0.2)")};
    color: ${({ $isDark }) => ($isDark ? "#fff" : "#fff")};
  }
`;