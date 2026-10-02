import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>     
      <Card user="Praveen" age={18} img="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"  />
      <Card user="Sarthak" age={17} img="https://images.unsplash.com/photo-1780914435941-f0ea484146a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"/>
      <Card user= "harsh" age ={188} img="https://images.unsplash.com/photo-1783181155188-89dbe82951c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
