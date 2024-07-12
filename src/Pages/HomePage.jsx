import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";
import { useEffect, useState } from "react";
import NuevoVideo from "../Components/NuevoVideo/NuevoVideo";
import BotonAdd from "../Components/BotonAdd/BotonAdd";

const AppContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
`;
const CardContainer = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 20px;
	padding-bottom: 20px;
`;

const HomePage = () => {
	const [videos, setVideos] = useState([]);
	const [mostrarFormulario, actualizarMostrar] = useState(false);
	

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/PerlaBMC/proyecto-crimeflix-api/videos"
		)
			.then((response) => response.json())
			.then((data) => {
				setVideos(data);
			});
	}, []);

	//Eliminar colaborador
	const eliminarVideo = (id) => {
		console.log("Eliminar video", id);
		const nuevosVideos = videos.filter((video) => video.id !== id);
		setVideos(nuevosVideos);
	};

	const actualizarVideo = (updatedVideo) => {
		const nuevosVideos = videos.map((video) =>
			video.id === updatedVideo.id ? updatedVideo : video
		);
		setVideos(nuevosVideos);
	};

	const agregarVideo = (newVideo) => {
		setVideos([...videos, newVideo]);
	};

	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	const closeModal = () => {
		actualizarMostrar(false);
	  };

	return (
		<>
			<AppContainer>
				<Banner />
				<BotonAdd cambiarMostrar={cambiarMostrar}/>
				{mostrarFormulario === true ?
				<NuevoVideo onSave={agregarVideo} onCancel={closeModal} />
				 : <div> </div> }
				<CardContainer>
					{videos.map((video) => {
						return (
							<Card
								{...video}
								key={video.id}
								eliminarVideo={eliminarVideo}
								datos={video}
								actualizarVideo={actualizarVideo}
							/>
						);
					})}
				</CardContainer>
			</AppContainer>
		</>
	);
};

export default HomePage;
