import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png';
import angularDashboard from '../assets/angularDashboard.png'
import doctor from '../assets/doctor.png'
import table from '../assets/table.png'
import portfolio from '../assets/portfolio.png'


// import { Container } from './styles';

const Works: any = () => {
  return(
<main>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
    <Image src={angularDashboard} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">ANgular Data Table</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc"> Angular Doctor EHR Account</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
    <Image src={table} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Angular Material Table</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={portfolio} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">My Portfolio</div>
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
