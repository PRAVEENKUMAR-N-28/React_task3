import React from 'react'
import './css/Home.css';

import Button from 'react-bootstrap/Button';
import Career from './Career';
import About from './About';
import Contect from './Contect'
const Home = () => {
  return (
    <section id='home'>
        
        
        <div className='con1'>
            <h2 className='title'>Welcome To Home Page</h2>
            <div className="button">
                <Button variant="primary">Get Start</Button>{' '}
                <Button variant="primary" >About Us</Button>{' '}
            </div>
        </div>
        
        <Career />
        <About />
        <Contect />
    </section>
  )
}

export default Home