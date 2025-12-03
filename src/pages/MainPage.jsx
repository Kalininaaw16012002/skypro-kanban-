import { useState } from 'react'
import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import PopNewCard from '../components/PopNewCard/PopNewCard.jsx'
import PopBrowse from '../components/PopBrowse/PopBrowse.jsx'
import { SPopExit, SPopExitBlock, SPopExitContainer, SPopExitFormGroup, SPopExitNo, SPopExitNoA, SPopExitTtl, SPopExitYes, SPopExitYesA, SWrapper } from '../App.styled.js'
import { useNavigate } from 'react-router-dom';

function MainPage({ setIsAuth, loading }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate('/sign-in');
  };

  return (
    <>
      <SWrapper>		
			<SPopExit id="popExit">
				<SPopExitContainer>
					<SPopExitBlock>
						<div>
							<SPopExitTtl>Выйти из аккаунта?</SPopExitTtl>
						</div>
						<form  id="formExit" action="#">
							<SPopExitFormGroup>
								<SPopExitYes className="_hover01" id="exitYes"><SPopExitYesA onClick={handleLogout}>Да, выйти</SPopExitYesA></SPopExitYes>
								<SPopExitNo className="_hover03" id="exitNo"><SPopExitNoA href="main.html">Нет, остаться</SPopExitNoA> </SPopExitNo>
							</SPopExitFormGroup>
						</form>
					</SPopExitBlock>
				</SPopExitContainer>
			</SPopExit>

			<PopNewCard />
			<PopBrowse />
			<Header />
			<Main />
		
    	</SWrapper>

    <script src="js/script.js"></script>
    </>
  )
}

export default MainPage;