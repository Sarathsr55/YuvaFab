import React,{useEffect} from 'react'
import About from '../../Components/About/About'
import AppBar from '../../Components/AppBar/AppBar'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import Footer from '../../Components/Footer/Footer'
import './AboutPage.css'

const AboutPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div className='aboutpage-container' >
        <ContactInfo/>
        <AppBar/>
        <div className='aboutpage-content' >
            <About/>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage