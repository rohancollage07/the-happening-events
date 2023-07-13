import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />

      </Routes>
    </>
  )
}

export default App
