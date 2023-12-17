import React from 'react';
import '../CSS/Home.css'
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Home() {
  return (
   <>
   <div className="container1">
    <div className='left-container'>
    <h3>Hey !</h3>
    <h1>I'm  VINEK MAURYA</h1>
    <div className='wrapper'>
    <ul>
        
        <li className='li'>
            Full Stack web Developer | MERN
        </li>
        
    </ul>
    </div>
    <div className="logo-container">
 <ul>
   <li><a href="https://github.com/vinekmaurya2329"><img width="64" height="64" src="https://img.icons8.com/nolan/64/github.png" alt="github"/></a></li>
   <li><a href="https://www.linkedin.com/in/vinekmaurya/"><img width="64" height="64" src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin"/></a></li>
   <li><a href="https://www.instagram.com/aash_maurya2329/"><img width="64" height="64" src="https://img.icons8.com/nolan/64/instagram-new.png" alt="instagram-new"/></a> </li>
   <li><a href="https://wa.me/qr/62JGXY4OWHL6I1" target='_blank'><img width="64" height="64" src="https://img.icons8.com/nolan/64/whatsapp.png" alt="whatsapp"/></a></li>
    </ul>
    </div>
    <div className="btn-container">
        <a href="https://github.com/vinekmaurya2329"><button className='btn1'>See my work</button></a>
        <a href="https://drive.google.com/file/d/1fbCY6tEZHEHTleDy8MGffU-onhIWhLXm/view?usp=sharing"><button className='btn2'>Resume</button></a>
    </div>
    </div>
    <div className='right-container'>
        <img className='right-container-img' src="https://portfolio-vinekmaurya2329.vercel.app/Profile2-img.jpg" alt="img" />
        </div>
   </div>
   </>
  )
}

export default Home