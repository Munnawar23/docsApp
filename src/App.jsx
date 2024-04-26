import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
      <Background></Background>
      <Foreground></Foreground>
    </div>
  )
}
export default App