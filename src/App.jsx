import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './header/Header'
import HeaderLogo from './header/HeaderLogo'
import ContactUS from './Form/ContactUS'
import Footer from './footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <HeaderLogo/>
    <Navbar/>
    <ContactUS/>
    {/* <Map/> */}
    <Footer/>
    </>
  )
}

export default App
