
import './App.css';
import Home from './Camponent/Home';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Camponent/css/Header.css';
import { HashLink as Link } from 'react-router-hash-link';
function App() {
  return (
    <div >
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
                <Link to="/">Home</Link>
                <Link to="#career" smooth>Career</Link>
                <Link to="#about" smooth>About Us</Link>
                <Link to="#contect" smooth>Contect Us</Link>
            </div>
           
        </Container>
      </Navbar>
      <Home />
        
    </div>
  );
}

export default App;
