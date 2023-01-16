import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png'

// import { Container } from './styles';

const Skills: any = () => {
  return(
<div className="skill-set container">

           <div className="content content--mlarge skill-set__flex">
             <ul className="skill-set__list">
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Illustrator"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Illustrator</h4>
                       <p className="skill-set__year">3YEARS</p>
                     </div>
                     <p className="small-title small-title--skill skill-set__high">90<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p90 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Sketch"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Sketch</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Abstract"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Abstract</h4>
                       <p className="skill-set__year">HALF A YEAR</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html} width={800}
        height={500} alt="Photoshop"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Photoshop</h4>
                       <p className="skill-set__year">3YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Flinto for mac"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Flinto for mac</h4>
                       <p className="skill-set__year">2MONTHS</p>
                     </div>
                     <p className="small-title small-title--skill">50<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p50 js-scroll in"></div>
                 </div>
               </li>
             </ul>
             <ul className="skill-set__list">
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="HTML/CSS"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">HTML/CSS</h4>
                       <p className="skill-set__year">2YEARS</p>
                     </div>
                     <p className="small-title small-title--skill skill-set__high">90<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p90 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Pug"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Pug</h4>
                       <p className="skill-set__year">3MONTHS</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Wordpress"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Wordpress</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html}  width={800}
        height={500} alt="Sass"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Sass</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html} width={800}
        height={500} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">Javascript</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
  )
}


export default Skills;
