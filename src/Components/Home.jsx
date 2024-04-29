import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="d-flex justify-content-evenly">
                        <a class="text1 navbar-brand" href="#">
                            Movies-Booking
                        </a>
                       <div className='d-flex justify-content-evenly' style={{marginLeft:'550px', marginTop:'2px'}}>
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

                <div className="navbar-background">
                    <img className="bg-image1" src="../src/assets/Images/landing.jpg" alt="Background" />
                    <div className='text2 shadow rounded' style={{ width: '600px', height: '310px', position: 'absolute', top: '55%', left: '75%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#3b3a38', fontSize: '20px', fontWeight: 'bold' }}>
                    <p className='para1'> Welcome to our movie booking app, where every click opens the door to a world of captivating stories and unforgettable moments. Dive into a realm where dreams come alive, where laughter echoes in the darkness, and where every seat holds the promise of a new adventure. Book your tickets, settle into your seat, and let the movies transport you to places you've never imagined. Your next great cinematic journey begins here.</p>
                    <Link to={'/register'} className='btn btn-success shadow' color="success">Get Started</Link>   
                </div>
                </div>


            </div>
        </>
    )
}

export default Home