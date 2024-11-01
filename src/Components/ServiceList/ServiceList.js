import React from 'react'
import AppBar from '../AppBar/AppBar';
import ContactInfo from '../ContactInfo/ContactInfo';
import './ServiceList.css'
import ce1 from '../../images/ceilingimg.jpg'
import w1 from '../../images/aluminium-windows.png'
import g1 from '../../images/glass-work.jpg'
import g2 from '../../images/g2.jpeg'
import c9 from '../../images/c9.jpeg'
import mn1 from '../../images/mn1.jpeg'
import kc7 from '../../images/kc7.jpeg'
import c6 from '../../images/c6.jpeg'
import cladding from '../../images/cladding.jpeg'
import pvc1 from '../../images/pvc1.png'
import CeilingIcon from '../../images/ceiling-icon.png'
import WindowsIcon from '../../images/windows-icon.png'
import GlassIcon from '../../images/glass-icon.png'
import GypsumIcon from '../../images/gypsum-icon.png'
import GladdingIcon from '../../images/Gladding-icon.png'
import MosquitoNetIcon from '../../images/mosquitonet-icon.png'
import KitchenCupboardIcon from '../../images/kitchen-cupboard-icon.png'
import CupboardIcon from '../../images/cupboard-icon.png'
import PVCDoorIcon from '../../images/pvcdoor-icon.png'
import Footer from '../Footer/Footer';

const ServiceList = () => {

    const services = [
        {
            name:'Ceiling',
            pic:[ce1],
            icon:`${CeilingIcon}`
        },
        {
            name:'Windows',
            pic:[w1],
            icon:`${WindowsIcon}`
        },
        {
            name:'Glass Work',
            pic:[g1],
            icon:`${GlassIcon}`
        },
        {
            name:'Gypsum Work',
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
    console.log(services);

    const handler = (i)=>{
        console.log(i);
    }

  return (
    <div className='ServiceList-container' >
        <ContactInfo/>
        <AppBar/>
        <div className="ServiceList-heading">
            <h1>How Can We Help You?</h1>
        </div>
        <div className="ServiceList-contents row ">
            {services.map((obj,index)=>
                <div className=' ServiceList col-md-6 col-lg-4'key={index} >
                    
                       
                            <div><img className='Service-pic' src={obj.pic} alt="" /></div>
                        <div>
                            <h2>{obj.name}</h2>
                        </div>
                    
                </div>
            )}
        </div>
        <Footer/>
        
    </div>
  )
}

export default ServiceList