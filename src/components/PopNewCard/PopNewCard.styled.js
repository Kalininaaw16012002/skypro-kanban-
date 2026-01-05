import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPopNewCard = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    @media screen and (max-width: 660px) {
      top: 70px;
    }
`;

export const SPopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
      padding: 0;
      justify-content: flex-start;
    }

    @media screen and (max-width: 495px) {
      padding: 0;
      justify-content: flex-start;
    }
`;

export const SPopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ $isDark }) => ($isDark ? "#202229" : "#FFF")};;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid ${({ $isDark }) => ($isDark ? "rgba(78, 85, 102, 1)" : "#D4DBE5")};
    position: relative;

    @media screen and (max-width: 660px) {
      border-radius: 0;
    }

    @media screen and (max-width: 495px) {
      padding: 20px 16px 32px;
    }
`;

export const SPopNewCardContent = styled.div`
    display: block;
    text-align: left;
`;

export const SPopNewCardTtl = styled.h3`
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const SPopNewCardClose = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
    color: #000000;
  }
`;

export const SPopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
      display: block;
    }
`;

export const SPopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
      max-width: 100%;
      width: 100%;
      display: block;
    }
`;

export const SPopNewCardFormBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SPopNewCardFormInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    font-family: "Roboto";
    margin: 20px 0;

    &::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
    }

    &::-moz-placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
    }
`;

export const SPopNewCardFormArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    font-family: "Roboto";

    &::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
    }

    &::-moz-placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
    }

     @media screen and (max-width: 495px) {
      max-width: 100%;
      height: 34px;
    }
`;

export const SPopNewCardFormCreate = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;

    &._hover01:hover {
    background-color: #33399b;
}

    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
`;

export const SPopNewCardFormSubttl = styled.label`
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SPopNewCardFormCalendarttl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media screen and (max-width: 660px) {
      padding: 0;
     }
`;

export const SPopNewCardFormCategoriesttl = styled.p`
    margin-bottom: 14px;
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SPopNewCardCalendar = styled.div`
    width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
    .calendar {
      max-width: 340px;
      width: 100%;
    }
  }

  @media screen and (max-width: 495px) {
    .pop-new-card__calendar {
      width: 100%;
    }
  }
`;

export const SPopNewCardCategories = styled.div`
    margin-bottom: 20px;

  .categories__themes {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .categories__p {
    margin-bottom: 14px;
  }
  .categories__theme {
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
  }
  .categories__theme p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

   ._active-category {
    opacity: 1 !important;
  }
`;
