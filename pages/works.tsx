import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png'
// import { Container } from './styles';

const Works: any = () => {
  return(
<main>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">my potfolio</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Basade</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">angular material</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">manduu website</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Home Depot</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">angular table</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">interger to roman calculator</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={html} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Doctor table</div>
  </div>
</div>

<div className="clearfix"></div>
</main>
  )
}

export default Works;
