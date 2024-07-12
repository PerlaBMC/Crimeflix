import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./Components/Header/Index";
import HomePage from "./Pages/HomePage";
import Player from "./Pages/Player";
import Footer from "./Components/Footer/Footer";



function AppRoutes(){
    return (
	<BrowserRouter>
    <Header/>
		<Routes>
			<Route path="/" element={<HomePage/>}></Route>
            <Route path=":id" element={<Player/>}/>
		</Routes>
	<Footer/>
	</BrowserRouter>
		);
}

export default AppRoutes;