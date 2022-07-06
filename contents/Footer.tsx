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
          <div className='signature'>
          <p className='sign'>abdul_rahman ahmed</p>
          </div>
            <div className='footer-social-section'>
          <Image className='social-image foot' src={twitter} alt="Picture of the author" width={50.03} height={50.03}/>
        <Image className='social-image foot' src={github} alt="Picture of the author" width={50.03} height={50.03}/>
      <Image className='social-image foot' src={linkedin} alt="Picture of the author" width={50.03} height={50.03}/>
      <Image className='social-image footnpm' src={instagram} alt="Picture of the author" width={50.03} height={50.03}/>
          </div>
          <div className='copy-section'>
        <h3 className='copy'>Copyright @2022</h3>
        </div>
        </section>
    )
}

export default Footer
