import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
// import { login } from '../Utils/appSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Utils/constants';
// import { useSelector } from 'react-redux';

const Login = () => {

    const [email, setEmailId] = useState("kavitamalewar@gmail.com");
    const [password, setPassword] = useState("KavitaMalewar@*070401");
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const res = await axios.post(BASE_URL+"/login", {
          email,
          password,
        },{withCredentials: true});
 
        console.log("Login successful:", res.data);
        // Dispatch the login action with user data
        dispatch(addUser(res.data));
        navigate("/");

      
      } catch (err) {
        setError(err.response.data || "Login failed. Please try again.");

        console.error("Error during login:", err);
        alert("Login failed. Please check your credentials.");
      }
    }
  return (
    <>
    <div className='flex justify-center my-10'>
        <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className=''>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id</legend>
  <input type="text" className="input" placeholder="Type here" value={email} onChange={(e) => setEmailId(e.target.value)}/>
  <p className="label">Required</p>
</fieldset>


    <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" placeholder="Type here" value={password} onChange={(p)=>setPassword(p.target.value)}/>
  <p className="label">Required</p>
</fieldset>
    </div>
    <p className="text-red-900">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Login
