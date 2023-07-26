import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='Contact'>
        <h3>You can reach us through:</h3>

        <Link to = "https://www.instagram.com">Instagram</Link> 
        <br/>
        <Link to = "https://www.twitter.com">Twitter</Link>
        <br/>
        <Link to = "https://www.facebook.com">Facebook</Link>
        <br/>
    </div>
  )
}

export default Contact;