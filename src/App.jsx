import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import CreateUrl from './Pages/CreateUrl'
import History from './Pages/History'
import Resetpassword from './Pages/Resetpassword'
import Activate from './Pages/Activate'
import { useContext } from 'react'
import { Usercontext } from './Context/LoginContext'

function App() {
   
    const [islogin,setlogin]= useContext(Usercontext)
  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path='/login' element={!islogin?<Login/>:<Navigate to="/"/>}/>
       <Route path='/signup' element={!islogin?<Signup/>:<Navigate to="/"/>}/>
        <Route path='/' element={islogin?<Home/>:<Navigate to="/login"/>}>
          
          <Route path='/' element={islogin?<CreateUrl/>:<Navigate to="/login"/>}/>
          <Route path='/History' element={islogin?<History/>:<Navigate to="/login"/>}/>
        </Route>
        <Route path='/reset' element={<Resetpassword/>}/>
        <Route path='/activate' element={<Activate/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
