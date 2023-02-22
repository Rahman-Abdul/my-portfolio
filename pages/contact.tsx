import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'

const Contact: any = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
            setMessage('')
          }
        })
      }
    return(

        <div className="Formcontain">
        <div className='contact'>
      <ul>
        <li className='social'><a href={'tel:+2347036761504'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={phone} alt="Picture of the author" width={36.03} height={36.03}/> <span className='details'>+2347036761504</span></a> </li>
        <li className='social'><a href={'mailto:abdulrahmanahmedrasheed@gmail.com'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={mail} alt="Picture of the author" width={36.03} height={36.03}/><span className='details'>Abdulrahman Ahmed</span></a></li>
        <li className='social'><a href={'https://www.linkedin.com/in/abdulrahman-ahmed-538a05178/'} target={"_blank"} rel={"noreferrer"}><Image className='social-image details' src={linkedin} alt="Picture of the author" width={36.03} height={36.03}/><span className='details'>Abdulrahman Ahmed</span></a></li>
      </ul>
        </div>
        <div>
        < form className="Formmain" >
        <div className="ForminputGroup" >
          < label className='Formname' htmlFor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className="inputField" />
        </div>
        < div className="ForminputGroup" >
          < label className='Formname' htmlFor='email'>Email</label>
          < input type='email' onChange={(e)=>{setName(e.target.value)}} name='email' className="inputField" />
        </div>
        < div className="ForminputGroup" >
          < label className='Formname' htmlFor='message'>Message</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='message' className="ForminputField" />
        </div>
        < input  className='button-contact' type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </form >
      </div>
      </div>
    )

}

export default Contact;
