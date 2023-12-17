import React from 'react';
import '../CSS/Contact.css'

function Contact() {
  return (
   <>
   <div className="contact-main" id='contact'>
    <div className="container-6">
        <h1 style={{marginTop:'20px'}}>Contact me</h1>
        <input type="text" placeholder='Enter your name' />
        <input type="text" placeholder='Enetr your email' />
        <input type="text" placeholder='Enter your message here' />
        <button className='btn btn-secondary'>Send</button>

    </div>
    <div className="contact-container">
        <h5><i class="ri-phone-line"></i>7522072202</h5>
        <h5><i class="ri-mail-line"></i>aashmaurya7522@gmail.com</h5>
        <h5><i class="ri-map-pin-line"></i>Prayagraj, Uttar Pradesh</h5>
    </div>
   </div>
   
   </>
  )
}

export default Contact