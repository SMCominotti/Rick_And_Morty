import React from 'react'
import stel from '../Image/Cartoon2.jpeg'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <h2>Hi! I am Stella</h2>
      <p>
      Hello! my name is Stella Maris! 
        I define myself as a very enthusiastic person. 
        I am passionate about everything I do.
        I am curious, and always want to learn and grow personally and professionally.
        I am proactive.
        I like working in a team, meeting different people, learning from them, and contributing what I know. But I have no problem working alone either.
        I have done many things throughout my life, in different areas, that aren’t reflected here because it is oriented to the IT sector in which I am quite new.
        I am currently training in programming and studying English, to perfect myself...
        I thank you in advance for your interest and the time you took to read this about me... have a nice day!
      </p>
      <img src={stel} alt='Stella Maris' width="200px"/>
    </div>
  )
}


export default About;
