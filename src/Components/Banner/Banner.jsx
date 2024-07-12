import React from 'react'
import styled from 'styled-components'
import videoDemoNarcotrfico from '/img/Narcotrafico-Tenoch-Huerta.png'

const BannerStyle = styled.div`
background-image: url("./img/BannerMain.png") ;
background-size: 100%;
background-repeat: no-repeat;
background-blend-mode: darken;
display: grid;
grid-template-columns: 45% 55%;
@media (max-width: 662px){
	grid-template-columns: 100%;
}
`
const OrgName = styled.h1 `
background-color: #ff0000d1;
color: white;
display: inline;
padding: 10px;
font-size: 40px;
font-weight: 400;
border-radius: 10px;
@media (max-width: 1024px){
	font-size: 20px;
}
`
const SectionDescription = styled.section `
display: flex;
justify-content: left;
align-items: center;
padding: 180px 20px 180px 80px;
flex-wrap: wrap;
@media (min-width: 662px) and (max-width: 1439px) {
padding: 10px;
}
@media (max-width: 661px){
	grid-template-columns: 100%;
	padding: 10px;
}
`
const BannerDescription= styled.p `
color: aliceblue;
text-align: justify;
font-size: 22px;
line-height: 30px;
background-color: #0000009b;
font-family: "Montserrat";
padding: 10px;
@media (min-width: 662px) and (max-width: 1439px) {
font-size: 15px;
}
`
const SectionVideo = styled.section `
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
img{
border-radius: 10px;
width: 100%;
}
` 


const Banner = () => {
  return (
		<>
			<BannerStyle>
				<SectionDescription>
					<OrgName>OBSERVATORIO CRIMINAL</OrgName>
					<BannerDescription>
						Nuestra misión es arrojar luz sobre la realidad de la delincuencia
						organizada en México. A través de nuestra plataforma, recopilamos y
						presentamos videos que documentan hechos relevantes, exponiendo el
						verdadero impacto de estas organizaciones en nuestra sociedad.
						Queremos romper con la romantización de los líderes criminales y
						fomentar una conciencia crítica. Únete a nosotros en la búsqueda de
						la verdad y contribuye a un futuro más informado y seguro para
						todos.
					</BannerDescription>
				</SectionDescription>
				<SectionVideo>
				<a href='https://www.youtube.com/watch?v=XOr80M5SYDs'  >
					<img src={videoDemoNarcotrfico} alt="Narcotrafico-Tenoch-Huerta" />
				</a>
				</SectionVideo>
			</BannerStyle>
		</>
	);
}

export default Banner