import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hero from '../assets/Images/hero-img.jpg'
import aavesham from '../assets/Images/aavesham.jpg'
import ghost from '../assets/Images/ghost.jpg'
import vars from '../assets/Images/var.jpg'
import goat from '../assets/Images/goat.jpg'
import manj from '../assets/Images/manjummel.jpg'
import fall from '../assets/Images/fall.jpg'
import screen from '../assets/Images/screen.jpg'
import dolby from '../assets/Images/dolby.jpg'
import { BsCameraReels } from "react-icons/bs";
import { CiMusicNote1 } from "react-icons/ci";
import Footer from './Footer'



function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    };
    const nowShowingRef = useRef(null);

    const handleClicking = () => {
        nowShowingRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div style={{ backgroundColor: '#1a1d2c', width: '100%', height: '140vh' }}>
                <nav class="navbar bg-body-tertiary">
                    <div class="d-flex justify-content-evenly">
                        <a class="text1 navbar-brand" href="#">
                            Movie-Mania
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

                {/* <div className="navbar-background">
                    <img className="bg-image1" src="../src/assets/Images/landing.jpg" alt="Background" />
                    <div className='text2 shadow rounded' style={{ width: '600px', height: '310px', position: 'absolute', top: '55%', left: '75%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#3b3a38', fontSize: '20px', fontWeight: 'bold' }}>
                    <p className='para1'> Welcome to our movie booking app, where every click opens the door to a world of captivating stories and unforgettable moments. Dive into a realm where dreams come alive, where laughter echoes in the darkness, and where every seat holds the promise of a new adventure. Book your tickets, settle into your seat, and let the movies transport you to places you've never imagined. Your next great cinematic journey begins here.</p>
                    <Link to={'/register'} className='btn btn-success shadow' color="success">Get Started</Link>   
                </div>
                </div> */}
                <div  >
                    <h1 className="heading-primary" style={{ color: '#e6e6e8', fontWeight: '600px', fontSize: '50px', letterSpacing: '-0.3px', marginTop: '130px', marginLeft: '90px' }}>
                        Unlock the Gateway to <br /> Enchanting Movie Magic
                    </h1>
                    <p className="hero-description" style={{ color: '#e6e6e8', fontWeight: 'lighter', marginTop: '30px', marginLeft: '90px' }}>
                        Immerse yourself in the captivating allure of cinema as you step
                        into our exquisite <br /> destination, designed to elevate your
                        movie-watching experience to new heights.
                    </p>
                    <button className="button3" onClick={handleClick}>
                        Buy a ticket
                    </button>
                    <div>

                        <button style={{ color: '#e6e6e8', marginTop: '-75px', marginLeft: '250px' }} class="learn-more" onClick={handleClicking} smooth to="#nowShowing">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Learn More</span>
                        </button>
                    </div>
                    <div className="hero-img-box">
                        <img
                            className="hero-img"
                            src={hero}
                            alt="Hero Image"
                        />
                    </div>

                </div>
                <div ref={nowShowingRef} id="nowShowing" style={{ backgroundColor: '#3b4054', width: '100%', height: '140vh', marginTop: '35px' }}>
                    <center>
                        <h2 className='heading-secondary heading-collection' style={{ color: '#e6e6e8', marginTop: '0px' }}>Now Playing</h2>
                    </center>
                    <div className='d-flex justify-content-evenly mt-5'>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={aavesham} alt="" />
                            </div>
                        </div>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={vars} alt="" />

                            </div>
                        </div>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={goat} alt="" />

                            </div>
                        </div>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={manj} alt="" />

                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly mt-5'>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={ghost} alt="" />

                            </div>
                        </div>
                        <div class="card3">
                            <div class="card4">
                                <img style={{ width: '250px', height: '300px', borderRadius: '13px' }} src={fall} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#1a1d2c', width: '100%', height: '230vh'}}>
                    <div className='pt-5'>
                    <p style={{color:'#eb3656', fontWeight:'700px', marginLeft:'70px' }}>WHAT YOU'LL GET?</p>
                    <h2 style={{color: '#e6e6e8', fontWeight: '600px', marginLeft:'70px'}}>Unleash the Movie Magic and Discover Our Spectacular Features</h2>
                    </div>
                    <div  className=' mt-5 d-flex justify-content-evenly' style={{width:'100%', height:'80vh'}}>
                        <img  className='ms- rounded' style={{width:'40%', height:'60vh'}} src={screen} alt="" />
                        <div style={{marginTop:'80px'}}>
                        <BsCameraReels style={{color:'#eb3656', fontSize:'40px',}} />
                        <h4 className='mt-3' style={{color:'#e6e6e8'}}>Unparalleled Cinematic Experience</h4>
                        <p style={{color:'#ceced6', fontWeight:'lighter'}}>Immerse yourself in stunning visuals and crystal-clear sound, as our state-of-<br />the-art IMAX technology transports you directly into the heart of the action. <br /> With a screen that stretches beyond your peripheral vision every frame comes <br /> alive with unparalleled brilliance.</p>
                        </div>

                    </div>
                    <div className=' mt- d-flex justify-content-evenly' style={{width:'100%', height:'80vh'}}>
                        <div style={{marginTop:'80px', marginLeft:'50px'}}>
                        <CiMusicNote1 style={{color:'#eb3656', fontSize:'50px',}} />
                        <h4 className='mt-3' style={{color:'#e6e6e8'}}>Delight in Dolby Atmos</h4>
                        <p style={{color:'#ceced6', fontWeight:'lighter'}}>Experience sound like never before with Dolby Atmos, the epitome audio <br /> technology that takes you on an immersive sonic journey.With sound objects <br /> moving seamlessly around the theatre, you'll be transported into the heart of <br /> every scene, making you an integral part of the story.</p>
                        </div>
                        <img className='me- rounded' style={{width:'40%', height:'60vh'}} src={dolby} alt="" />

                    </div>
                    <Footer/>

                </div>
            </div>
        </>
    )
}

export default Home