import React,{useEffect} from 'react'
import AppBar from '../../Components/AppBar/AppBar'
import Contact from '../../Components/Contact/Contact'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import Footer from '../../Components/Footer/Footer'

const ContactPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <ContactInfo/>
      <div style={{backgroundColor:'#E8B4B8'}} >
      <AppBar/>
      </div>
      <div style={{paddingTop:'90px'}} >
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage