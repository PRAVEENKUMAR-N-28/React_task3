import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/Header.css'
const Header = () => {
  return (
    <Navbar className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap

          </Navbar.Brand>
          
            <div className='link'>
                <a href="#home">Home</a>
                <a href="#link">Career</a>
                <a href="#home">About</a>
                <a href="#link">contect Us</a>
            </div>
           
        </Container>
      </Navbar>
  )
}

export default Header