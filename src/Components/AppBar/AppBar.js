import React,{useState} from 'react'
import './AppBar.css'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../images/imglogo.png'

const AppBar = () => {

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
    <div className={scrolled? 'appbar-containeroff' : 'appbar-container'}>
        
        <div className="links">
          <Link to={'/'} ><div>Home</div></Link>
          <Link to={'/about'} ><div>About</div></Link>
          <Link to={'/services'} ><div>Services</div></Link>
          <Link to={'/contact'} ><div>Contact</div></Link>
        </div>

    </div>
  )
}

export default AppBar