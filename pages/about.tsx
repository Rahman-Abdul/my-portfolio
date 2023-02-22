import React from 'react';
import Image from 'next/image';
import rahman from '../assets/rahman.jpeg';



const About: any = () => {


return(
<main className=''>
<div className='circle-parent circle'>
  <Image className='about-image' src={rahman} alt="Picture of the website"/>
  </div>
<p className='about-p'>Dedicated and hardworking software engineer with a flair for creating elegant solutions in the least amount of time. Developed and design an ecommerce, webapp, customers web portal, documentary, launch websites, and donations webapps for a local charity. Passionate about software architecture and cloud computing. Regular attendee of web and application developer meetups and github, technically talented with the ability to learn and understand faster.</p>

</main>
  )
}

export default About;
