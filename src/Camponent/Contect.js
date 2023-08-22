import React from 'react';
import './css/Contect.css';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


const Cantect = () => {
  return (
    <div className='contect' id='contect'>
        <h2  className='title'>Welcome to Career Page</h2>
        
        <div className="social">
            <AiFillLinkedin  className='ic'/>
            <AiFillInstagram className='ic'/>
            <MdEmail className='ic'/>
        </div>
    </div>
  )
}

export default Cantect