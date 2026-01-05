import styled from "styled-components";

export const SPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  &:target{
    display: block;
  }
`;

export const SPopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const SPopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const SPopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SPopUserSetThemeText = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const SPopUserCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const SPopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;

  &._hover03:hover {
  color: #FFFFFF;
  background-color: #33399b;
}
`;

export const SPopUserButtonDirect = styled.a`
  color: #565EEF; 

  &:hover {
    color: #FFFFFF;
  }
`;

export const SPopExit = styled.div`
  display: block; 
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const SPopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SPopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const SPopExitTtl = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const SPopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const SPopExitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  margin-right: 10px;

  &._hover01:hover {
  background-color: #33399b;
}

@media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SPopExitYesA = styled.a`
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SPopExitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;

  &._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}

@media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SPopExitNoA = styled.a`
  width: 100%;
  height: 100%;
  color: #565EEF;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #FFFFFF;
  }
`;
