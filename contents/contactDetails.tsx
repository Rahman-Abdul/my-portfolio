import React from 'react';
import Image from 'next/image';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'

type Props = {}

export default function Contactdetails({}: Props) {
  return (
    <div className='contact'>
      <ul>
        <li className='social'><a href={'tel:+2347036761504'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={phone} alt="Picture of the author" width={36.03} height={36.03}/> <span className='details'>+2347036761504</span></a> </li>
        <li className='social'><a href={'mailto:abdulrahmanahmedrasheed@gmail.com'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={mail} alt="Picture of the author" width={36.03} height={36.03}/><span className='details'>Abdulrahman Ahmed</span></a></li>
        <li className='social'><a href={'https://www.linkedin.com/in/abdulrahman-ahmed-538a05178/'} target={"_blank"} rel={"noreferrer"}><Image className='social-image details' src={linkedin} alt="Picture of the author" width={36.03} height={36.03}/><span className='details'>Abdulrahman Ahmed</span></a></li>
      </ul>
          </div>
  )
}
