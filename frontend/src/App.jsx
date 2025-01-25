import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import National from './pages/National'
import International from './pages/International'
import Science from './pages/Science'
import Business from './pages/Business'
import Education from './pages/Education'
import Health from './pages/Health'
import Entertainment from './pages/Entertainment'
import Sports from './pages/Sports'
import More from './pages/More'
import ContactUs from './pages/ContactUs'

import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/national" element={<National />} />
        <Route path="/international" element={<International />} />
        <Route path="/science" element={<Science />} />
        <Route path="/business" element={<Business />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/more" element={<More />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
