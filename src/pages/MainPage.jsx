import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import PopNewCard from '../components/PopNewCard/PopNewCard.jsx'
import PopBrowse from '../components/PopBrowse/PopBrowse.jsx'
import { SWrapper } from '../App.styled.js'

function MainPage({}) {
  return (
    <>
      <SWrapper>		
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