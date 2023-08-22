import React from 'react';
import './css/About.css';
import Button from 'react-bootstrap/Button';


const About = () => {
  return (
    <div className='about' id='about'>
        <h2  className='title2'>Wlcome To About Us</h2>
        <div className='about1'>
            <div className="abo">
                <span>About </span><br />
                Get to know more about the team maintaining React Bootstrap. Learn a little history of how, why and when the project started and how you can be a part of it. <br />
                <span>Team</span><br />

                React Bootstrap is maintained by a team of developers on Github. We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you. <br />
                <span>Contributors</span><br />

                We welcome community support with both feature and bug reporting. Please don't hesitate to jump in. Join our growing list of contributors.

            </div>
        </div>
    </div>
  )
}

export default About