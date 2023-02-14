import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png'
import javascript from '../../assets/javascript.png'
import angular from '../assets/angular.png'
import reacti from '../assets/reacti.png'
import nodejs from '../assets/nodejs.png'
import redux from '../assets/redux.png'
import ngrx from '../assets/ngrx.png'
import wordpress from '../assets/wordpress.png'
import rxjs from '../assets/rxjs.png'
import typescript from '../assets/typescript.png'
import next from '../assets/next.png'
import aws from '../assets/aws.png'
import sass from '../assets/sass.png'
import mysql from '../assets/mysql.png'
import postgres from '../assets/postgres.png'
import java from '../assets/java.png'
import mongodb from '../assets/mongodb.png'

// import { Container } from './styles';

const Skills: any = () => {
  return(
<div className="skill-set container">

           <div className="content content--mlarge skill-set__flex">
             <ul className="skill-set__list">
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={html} alt="Illustrator"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">HTML5/CSS3</h4>
                       <p className="skill-set__year">10YEARS</p>
                     </div>
                     <p className="small-title small-title--skill skill-set__high">95<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p90 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={javascript} alt="Sketch"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">JAVASCRIPT</h4>
                       <p className="skill-set__year">7YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={typescript}  alt="Abstract"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">TYPESCRIPT</h4>
                       <p className="skill-set__year">4 Yearrs</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={java} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">JAVA</h4>
                       <p className="skill-set__year">1.5 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>

               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={angular} alt="Photoshop"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">ANGULAR</h4>
                       <p className="skill-set__year">3YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={reacti}  alt="Flinto for mac"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">REACT/REACT NATIVE</h4>
                       <p className="skill-set__year">3 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p50 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={next}  alt="Wordpress"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">NEXT JS</h4>
                       <p className="skill-set__year">2 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={nodejs}  alt="Flinto for mac"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">NODE JS</h4>
                       <p className="skill-set__year">3 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p50 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={ngrx}  alt="Flinto for mac"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">NGRX</h4>
                       <p className="skill-set__year">2 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">50<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p50 js-scroll in"></div>
                 </div>
               </li>


             </ul>
             <ul className="skill-set__list">
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={rxjs}  alt="RXJS"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">RXJS</h4>
                       <p className="skill-set__year">2YEARS</p>
                     </div>
                     <p className="small-title small-title--skill skill-set__high">90<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p90 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={redux} alt="Pug"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">REDUX</h4>
                       <p className="skill-set__year">2 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p80 js-scroll in"></div>
                 </div>
               </li>

               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={aws} alt="Sass"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">AWS</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">70<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p70 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={sass} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">SASS</h4>
                       <p className="skill-set__year">2 YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={postgres} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">POSTGRESSQL</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={mysql} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">MY SQL</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={mongodb} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">MONGO DB</h4>
                       <p className="skill-set__year">1YEARS</p>
                     </div>
                     <p className="small-title small-title--skill">60<span className="skill-set__ratio">%</span></p>
                   </div>
                   <div className="skill-set__bar p60 js-scroll in"></div>
                 </div>
               </li>
               <li className="skill-set__item">
                 <div className="skill-set__icon"><Image src={wordpress} alt="Javascript"/></div>
                 <div className="skill-set__detail">
                   <div className="skill-set__meta">
                     <div className="skill-set__name">
                       <h4 className="small-title small-title--skill">WORDPRESS</h4>
                       <p className="skill-set__year">7YEARS</p>
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
