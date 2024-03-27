import React from 'react';
import Bounce from 'react-reveal/Bounce';



export default function About() {
  return (
    <section style={{background:'#22222B', }}>
        <h1 style={{color:'white', letterSpacing:'.2em', padding:'1em'}}>
            <Bounce right cascade>
            About
            </Bounce>
        </h1>
    <div style={{color:'white'}}class="container text-center">
        <div className='animate-charcter'>Stay Positive, WORK hard, make IT happen</div>
        <div class="row">
            <div style={{paddingRight:'35%', fontSize:'1.5em',}}class="col-sm-5 col-md-6">Who Is Kristin?
            </div>
            <div style={{ padding: '8% 0 3% 0', color:'lightseagreen', fontSize:'2.7em'}}class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">A curiosity-driven Back-End Developer and with love of learning</div>
        </div>
        <div class="row">
            <div style={{color:'lightseagreen', letterSpacing:'.2em'}}class="col-sm-6 col-md-5 col-lg-6">S K I L L S: <br></br>
            HTML | CSS3 | Javascript | jQuery | Express.js | Bootstrap | React.js | Node.js| NoSql/SQL | MongoDB/Mongoose | MySQL/Sequelize | GraphQL | OOP | MVC Pattern | Git | Command Line | Communication | Agile/Team Player
            </div>
            <div style={{paddingBottom:'3%'}}class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">As a backend developer and dental hygienist of seven years, I bring a unique blend of skills, adaptability, and willingness to learn. The transition from oral health care to programming may seem unexpected, but I thrive on challenges, and web development provides the perfect canvas for me to learn and grow every day. I look forward to contributing my diverse experiences and enthusiasm to a new team and making a meaningful impact in the field.
            </div>
        </div>
    </div>
    </section>
  );
}
