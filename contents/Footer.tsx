import Image from 'next/image'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'


interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <section className='footer-section'>
            <p className='sign'>abdul_rahman ahmed</p>
            <div className='footer-social-section'>
          <Image className='social-image' src={twitter} alt="Picture of the author" width={50.03} height={50.03}/>
        <Image className='social-image' src={github} alt="Picture of the author" width={50.03} height={50.03}/>
      <Image className='social-image' src={linkedin} alt="Picture of the author" width={50.03} height={50.03}/>
      <Image className='social-image' src={instagram} alt="Picture of the author" width={50.03} height={50.03}/>
          </div>
          <div>
        <p>Copyright @2022 </p>
        </div>
        </section>
    )
}

export default Footer
