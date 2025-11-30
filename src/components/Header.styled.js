import styled from "styled-components";

export const SHeader = styled.header `
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const SContainer = styled.div `
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const SHeaderBlock = styled.div `
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const SHeaderLogo = styled.div`
  &._show._light img {
    width: 85px;
  }
`;

export const SHeaderLogoDark = styled.div`
  &._dark img {
    width: 85px;
  }
`;

export const SHeaderNav = styled.nav `
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SHeaderButtonMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  
  & a {
    color: #FFFFFF;
  }
`;

export const SHeaderUser = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
  }
`;