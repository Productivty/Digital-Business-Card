import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer-section'>
        <div className="icons">
            <a href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>

            
      
        </div>
    </div>
  )
}

export default Footer