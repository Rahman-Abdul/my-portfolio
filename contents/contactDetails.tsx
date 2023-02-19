import React from 'react';
import Image from 'next/image';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

type Props = {}

export default function Contactdetails({}: Props) {
  return (
    <div className='hi'>
      <ul>
        <li><a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={twitter} alt="Picture of the author" width={36.03} height={36.03}/>+2347036761504</a> </li>
        <li><a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={twitter} alt="Picture of the author" width={36.03} height={36.03}/><span>abdulrahmanahmedrasheed@gmail.com</span></a></li>
        <li><a href={'https://www.linkedin.com/in/abdulrahman-ahmed-538a05178/'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={linkedin} alt="Picture of the author" width={36.03} height={36.03}/>Abdulrahman Ahmed</a></li>
      </ul>
          </div>
  )
}
