import React from 'react';
import { useState } from 'react';

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
        <div className="Formcontainer">
        < form className="Formmain" >
        <div className="ForminputGroup" >
          < label htmlFor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className="inputField" />
        </div>
        < div className="ForminputGroup" >
          < label htmlFor='email'>Email</label>
          < input type='email' onChange={(e)=>{setName(e.target.value)}} name='email' className="ForminputField" />
        </div>
        < div className="ForminputGroup" >
          < label htmlFor='message'>Message</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='message' className="ForminputField" />
        </div>
        < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </form >
      </div>
    )

}

export default Contact;
