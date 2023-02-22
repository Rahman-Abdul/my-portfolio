import Image from 'next/image'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <section className='footer-section'>
          <div className='signature'>
          <p className='sign'>abdul_rahman ahmed</p>
          </div>
            <div className='footer-social-section'>
            <div className='social-section'>
          <a href={'https://github.com/Rahman-Abdul'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/github.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://www.linkedin.com/in/abdulrahman-ahmed-538a05178/'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/linkedin.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://twitter.com/Heircoders?t=RYkLOYZCl8qojhhzmjHjmw&s=09'} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/twitter.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          <a href={'https://instagram.com/heir_coders?igshid=ZDdkNTZiNTM='} target={"_blank"} rel={"noreferrer"}><Image className='social-image' src="/instagram.png" alt="Picture of the author" width={36.03} height={36.03}/></a>
          </div>
          </div>
          <div className='copy-section'>
        <h3 className='copy'>Copyright 2023 Ahmed Abdulrahman All Rights Reserved</h3>
        </div>
        </section>
    )
}

export default Footer
