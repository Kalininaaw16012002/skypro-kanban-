import { useEffect, useState } from "react";
import Column from "./Column.jsx";
import { SMain, SMainBlock, SMainLoading } from "./Main.styled.js";
import { SContainer } from "./Header.styled.js";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          {isLoading ? (
            <SMainLoading>Данные загружаются</SMainLoading>
          ) : (
            <Column />
          )}
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
