import React from 'react'
import Copyright from '../Copyright/Copyright'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' >
        <div className="foot">
            <div className="about-foot">
            <div className='about-heading' >ABOUT</div>
            <br />
            <div className='about-content' >
                <p>
                Yuva Aluminium Fabrication deals with Ceiling works, Windows work, Glass work, Gypsum work, Gladding & partitioning work, Mosquito net works, modular Kitchen works, Cupboard works and PVC Door works.
                We assuring Quality material and services to our clients and our staffs are very friendly to the customers. We have a wide range of products and do Services with the requirements of customers.
                </p>
            </div>
            </div>
            <div className="service-foot">
                <div className='service-heading' >SERVICES</div>
                <br />
                <div className='service-option' >
                    <div>Ceiling</div>
                    <div>Windows</div>
                    <div>Glass Work</div>
                    <div>Gypsum Work</div>
                    <div>Gladding Partition</div>
                    <div>Mosquito Net</div>
                    <div>Kitchen Cupboard</div>
                    <div>Cupboard Work</div>
                    <div>PVC Door</div>

                </div>
            </div>
            <div className="contact-foot">
                <div className='contact-heading' >CONTACT</div>
                <br />
                <div className='contact-option' >
                    <div>
                        vijithkumar V
                    </div>
                    <div>vijithkrishnachandu@gmail.com</div>
                    <div>8921489403</div>
                </div>
            </div>
        </div>
        <Copyright/>
    </div>
  )
}

export default Footer