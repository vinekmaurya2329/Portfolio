import React from 'react';
import '../CSS/Project.css';
import Carousel from 'react-bootstrap/Carousel';

function Project() {
  return (
    <>
    <h2 style={{textAlign:'center', marginBottom:'10px'}} id='project'>Projects</h2><hr />
    <div className="container-4">
        <div className="container-4-child">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/pairup-SS.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/pairup-2-SS.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/pairup-3-SS.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

         <h3>Pair Up</h3>
         <div className='container-4-ul'>
          <ul>
            <li className="project-details">
            Developed a full‐stack social media web application, ”Pair Up,” aimed at reducing isolation and loneliness. Leveraged ReactJS to create engag‐
ing user interfaces, including a user‐friendly chatbox, seamless login and signup pages, and an intuitive event creation module.
            </li>
            <li className="project-details">
            Dynamic Frontend Design: Designed and implemented the frontend of Pair Up using ReactJS, ensuring a responsive and visually appealing user
experience.
            </li>
            <li className="project-details">
            Robust Backend Infrastructure: Built a resilient backend for Pair Up utilizing Node.js and Express.js to develop a set of APIs. Leveraged MongoDB
to create a scalable database structure
            </li>
            <li className="project-details">
            Effective User Connectivity: Engineered Pair Up to serve its core purpose of connecting individuals with specific needs, fostering a sense of
community. Seamlessly integrated frontend and backend components
            </li>
          </ul>
         </div>
         <div className="tech-icons">
         <i class="ri-html5-fill"></i>
         <i class="ri-css3-fill"></i>
         <i class="ri-javascript-fill"></i>
         <i class="ri-npmjs-fill"></i>
         <i class="ri-reactjs-line"></i>
         <i class="ri-leaf-fill"></i>
         <i class="ri-bootstrap-fill"></i>
         </div>
         <div className="link-container">
          <a href="https://github.com/vinekmaurya2329/Pair-Up.git"><button className='link-btn'>Github link</button></a>
          <a href="https://pair-up-gilt.vercel.app/"><button className='link-btn'>Live link</button></a>
         </div>
        </div>

        <div className="container-4-child">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Shivrooms-1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Shivrooms-2.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Shivrooms-3.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Shivrooms-4.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

         <h3>Shiv Rooms</h3>
         <div className="container-4-ul">
          <li className="project-details">
          developed a full stack room booking web application, ”Shiv Rooms” amied to help passengers for booking and find room, Designed and imple‐
mented the frontend of Shiv Rooms using React.js , ensuring a responsive and visually appealing user experience
          </li>
          <li className="project-details">
          Features : Include login and Sign up page ,Booking page And Also implemented Admin Panel
          </li>
          <li className="project-details"><span className='tech-span'>Technical Skills:</span> HTML, CSS, JavaScript, node.js, Express.js, MongoDB, React.js, Ant Design</li>
          {/* <li className="project-details"></li> */}
         </div>
         <div className="tech-icons">
         <i class="ri-html5-fill"></i>
         <i class="ri-css3-fill"></i>
         <i class="ri-javascript-fill"></i>
         <i class="ri-npmjs-fill"></i>
         <i class="ri-reactjs-line"></i>
         <i class="ri-leaf-fill"></i>
         <i class="ri-bootstrap-fill"></i>
         </div>
         <div className="link-container">
          <a href="https://github.com/vinekmaurya2329/HotelBooking_app.git"><button className='link-btn'>Github link</button></a>
          <a href="https://shivroom-client.vercel.app/"><button className='link-btn'>Live link</button></a>
         </div>
        </div>

        <div className="container-4-child">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Ecommerce-1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Ecommerce-2.png"

          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Ecommerce-3.png"

          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Ecommerce-4.png"

          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>


         <h3>E-Commerce</h3>
         <div className="container-4-ul">
          <li className="project-details">
          Developed a full Stack web application , ”E‐commerce App”, Designed and implemented the frontend of E‐Commerce App using React.js
          </li>
          <li className="project-details">
          Features : Include sign up, login page, Cart section, also implemented Admin Controls,admin can perform CURD operation, use JWT for au‐
thentication
          </li>
          <li className="project-details">
             <span className='tech-span'>Technical Skills:</span> HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js
          </li>
         </div>
         <div className="tech-icons">
         <i class="ri-html5-fill"></i>
         <i class="ri-css3-fill"></i>
         <i class="ri-javascript-fill"></i>
         <i class="ri-npmjs-fill"></i>
         <i class="ri-reactjs-line"></i>
         <i class="ri-leaf-fill"></i>
         <i class="ri-bootstrap-fill"></i>
         </div>
         <div className="link-container">
          <a href="https://github.com/vinekmaurya2329/Ecommerce_app.git"><button className='link-btn'>Github link</button></a>
          <a href="https://delightful-ox-coveralls.cyclic.app/"><button className='link-btn'>Live link</button></a>
         </div>
        </div>


        <div className="container-4-child">
        <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Quora-1.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Quora-2.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Quora-3.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-j23y154gr-vinekmaurya2329.vercel.app/Quora-4.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>


         <h3>Quora Clone</h3>
         <div className="container-4-ul">
          <li className="project-details">
          developed a full stack Clone of Quora , Designed and implemented the frontend of Quora‐clone using React.js
          </li>
          <li className="project-details">
           Features : used Firebase to authentication users, also implemented Ask Question Section , reply answer section
          </li>
          <li className="project-details">
             <span className='tech-span'>Technical Skills:</span> HTML, CSS, JavaScript, Firebase, Node.js, Express.js, MongoDB, React.js
          </li>
         </div>
         <div className="tech-icons">
         <i class="ri-html5-fill"></i>
         <i class="ri-css3-fill"></i>
         <i class="ri-javascript-fill"></i>
         <i class="ri-npmjs-fill"></i>
         <i class="ri-reactjs-line"></i>
         <i class="ri-leaf-fill"></i>
         <i class="ri-fire-fill"></i>
         <i class="ri-bootstrap-fill"></i>
         </div>

         <div className="link-container">
          <a href="https://github.com/vinekmaurya2329/quora-clone-app.git"><button className='link-btn'>Github link</button></a>
          <a href=""><button className='link-btn'>Live link</button></a> 
         </div>

        </div>

        <div className="container-4-child">
        <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-vinekmaurya2329.vercel.app/Anchors-1.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-vinekmaurya2329.vercel.app/Anchors-2.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-vinekmaurya2329.vercel.app/Anchors-3.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://portfolio-vinekmaurya2329.vercel.app/Anchors-4.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>


         <h3>Anchors</h3>
         <div className="container-4-ul">
          <li className="project-details">
          design of a feature for users to upload video links and check the top‑earning videos based on engagement metrics (subscriber count, likes,
comments, views) and calculate video earnings using a specified formula.
          </li>
          <li className="project-details">
          Result Page: After inputting a video link, users will be redirected to a result page displaying the video’s engagement metrics, calculated earnings
          </li>
          <li className="project-details">• Features: Landing Page, Result Page, Request Call Back Popup, Success Message for Request Call Back, Email Notification</li>
          <li className="project-details">
             <span className='tech-span'>Technical Skills:</span> HTML, CSS, JavaScript, Node.js, Express.js, GSAP, ejs
          </li>
         </div>
         <div className="tech-icons">
         <i class="ri-html5-fill"></i>
         <i class="ri-css3-fill"></i>
         <i class="ri-javascript-fill"></i>
         <i class="ri-npmjs-fill"></i>
         {/* <i class="ri-reactjs-line"></i> */}
         <i class="ri-leaf-fill"></i>
         {/* <i class="ri-fire-fill"></i> */}
         {/* <i class="ri-bootstrap-fill"></i> */}
         </div>

         <div className="link-container"> 
          <a href="https://github.com/vinekmaurya2329/anchors.git"><button className='link-btn'>Github link</button></a>
          <a href="https://anchor-xh5c.onrender.com/"><button className='link-btn'>Live link</button></a>
         </div>

        </div>

    </div>
    
    </>
  )
}

export default Project