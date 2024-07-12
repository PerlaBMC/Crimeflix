import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ContainerPlayer = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`

const Player = () => {
    const [video, setVideo] = useState([]);

    const parametro = useParams();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/PerlaBMC/proyecto-crimeflix-api/videos?id=${parametro.id}`)
        .then( response => response.json())
        .then(data => {
            setVideo(...data)
        })
    }, [])


  return (
    <>
    <ContainerPlayer>
       <iframe
        width="100%" height="600px"
        src={video.link} 
        title={video.titulo}
        allowFullScreen></iframe>
    </ContainerPlayer>
    </>
  )
}

export default Player