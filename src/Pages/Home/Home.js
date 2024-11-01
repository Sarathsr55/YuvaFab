import React,{useState,useEffect} from 'react'
import './Home.css'
import AppBar from '../../Components/AppBar/AppBar'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import logoimg from '../../images/imglogo1.png'
import kitchenCupboard from '../../images/kitchen-cupboard.webp'
import CeilingIcon from '../../images/ceiling-icon.png'
import WindowsIcon from '../../images/windows-icon.png'
import GlassIcon from '../../images/glass-icon.png'
import GypsumIcon from '../../images/gypsum-icon.png'
import GladdingIcon from '../../images/Gladding-icon.png'
import MosquitoNetIcon from '../../images/mosquitonet-icon.png'
import KitchenCupboardIcon from '../../images/kitchen-cupboard-icon.png'
import CupboardIcon from '../../images/cupboard-icon.png'
import PVCDoorIcon from '../../images/pvcdoor-icon.png'
import SimpleImageSlider from "react-simple-image-slider"
import ce1 from '../../images/ceilingimg.jpg'
import w1 from '../../images/aluminium-windows.png'
import g1 from '../../images/glass-work.jpg'
import g2 from '../../images/g2.jpeg'
import c9 from '../../images/Tv-stand.jpeg'
import mn1 from '../../images/mn1.jpeg'
import kc7 from '../../images/kc7.jpeg'
import c6 from '../../images/c6.jpeg'
import cladding from '../../images/cladding.jpeg'
import pvc1 from '../../images/pvc1.png'
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import { HashLink } from 'react-router-hash-link'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[location])

    const [windowWidth,setWindowWidth] = useState(360)
    useEffect(()=>{
        const windowSize = window.innerWidth
        console.log(windowSize);
        setWindowWidth(windowSize)
    })
    
    const services = [
        {
            name:'Windows',
            pic:[w1],
            icon:`${WindowsIcon}`
        },
        {
            name:'Ceiling',
            pic:[ce1],
            icon:`${CeilingIcon}`
        },
        {
            name:'Glass Work',
            pic:[g1],
            icon:`${GlassIcon}`
        },
        {
            name:'Tv Stand',
            pic:`${c9}`,
            icon:`${GypsumIcon}`
        },
        {
            name:'Gladding partition',
            pic:`${cladding}`,
            icon:`${GladdingIcon}`
        },
        {
            name:'Mosquito Net',
            pic:`${mn1}`,
            icon:`${MosquitoNetIcon}`
        },
        {
            name:'Kitchen cupboard',
            pic:`${kc7}`,
            icon:`${KitchenCupboardIcon}`
        },
        {
            name:'Cupboard',
            pic:`${c6}`,
            icon:`${CupboardIcon}`
        },
        {
            name:'PVC Door',
            pic:`${pvc1}`,
            icon:`${PVCDoorIcon}`
        },

    ]
    const [active,setActive] = useState(services[0])
    const [active1,setActive1] = useState(services[0])
    const handler = (i)=>{
        setActive(services[i])
        setActive1(services[i])
        console.log(i);
    }
    

  return (
    <div>
        <ContactInfo/>
        <AppBar/>
        <div className="home-container">
            <div className="img-logo">
                <img className='logo' src={logoimg} alt="" />
            </div>
        </div>
        <About/>
        <div className='contents' >
            <div className="header">
                <div className='heading' ><h1>Our Services</h1></div>
                <div className="content ">
                    <div className="service-option">
                        {services.map((obj,index)=>
                            <div className='box-color' key={index} onClick={()=>handler(index)} >
                                <h3>{obj.name}</h3>
                            </div>
                        )}
                    </div>
                    <div className="service-details">
                        
                        
                            <img style={{width:'100%',height:'500px',borderRadius:'15px'}} src={active.pic} alt="" />
                        
                        <h1>{active.name}</h1>
                    </div>
                    
                </div>
                <div className="content1">
                    <div className="service-info1" style={{maxWidth:`${windowWidth}`}} >
                        {services.map((obj,index)=>
                            <div className="icons" key={index} onClick={()=>handler(index)} >
                                <img className='icon-img' src={obj.icon} alt="" />
                                {obj.name}
                        </div>
                        )}
                    </div>
                    <div className="service-details1">
                        
                            <img style={{width:'100%',maxHeight:'350px',height:'auto',borderRadius:'15px'}} src={active1.pic} alt="" />
                        
                        <h1>{active.name}</h1>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#E8B4B8" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,176C672,203,768,245,864,266.7C960,288,1056,288,1152,250.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <Contact/>
          <Footer/>  

    </div>
  )
}

export default Home