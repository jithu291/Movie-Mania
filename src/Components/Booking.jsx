import React from 'react'
import { useLocation } from 'react-router-dom';
import { FcFilmReel } from "react-icons/fc";
import { Button } from '@mui/material';


function Booking() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get('movie');

  const handleButtonClick = (movieName, time, theaterName) => {
    const url = `/booking2?movie=${encodeURIComponent(movieName)}&time=${encodeURIComponent(time)}&theater=${encodeURIComponent(theaterName)}`;
    window.location.href = url;
};


  return (
    <div>
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="d-flex justify-content-evenly">
            <a class="text1 navbar-brand" href="#">
              Movies-Booking
            </a>
            <div className='d-flex justify-content-evenly' style={{ marginLeft: '550px', marginTop: '2px' }}>
              <ul class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </ul>
              <ul class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </ul>
              <ul class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </ul>
              <ul class="nav-item">
                <a class="nav-link" href="#">others</a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='ms-5 mt-5'>
        <h1>{movieName}</h1>
      </div>
      <div className='border mt-3 rounded shadow' style={{ width: '90%', height: '100vh', marginLeft: '65px', backgroundColor: '#f2f2f2' }}>
        <div className='d-flex justify-content-evenly mt-5 border' style={{width:'100%', height:'100px'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '20px', fontSize:'15px' }}><FcFilmReel style={{fontSize:'30px'}} />
               Central Talkies 2K 3D Dolby Atmos: <br /> <span className='ms-5'>Thrippunithura</span></p>
               <Button onClick={() => handleButtonClick(movieName, '10:00 AM', 'Central Talkies 2K 3D Dolby Atmos')} style={{width:'100px', height:'40px'}} variant="outlined">10:00 AM</Button>
               <Button onClick={() => handleButtonClick(movieName, '03:00 PM', 'Central Talkies 2K 3D Dolby Atmos')} style={{width:'100px', height:'40px'}} variant="outlined">03:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '07:00 PM', 'Central Talkies 2K 3D Dolby Atmos')}style={{width:'100px', height:'40px'}} variant="outlined">07:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '11:00 PM', 'Central Talkies 2K 3D Dolby Atmos')}style={{width:'100px', height:'40px', backgroundColor:' #70db70', color:'white'}} variant="outlined">11:00 PM</Button>
        </div>
        <div className='d-flex justify-content-evenly mt-5 border' style={{width:'100%', height:'100px'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '20px', fontSize:'15px' }}><FcFilmReel style={{fontSize:'30px'}} />
          Cinepolis Centre Square Mall: <br /> <span className='ms-5'>Kochi</span></p>
               <Button onClick={() => handleButtonClick(movieName, '10:00 AM','Cinepolis Centre Square Mall, Kochi')} style={{width:'100px', height:'40px'}} variant="outlined">10:00 AM</Button>
               <Button onClick={() => handleButtonClick(movieName, '03:00 PM','Cinepolis Centre Square Mall, Kochi')} style={{width:'100px', height:'40px'}} variant="outlined">03:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '07:00 PM','Cinepolis Centre Square Mall, Kochi')} style={{width:'100px', height:'40px'}} variant="outlined">07:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '11:00 PM','Cinepolis Centre Square Mall, Kochi')} style={{width:'100px', height:'40px', backgroundColor:' #70db70', color:'white'}} variant="outlined">11:00 PM</Button>
        </div>
        <div className='d-flex justify-content-evenly mt-5 border' style={{width:'100%', height:'100px'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '20px', fontSize:'15px' }}><FcFilmReel style={{fontSize:'30px'}} />
          J MAX by Gejo Theatre 2K Dolby 7.1 A/C: <br /> <span className='ms-5'> Pattimatto</span></p>
               <Button onClick={() => handleButtonClick(movieName, '10:00 AM','J MAX by Gejo Theatre 2K Dolby 7.1 A/C,Pattimatto')} style={{width:'100px', height:'40px'}} variant="outlined">10:00 AM</Button>
               <Button onClick={() => handleButtonClick(movieName, '03:00 PM','J MAX by Gejo Theatre 2K Dolby 7.1 A/C,Pattimatto')} style={{width:'100px', height:'40px'}} variant="outlined">03:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '07:00 PM','J MAX by Gejo Theatre 2K Dolby 7.1 A/C,Pattimatto')} style={{width:'100px', height:'40px'}} variant="outlined">07:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '11:00 PM','J MAX by Gejo Theatre 2K Dolby 7.1 A/C,Pattimatto')} style={{width:'100px', height:'40px', backgroundColor:' #70db70', color:'white'}} variant="outlined">11:00 PM</Button>
        </div>
        <div className='d-flex justify-content-evenly mt-5 border' style={{width:'100%', height:'100px'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '20px', fontSize:'15px' }}><FcFilmReel style={{fontSize:'30px'}} />
          Vanitha Cineplex RGB Laser 4K 3D ATMOS:  <br /> <span className='ms-5'>Edappally </span></p>
               <Button onClick={() => handleButtonClick(movieName, '10:00 AM',' Vanitha Cineplex RGB Laser 4K 3D ATMOS, Edappally')} style={{width:'100px', height:'40px'}} variant="outlined">10:00 AM</Button>
               <Button onClick={() => handleButtonClick(movieName, '03:00 PM',' Vanitha Cineplex RGB Laser 4K 3D ATMOS, Edappally')} style={{width:'100px', height:'40px'}} variant="outlined">03:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '07:00 PM',' Vanitha Cineplex RGB Laser 4K 3D ATMOS, Edappally')} style={{width:'100px', height:'40px'}} variant="outlined">07:00 PM</Button>
               <Button onClick={() => handleButtonClick(movieName, '11:00 PM',' Vanitha Cineplex RGB Laser 4K 3D ATMOS, Edappally')} style={{width:'100px', height:'40px', backgroundColor:' #70db70', color:'white'}} variant="outlined">11:00 PM</Button>
        </div>
        
      </div>
    </div>
  )
}

export default Booking