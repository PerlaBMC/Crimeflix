import styled from "styled-components"
import CRIMEFLIX from "/img/CRIMEFLIX.png"
import { NavLink } from "react-router-dom"

const HeaderStyle= styled.div`
height: 100px;
background-color: #302f2f;
border-bottom: 3px solid yellow;
display: flex;
justify-content: end;
align-items: center;
padding: 0 30px;
@media (max-width: 610px){
	justify-content: center;
}
`
const ImgLogo = styled.img`
width: 250px;
`


const Header = () => {
  return (
<>
<HeaderStyle>
<NavLink to={"/"}>
<ImgLogo src={CRIMEFLIX} alt="logo CRIMEFLIX" />
</NavLink>
</HeaderStyle>
</>
  )
}

export default Header