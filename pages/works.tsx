import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png';
import angularDashboard from '../assets/angularDashboard.png';
import doctor from '../assets/doctor.png';
//import table from '../assets/table.png';
//import portfolio from '../assets/portfolio.png';
//import symphony from '../assets/symphony.png';
//import texas from '../assets/texas.png';
//import hp from '../assets/hp.png';


// import { Container } from './styles';

const Works: any = () => {
  return(
<main>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
    <Image src={angularDashboard} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Angular Data Table</div>
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
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Angular Material Table</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">My Portfolio</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Symphony Talent Website</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Texas Health Website</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src={doctor} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Hp Job website</div>
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
