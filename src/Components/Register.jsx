import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post('https://movie-mania-backend-1.onrender.com/auth/register', {
        username,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',

        }
      });

      if (response.status === 200) {
        console.log('Registration successful');
        toast.success('Register successfull')
        setTimeout(() => {
          setLoading(false);
          navigate('/login');
        }, 3000);
      } else {
        setErrorMessage(response.data.error);
      }

    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="register-container" style={{ width: '100%', height: '100vh', backgroundColor: 'white', position: 'absolute' }}>
      <div style={{ position: 'relative' }} className='image-container d-flex justify-content-center'>
        <img className="register-image" style={{ width: '60%', height: '70vh', marginTop: '85px', borderRadius: '30px' }} src="../src/assets/Images/register.jpg" alt="" />
        <div className="registration-form">

          <form style={{ marginTop: '170px' }}  >

            <div class="form-floating mb-2 d-flex" >
              <div className='user  rounded  shadow' style={{ height: '58px', width: '36px', color: 'black' }}><i class="fa-solid fa-user " style={{ marginTop: '22px', marginLeft: '10px' }}></i></div>
              <input style={{ width: '300px' }}
                type="text"
                className="form-control  ms-2 border rounded shadow "
                id=" floatingInput"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                value={username} />
              <label for="floatingInput1" className='ms-5 '  > Username</label>
            </div>


            <div class="form-floating mb-2 d-flex" >
              <div className='user  rounded  shadow' style={{ height: '58px', width: '40px', color: 'black' }}><i class="fa-solid fa-envelope " style={{ marginTop: '22px', marginLeft: '10px' }}></i></div>
              <input
                type="email"
                className="form-control  ms-2 border rounded shadow "
                id=" floatingInput"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
                value={email} />
              <label for="floatingInput2" className='ms-5 '  >Email address</label>
            </div>
            <div class="form-floating mb-2 d-flex">
              <div className='user  rounded  shadow' style={{ height: '58px', width: '40px', color: 'black' }}> <i class="fa-solid fa-lock " style={{ marginTop: '22px', marginLeft: '10px' }}></i></div>
              <input
                type="password"
                class="form-control border ms-2 rounded shadow"
                id="floatingPassword"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password} />
              <label for="floatingPassword" className='ms-5 '>Password</label>
            </div>
            <div className='mt-3'>

              <p style={{ marginLeft: '50px' }} className='text-dark'>  Already have an account?  <Link style={{ color: "blue", textDecoration: 'none' }} to={'/login'}>Login</Link>  </p>
              {/* :
                  <p className='text-light'>Not registered yet? <Link style={{ color: "white" }} to={'/register'}>Register</Link>  </p> */}

            </div>

            {/* <div>
               
                    <div className='reg-div d-flex justify-content-center  shadow rounded ' style={{ backgroundColor: 'darkgray' }}>
                      <button className='btn' >Register</button>
                    </div> :
                    <div className='reg-div d-flex justify-content-center  shadow rounded ' style={{ backgroundColor: 'darkgray' }}>
                      <button className='btn' >Login

                      </button>
                    </div>
                
              </div> */}
          </form>
          <div style={{ marginTop: '0px' }}>
            <Button onClick={handleRegisterClick} style={{ width: '100px', marginLeft: '100px', backgroundColor: 'white', color: 'black' }} variant="contained">Register</Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register