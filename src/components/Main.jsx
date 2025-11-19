import { useEffect, useState } from "react";
import Column from "./Column.jsx";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading-text">Данные загружаются</div>
          ) : (
            <Column />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
