import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../Utils/userSlice'

const Navbar = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user)
  const handleLogout =async () => {
    try{
      const res = await axios.post(BASE_URL + "/logout",{},{withCredentials: true});
      dispatch(removeUser());
      if(res.status === 200){
        return navigate("/login");
      }

     
    }
    catch(err){
      console.log(err);
    }
  
  }
  return (
    <div>
          <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder🧑‍💻</Link>
  </div>
  {user &&<div className="flex gap-2">

    <div className="dropdown dropdown-end mx-5 flex  ">
    <p className='px-7 py-3'>Welcome, {user.firstName}</p>
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
    </div>
  )
}

export default Navbar
