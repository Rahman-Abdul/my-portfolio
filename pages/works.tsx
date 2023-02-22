import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png';
import angularDashboard from '../assets/angularDashboard.png';
import doctor from '../assets/doctor.png';
import portfolio from '../assets/portfolio.png';
import symphony from '../assets/symphony.png';
import texas from '../assets/texas.png';
import hp from '../assets/hp.png';
import table from '../assets/table.png';
import splittesting from '../assets/splittesting.png'


// import { Container } from './styles';

const Works: any = () => {
  return(
<main>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer"  href="https://github.com/Rahman-Abdul/Klasha-Angular-Dashboard">
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
    <div className="desc">Patient Record</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer"   href="https://github.com/Rahman-Abdul/Players-Record-Table">
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
    <a target="_blank" rel="noreferrer" href="https://www.symphonytalent.com/">
    <Image src={symphony} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Symphony Talent Website</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://jobs.texashealth.org">
    <Image src={texas} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Texas Website</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank"   rel="noreferrer" href="https://jobs.hp.com/">
    <Image src={hp} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Hp Job website</div>
  </div>
</div>
 cdfd
<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://splittesting.com/">
    <Image src={splittesting} alt="Illustrator" width="600" height="400"/>
    </a>
    <div className="desc">Splittesting</div>
  </div>
</div>

<div className="clearfix"></div>
</main>
  )
}

export default Works;
