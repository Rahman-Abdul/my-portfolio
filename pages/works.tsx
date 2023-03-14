import React from 'react';
import Image from 'next/image';



// import { Container } from './styles';

const Works: any = () => {
  return(
<main>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer"  href="https://github.com/Rahman-Abdul/Klasha-Angular-Dashboard">
    <Image src="/angularDashboard.png" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Angular Data Table</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://github.com/Rahman-Abdul/EHR">
    <Image src="/doctor.png" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Patient Record</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer"   href="https://github.com/Rahman-Abdul/Players-Record-Table">
    <Image src="/TABLE.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Angular Material Table</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
    <Image src="/PORTFOLIO.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">My Portfolio</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://www.symphonytalent.com/">
    <Image src="/symphony.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Symphony Talent Website</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://jobs.texashealth.org">
    <Image src="/TEXAS.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Texas Website</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank"   rel="noreferrer" href="https://jobs.hp.com/">
    <Image src="/HP.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Hp Job website</div>
  </div>
</div>
 cdfd
<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noreferrer" href="https://splittesting.com/">
    <Image src="/split.JPG" alt="Illustrator" width={600} height={400}/>
    </a>
    <div className="desc">Splittesting website</div>
  </div>
</div>

<div className="clearfix"></div>
</main>
  )
}

export default Works;
