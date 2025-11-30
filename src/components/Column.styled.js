import styled from "styled-components";

export const SMainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const SMainColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const SMainColumnTitleText = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const SMainCards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;