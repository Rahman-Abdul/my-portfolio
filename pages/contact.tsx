import React from 'react';
import { useState } from 'react';

const Contact: any = () => {

    return(
        <div className={styles.container}>
  < form className="smain" >
  <formGroup className="inputGroup" >
    < label htmlFor='name'>Name</label>
    < input type='text' name='name' className={styles.inputField} />
  </formGroup>
  < formGroup className={styles.inputGroup} >
    < label htmlFor='email'>Email</label>
    < input type='email' name='email' className={styles.inputField} />
  </formGroup>
  < formGroup className={styles.inputGroup} >
    < label htmlFor='message'>Message</label>
    < input type='text' name='message' className={styles.inputField} />
  </formGroup>
  < input type='submit'/>
  </form >
</div>
    )

}

export default Contact;
