import React from 'react';
import "./Navbar.css";
import image from "./Group 1 (1).png"

const Navbar = () => {
  return <div className='navigation'>
    
      <img src={image}/>
       <ul>
         <li>Explore</li>
         <li>Resources</li>
         <li>Create</li>
         <li><button>Login</button></li>
         <li><button>Register</button></li>
     </ul>
  </div>
  
};

export default Navbar;
