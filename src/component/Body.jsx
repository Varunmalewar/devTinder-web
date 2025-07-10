import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user)

  const fetchUser = async () =>{
    if(userData){
      // If userData is already available, no need to fetch again
      return;
    }
    try{const res = await axios.get(BASE_URL + "/profile/view",{
      withCredentials : true} )
       dispatch(addUser(res.data));
    }

     
      catch(err){
        if(err.status === 401){
          navigate("/login");

        }
        // If the user is not logged in, redirect to login page
        console.log(err);
      }
  }
  useEffect(() =>{
 
      // If userData is not available, fetch user data
      fetchUser();

    },[])

  return (
    <>
    <div>
      <Navbar/>
      <Outlet/> 
      <Footer></Footer>
    </div>
    </>
  )
}

export default Body
