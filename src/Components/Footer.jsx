import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };
  return (
    <div style={{backgroundColor:'#3b4054', color:' #bfbfbf'}}>
    <div className=' d-flex  mt-5 justify-content-between' >
      <div className='d-flex-column mt-5 ms-3'>
        <div className='d-flex justify-content-between'>
          <h3><i className="fa-solid fa-meteor me-2  " style={{ color: ' #bfbfbf', fontSize: '35px' }}></i>
             Movie Mania</h3>
        </div>
        <p className='d-flex-column'>Design and built with all love in the world by the <br /> Luminar team with the help of our comtributors. <br />
        Code licensed Luminar,docs CC BY 3.0. <br />
        Currently v1.0.0</p>
      </div>

      <div className='mt-5 ms-5'>
        <h3>Links</h3>
        <div className='d-flex-column'>
          <Link to={'/'} onClick={scrollToTop} style={{ textDecoration: "none", color: ' #bfbfbf' }} > Home</Link><br />
          <Link to={'/login'} style={{ textDecoration: "none", color: ' #bfbfbf' }} >Login</Link> <br />
          <Link to={'/register'} style={{ textDecoration: "none", color: ' #bfbfbf' }} >Register</Link>
        </div>
      </div>

      <div className='Guides mt-5 ms-5'>
        <h3>Guides</h3>
        <p>
          React <br />
          React Bootstrap <br />
          Routing
        </p>
      </div>

      <div className='contact mt-5 ms-5'>
        <h3>Contact Us</h3>
        <div className='d-flex'>
            
          {/* <button style={{ width: '35px', marginTop: '1px',  color:'white', backgroundColor:'#eb3656'}} className='btn  ms-1' ><i className="fa-solid fa-arrow-right mt-2 " style={{ fontSize: '20px', marginLeft: '-5px' }}></i></button> */}
        </div>
        <div className='d-flex'>
        <i class="fa-brands fa-linkedin  mt-3" style={{ fontSize: '30px', color: ' #bfbfbf' }}></i>
        <i class="fa-brands fa-twitter ms-4 mt-3" style={{ fontSize: '30px', color: ' #bfbfbf' }} ></i>
        <i class="fa-brands fa-facebook ms-4 mt-3" style={{ fontSize: '30px', color: ' #bfbfbf' }}></i>
          <i className="fa-solid fa-envelope ms-4 mt-3" style={{ fontSize: '30px', color: ' #bfbfbf' }}></i>
          <i class="fa-brands fa-tiktok mt-3 ms-4" style={{ fontSize: '30px', color: ' #bfbfbf' }} ></i>
          <i class="fa-brands fa-github ms-4  mt-3 me-4" style={{ fontSize: '30px', color: ' #bfbfbf' }}></i>
         
        </div>
      </div>
    </div>
    <div className=' d-flex justify-content-evenly mt-2'>
      <p>Copyright © 2023 E Cart. Build with React</p>
    </div>
</div>
  );
}



export default Footer;