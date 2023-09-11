import { useState } from 'react'
import Header from './components/Header/Header';
import db from './utils/connect'
import './App.scss'



function App() {

  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
