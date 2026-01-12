import styled from "styled-components";

export const SPopBrowse = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute; 
    top: 0;
    left: 0;
    z-index: 6; 
    background: rgba(0, 0, 0, 0.4); 
    display: flex; 
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 660px) {
      top: 70px;
    }
`;

export const SPopBrowseContainer = styled.div`
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
`;

export const SPopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ $isDark }) => ($isDark ? "#202229" : "#FFF")};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
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

export const SPopBrowseContent = styled.div`
    display: block;
    text-align: left;

    .categories__theme {
    opacity: 1;
   }
   .theme-down {
    display: none;
    margin-bottom: 20px;
   }
   .theme-top {
    display: block;
   }

   @media screen and (max-width: 495px) {
    .theme-down {
      display: block;
      margin-bottom: 20px;
    }
    .theme-top {
      display: none;
    }

  }
`;

export const SPopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;

    .categories {
    margin-bottom: 20px;
  }
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
`;

export const SPopBrowseTtl = styled.h3`
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const SPopBrowseStatus = styled.div`
    margin-bottom: 11px;
`;

export const SPopBrowseStatusTtl = styled.p`
    margin-bottom: 14px;
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SPopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  .status__theme {
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  background-color:  ${({ $isDark }) => ($isDark ? "#202229" : "#FFF")};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
}
  .status__theme p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}

  .status__theme._active {
  background-color: #94A6BE; 
  color: ${({ $isDark }) => ($isDark ? "#202229" : "#FFF")};
  border-color: #94A6BE;
}
`;

export const SPopBrowseStatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: "#94A6BE";
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;

    ._gray{
      color: ${({ $isDark }) => ($isDark ? "#000": "#fff")};
    }
`;

export const SPopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
      display: block;
    }
`;

export const SPopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
      max-width: 100%;
    }
`;

export const SPopBrowseFormBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SPopBrowseFormSubttl = styled.label`
    color: ${({ $isDark }) => ($isDark ? "#FFF": "#000" )};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SPopBrowseFormArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: ${({ $isDark }) => ($isDark ? "#202229" : "#FFF")};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    color: rgba(148, 166, 190, 1);

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
      height: 37px;
    }
`;

export const SPopBrowseCalendar = styled.div`
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

export const SPopBrowseFormCalendar = styled.div`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SPopBrowseFormCalendarttl = styled.p`
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

export const PopBrowseContainer = styled.div`
  margin-bottom: 10px;
  padding: 0 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .btn-group button {
    height: 30px;
    margin-right: 8px;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${({ $isDark }) => ($isDark ? "#FFF" : "#565EEF")});
    outline: none;
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &._btn-bor {
      background: transparent;
      color: ${({ $isDark }) => ($isDark ? "#FFF" : "#565EEF")};

      &:hover {
        background-color: rgba(86, 94, 239, 0.1);
      }
    }

    &._hover03:hover {
      background-color: rgba(86, 94, 239, 1);
      color: ${({ $isDark }) => ($isDark ?"#FFF":  "#FFF" )};
      border: 0.7px solid var(--palette-navy-60, "#565EEF");
    }
  }
  .close-button {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 14px;
    background-color: #565EEF;
    color: #FFFFFF;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
    text-align: center;
    justify-content: center;

    &:hover {
      background-color: #3b4cc0;
    }

    a {
      color: #FFFFFF;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 495px) {

    button {
      width: 100%;
      height: 40px;
      margin-bottom: 5px;
    }
     .btn-group {
      width: 100%;
      
    }
    .btn-group button {
      margin-right: 0px;
    }
  }
`;
