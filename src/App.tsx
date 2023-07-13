import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<AboutUs />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
