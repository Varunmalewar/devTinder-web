
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import appStore from "./Utils/appStore"
import { Provider } from "react-redux"
import Feed from "./component/Feed"





function App() {
 

  return (
    <>
    <Provider store ={appStore}>

    <BrowserRouter basename="/">
      <Routes>
        <Route path= "/" element ={<div><Body/></div>}>

          <Route path="/" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>


      </Routes>

    
    </BrowserRouter>
    </Provider>
    {/* <Navbar/> */}
     
 
      
      
     

    </>
  )
}

export default App
