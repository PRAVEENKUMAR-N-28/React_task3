import React from 'react';
import './css/Career.css';
import Button from 'react-bootstrap/Button';

const Career = () => {
  return (
    <div className='career' id='career'>
        <h2  className='title'>Welcome to Career Page</h2>
        
        <div className="button">
                <Button  variant="dark">Find The Job</Button>{' '}
        </div>
    </div>
  )
}

export default Career