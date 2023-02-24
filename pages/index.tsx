import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useDownloader from "react-use-downloader";




const Home: NextPage = () => {

  const {download } =
useDownloader();

const fileUrl = "/Ahmed-Resume.pdf";
const filename = "/Ahmed-Resume.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Abdulrahman</title>
        <meta name="description" content="This portfolio is created with next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className='name-section'>
            <h1 className='name'>ABDULRAHMAN AHMED RASHEED</h1>
            <h3 className='job-title'>SOFTWARE ENGINEER</h3>
          </div>
          <button className='button-home' onClick={() => download(fileUrl, filename)}>DOWNLOAD RESUME</button>
          <div className='social-section'>
          <a href={'tel:+2347036761504'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/phone.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'mailto:abdulrahmanahmedrasheed@gmail.com'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/mail.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://www.linkedin.com/in/abdulrahman-ahmed-538a05178/'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/linkedin.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/github.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://twitter.com/Heircoders?t=RYkLOYZCl8qojhhzmjHjmw&s=09'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/twitter.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://instagram.com/heir_coders?igshid=ZDdkNTZiNTM='} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/instagram.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          </div>

        </div>
      </main>
    </div>

  )
}
';'
export default Home
