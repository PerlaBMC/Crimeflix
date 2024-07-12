import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import FormularioDeEdicon from "../FormularioDeEdicion";

const Cards = styled.div `
    padding: 0 0 1em 0;
    margin-top: .5em;
    width: 282px;
    background-color: black;
    border-radius: 5px;
    &:hover{
        border: 1px solid yellow;
  box-shadow: 0 0 25px yellow;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
    }
	@media (max-width: 610px){
	width: 400px;
}
`
const TituloVideo = styled.h2`
text-align: center;
padding: 3px;
color: aliceblue;
text-decoration:none;
font-family: "Montserrat";
display: flex;
align-items: center;
`
const IconosContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
color: white;
padding: 10px;
`

const Card = (props) => {
	const { id, capa, titulo, link } = props.datos;
	const { eliminarVideo, actualizarVideo } = props;
	const [isEditing, setIsEditing] = useState(false);

	const handleSave = (updatedVideo) => {
		actualizarVideo(updatedVideo);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	return (
		<>
			<Cards>
				{isEditing ? (
					<FormularioDeEdicon
						video={{ id, capa, titulo, link }}
						onSave={handleSave}
						onCancel={handleCancel}
					/>
				) : (
					<>
						<Link to={`/${id}`} style={{ textDecorationLine: "none" }}>
							<img
								style={{ width: "100%", borderRadius: "5px" }}
								src={capa}
								alt={titulo}
							/>
							<TituloVideo>{titulo}</TituloVideo>
						</Link>
						<IconosContainer>
							<i
								style={{ display: "flex", gap: "10px" }}
								className="bi bi-trash3-fill"
								onClick={() => eliminarVideo(id)}
							>
								Borrar
							</i>
							<i
								style={{ display: "flex", gap: "10px" }}
								className="bi bi-pencil"
								onClick={() => setIsEditing(true)}
							>
								Editar
							</i>
						</IconosContainer>
					</>
				)}
			</Cards>
		</>
	);
};

export default Card