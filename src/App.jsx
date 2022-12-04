import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen flex flex-col items-center '>
        <Navbar />
        <About />
    </div>
  )
}

export default App