import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import wallPoster from '../../images/wall-poster.png'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import AppBar from '../../Components/AppBar/AppBar'
import profileImg from '../../images/team.png'
import Button from '@mui/material/Button'

const About = () => {
  return (
    <div className='aboutpage-container' >
      <div className="about-container">
      <div className='aboutpage-secton' >
          <div className='about-heading' >
            <h1>About Us</h1>
          </div>
          <div className='about-content' >
            <h6>Yuva Aluminium Fabrication deals with Ceiling works, Windows work, Glass work, Gypsum work, Gladding & partitioning work, Mosquito net works, modular Kitchen works, Cupboard works and PVC Door works.
          We assuring Quality material and services to our clients and our staffs are very friendly to the customers. We have a wide range of products and do Services with the requirements of customers.</h6>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'25px'}} >
            
            <Link style={{textDecoration:'none'}} to={'/contact'} ><Button variant='outlined' style={{minWidth:'150px',minHeight:'50px'}} >Contact Us</Button></Link>
          </div>
      </div>
      <div className='about-profile' >
        <img className='profile-img' src={profileImg} alt="" />
      </div>
      </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,176C672,203,768,245,864,266.7C960,288,1056,288,1152,250.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default About