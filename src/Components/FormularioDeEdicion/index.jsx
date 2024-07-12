import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 200px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    form {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        color: whitesmoke;
        font-size: 25px;
        gap: 20px;
        background-color: black;
        padding: 10%;
        border-radius: 20px;
        @media (max-width: 610px){
	      width: 100%;
        }
        div{
            display: grid;
            width: 100%;
            gap: 10px;
        }
        input{
            width: 100%;
            height: 30px;
        }
        button {
            border-radius: 5px;
            width: 100px;
            height: 30px;
            pointer-events: stroke;
            background-color: transparent;
            color: whitesmoke;
            &:hover{
            border: 1px solid yellow;
            box-shadow: 0 0 25px yellow;
            transition: all 0.3s ease-in-out;
            cursor: pointer;}
        }
    }
`

const FormularioDeEdicon = ({ video, onSave, onCancel }) => {
  const [titulo, setTitulo] = useState(video.titulo);
  const [capa, setCapa] = useState(video.capa);
  const [link, setLink] = useState(video.link);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...video, titulo, capa, link });
  };

  return (
 <Overlay>
<DialogEstilizado>
<form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)} 
        />
      </div>
      <div>
        <label>Imagen (URL)</label>
        <input 
          type="text" 
          value={capa} 
          onChange={(e) => setCapa(e.target.value)} 
        />
      </div>
      <div>
        <label>URL del Video</label>
        <input 
          type="text" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
        />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
</DialogEstilizado>
 </Overlay>
  );
};

export default FormularioDeEdicon;
