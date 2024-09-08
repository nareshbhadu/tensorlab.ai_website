import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
       <h1 className="text-3xl font-bold underline min-h-screen justify-center flex ">
      Template
    </h1>
    <Footer />
    </>
  )
}

export default App
