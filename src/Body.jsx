import React from 'react'
import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Body() {
  return (
    <div className="my-body">
      <div className="info-me">
        <h3 className="my-name">Pradeep Thapa</h3>
        <p className="profession">Frontend Developer</p>
        <p className="website-name">thapa.com</p>
      </div>

      <div className="link">
        <button>
          <FontAwesomeIcon icon={faEnvelope} />
          Email 
        </button>
        <button className='linked-in'>
          <FontAwesomeIcon icon={faLinkedin} />
          Linkedin
        </button>
      </div>
    
      <div className="activities">
        <h4 className="about">About</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi suscipit aut quos voluptates quam iste molestiae ipsa numquam exercitationem!</p>

        <h4 className="interests">Interests</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic tempora natus quidem doloribus perferendis, ut accusantium! Et veniam dignissimos,
          asperiores dolorem aperiam ipsam nobis deleniti doloremque sed facere. Atque, quo.</p>
      </div>
    </div>
  )
}

export default Body