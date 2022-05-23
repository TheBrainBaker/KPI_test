// ROUTER
import { Route, Routes } from "react-router-dom";

// CSS
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// PAGES
import Investment from "./pages/Investment";


import { useEffect } from "react";

// IMPORTING ANIMATIONS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<Routes>
			<Route exact path="/" element={<Investment />} />
		</Routes>
	);
}

export default App;
