import React,{useEffect, useState} from 'react'
import './ContactInfo.css'
import phoneIcon from '../../images/phone.png'
import mailIcon from '../../images/gmail.png'


const ContactInfo = () => {

    const [scrolled,setScrolled] = useState(false)
    const handleScroll = (event) =>{
      
      if(window.scrollY>=20){
        
        return setScrolled(true)
        
  
      }else if(window.scrollY<20) {
        
        return setScrolled(false)
      }    
    }
    
        window.addEventListener('scroll',handleScroll)


  return (
    <div className={scrolled? 'onscroll' : 'info-container'} >
        <div >
            <h6 style={{marginBottom:'0'}} >Welcome to YUVA</h6>
        </div>

        <div className='info' >
            <div style={{paddingLeft:'20px',paddingRight:'20px',display:'flex',alignItems:'center'}} >
                <img className='icon' src={phoneIcon} alt="" />
                <h6 style={{marginBottom:'0'}} >8921489403</h6>
            </div>
            <div style={{paddingLeft:'20px',paddingRight:'20px',display:'flex',alignItems:'center'}} >
                <img className='icon' src={mailIcon} alt="" />
                <h6 style={{marginBottom:'0'}} >vijithkrishnachandu@gmail.com</h6>
            </div>
        </div>

    </div>
  )
}

export default ContactInfo