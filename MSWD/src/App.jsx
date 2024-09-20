import React from 'react'
import Home from './components/home'
import Usercard from './components/usercard'
import Counter from './components/counter'
import Form from './components/form'
import Quiz from './components/quiz'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='forAll'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/usercard' element={<Usercard />} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/form' element={<Form />}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
