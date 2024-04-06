import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './view/Home';
import Contact from './view/Contact';
import About from './view/About';
import { useState } from 'react';

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<BrowserRouter>
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<Routes>
				<Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
