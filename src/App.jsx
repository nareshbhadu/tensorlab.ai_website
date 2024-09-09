import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Main/>
    <Footer />
    </>
  )
}

export default App
