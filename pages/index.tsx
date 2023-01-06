import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className='name-section'>
            <h1 className='name'>ABDULRAHMAN AHMED RASHEED</h1>
            <h3 className='job-title'>SOFTWARE ENGINEER</h3>
          </div>
          <div className='social-section'>

          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={twitter} alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={github} alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={linkedin} alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src={instagram} alt="Picture of the author" width={36.03} height={36.03}/></a>
          </div>
        </div>
      </main>
    </div>

  )
}

export default Home
