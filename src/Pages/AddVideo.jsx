import NuevoVideo from "../Components/NuevoVideo/NuevoVideo"

const AddVideo = () => {


	const agregarVideo = (newVideo) => {
		setVideos([...videos, newVideo]);
	};

  return (
    <>
    <NuevoVideo onSave={agregarVideo}></NuevoVideo>
    </>
  )
}

export default AddVideo