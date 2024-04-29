import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { FaFirstOrderAlt } from "react-icons/fa";

function Landing() {

  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookTicket = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/booking?movie=${selectedMovie.title}`);
    }, 1000);
  };


  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderModal = () => {
    return (
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='row' style={{ width: '600px', height: '400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Black', padding: '20px' }}>
          <div className='col-lg-6'>
            <img src={selectedMovie.image} alt={selectedMovie.title} style={{ maxWidth: '700px', height: '330px' }} />
          </div>
          <div className='col-lg-6'>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }} variant="h6" component="h2" gutterBottom>
              Movie: {selectedMovie.title}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '20px' }} variant="body1" gutterBottom>
              Genre: {selectedMovie.type}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '10px' }} variant="body2" gutterBottom>
              Director: {selectedMovie.director}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '10px' }} variant="body2" gutterBottom>
              Language: {selectedMovie.language}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '10px' }} variant="body2" gutterBottom>
              Movie: {selectedMovie.movie}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '10px' }} variant="body2" gutterBottom>
              IMDb Rating : {selectedMovie.rating}
            </Typography>
            <Typography style={{ fontWeight: 'bold', color: 'white', fontSize: '15px', marginTop: '10px' }} variant="body2" gutterBottom>
              Time : {selectedMovie.time}
            </Typography>
            <Button
              variant="contained"
              onClick={handleBookTicket}
              color="error"
              style={{ marginTop: '20px', marginLeft: '50px', animation: 'pulse 1.5s infinite' }}
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" size="lg" />
              ) : (
                'Book Ticket'
              )}
            </Button>
          </div>

        </div>
      </Modal>
    );
  };

  const movies = [
    {
      title: 'Aavesham',
      type: 'Action comedy',
      director: ' Jithu Madhavan',
      image: '../src/assets/Images/aavesham.jpg',
      language: 'Malayalam',
      movie: 2024,
      rating: 9.2,
      time: '	161 minutes'

    },
    {
      title: 'Varshangalkku Shesham',
      type: ' Adventure, Thriller',
      director: 'VineethSreenivasan',
      image: '../src/assets/Images/var.jpg',
      language: 'Malayalam',
      movie: 2024,
      rating: 7.4,
      time: '115 Min'

    },
    ,
    {
      title: 'The Goat Life ',
      type: ' Adventure Drama',
      director: 'Blessy',
      image: '../src/assets/Images/goat.jpg',
      language: 'Malayalam',
      movie: 2024,
      rating: 8.7,
      time: '165 Min'
    },
    {
      title: 'Manjummel Boys',
      type: ' Adventure, Thriller',
      director: ' Chidambaram',
      image: '../src/assets/Images/manjummel.jpg',
      language: 'Malayalam, Telugu',
      movie: 2024,
      rating: 8.7,
      time: '135 Min'
    }

    // Add more movie objects as needed
  ];
  return (
    <>
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
                <Link to="/list" className='button2 ms-4'>
  <span className="button_top">
    <FaFirstOrderAlt style={{marginTop:'-20px', marginLeft:'-10px', fontSize:'25px'}} />
  </span>
</Link>              </div>
            </div>
          </nav>
        </div>
        <div style={{ width: '100%', height: '400px' }}>
          <CCarousel controls indicators interval={1000}>
            <CCarouselItem>
              <CImage className="d-block w-100" style={{ height: '380px' }} src="../src/assets/Images/movie11.jpg" alt="slide 1" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Explore Now</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" style={{ height: '380px' }} src="../src/assets/Images/movie2.jpg" alt="slide 2" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Explore Now</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" style={{ height: '380px' }} src="../src/assets/Images/movie3.jpg" alt="slide 3" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Explore Now</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <div>
          <h2 style={{ marginLeft: '50px', marginTop: '50px' }}>Trending Now!!!!</h2>
        </div>
        <div className='d-flex justify-content-evenly shadow'>
          {movies.map((movie, index) => (
            <Card key={index} className="card" sx={{ width: '280px', height: '380px' }} onClick={() => handleCardClick(movie)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={movie.image}
                  alt={movie.title}
                />

              </CardActionArea>
            </Card>
          ))}
          {openModal && renderModal()}

        </div>

        {/* <div style={{width:'100%', height:'300px'}} className='mt-5'>
    <img style={{width:'100%', height:'150px'}} src="../src/assets/Images/mike.png"  alt="" />
  </div> */}
        {/* <div className='d-flex justify-content-evenly shadow'>
          {movies.map((movie, index) => (
            <Card key={index} className="card" sx={{ width: '280px', height: '380px' }} onClick={() => handleCardClick(movie)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={movie.image}
                  alt={movie.title}
                />

              </CardActionArea>
            </Card>
          ))}
          {openModal && renderModal()}

        </div> */}
      </div>
    </>
  )
}

export default Landing