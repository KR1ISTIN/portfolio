import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default function About() {
  return (
    <div style={{background:'#22222B', height:"100vh"}}>
        <h1 style={{color:'white', letterSpacing:'.2em', padding:'1em'}}>
            <Bounce right cascade>
            About
            </Bounce>
        </h1>
    <div style={{color:'white'}}class="container text-center">
    <div className='animate-charcter'>Stay Positive, WORK hard, make IT happen</div>
        <div class="row">
            <div style={{ paddingRight:'35%', fontSize:'1.5em',}}class="col-sm-5 col-md-6">Who Is Kristin?</div>
            
            <div style={{ padding: '8% 0 3% 0', color:'lightseagreen', fontSize:'2.7em'}}class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">A curiosity-driven Front-End Developer with design chops</div>
        </div>
        <div class="row">
            <div style={{color:'lightseagreen', letterSpacing:'.2em'}}class="col-sm-6 col-md-5 col-lg-6">S K I L L S: <br></br>
            HTML | CSS3 | Javascript | jQuery | Express.js | Bootstrap | React.js | Node.js| Database Theory | MongoDB | MySQL | Git | Command Line
            </div>
            <div style={{paddingBottom:'3%'}}class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s Laws Of Simplicity, I agree that less is more.<br></br><br></br>
            I have a BA in Multimedia Design from Curtin University 🇦🇺, a Certificate of Web Development Immersive from Juno College (Formerly HackerYou) 🇨🇦, (and an Advanced Scuba Diving License from PADI 🇵🇭!)<br></br><br></br>
            I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. Currently solving deceptively simple problems at UsePastel.Com. I'm not available for any freelance work, but feel free to reach out and say hello! I promise I don't bite
            </div>
        </div>
    </div>

    </div>
  );
}
