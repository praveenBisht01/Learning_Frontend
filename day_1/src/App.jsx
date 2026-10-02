import React from 'react'
import Card from './components/card'
import navbar from './components/navbar'

const App = () => {
  return (
    <div>
      {navbar()}
      <Card />
    </div>
  )
}


export default App
