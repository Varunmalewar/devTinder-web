
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"




function App() {
 

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path= "/" element ={<div><Body/></div>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>


      </Routes>

    
    </BrowserRouter>
    {/* <Navbar/> */}
     
 
      
      
     

    </>
  )
}

export default App
