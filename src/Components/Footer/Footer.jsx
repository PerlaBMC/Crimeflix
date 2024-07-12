import styled from "styled-components";

const FooterContainer = styled.footer`
 background-color: rgba(0, 0, 0, 0.749);
 p{
    color: white;
    padding: 50px 100px;
    font-family: "Stick No Bills", sans-serif;
    font-size: 20px;
    text-align: center;
    font-family: "Montserrat";
    @media (max-width: 425px) {
   .footer p {
    padding: 50px;
   }
}
 }
`

const Footer  = () => {
    return (
			<FooterContainer className="footer">
				<p>
					Aviso Legal: La información presentada se obtuvo a través de consultas
					periodísticas y diversas fuentes web. Se recomienda manejarla con
					discreción y criterio. Esta información no constituye asesoramiento
					legal ni garantiza exactitud absoluta.
				</p>
			</FooterContainer>
		);
}

export default Footer