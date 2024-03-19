import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './home/Home'
import { SingUp } from './login/SingUp'
import { Login } from './login/Login'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/login' element={<Login/>} />
      <Route  path='/signup' element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
