import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ExitPage({ setIsAuth }) {
  const { action } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (action === 'logout') {
      setIsAuth(false);
      navigate('/sign-in');
    }
  }, [action, setIsAuth, navigate]);

  return (
    <div>
      {action === 'logout' ? 'Вы вышли из аккаунта...' : 'Обработка...'}
    </div>
  );
}

export default ExitPage;