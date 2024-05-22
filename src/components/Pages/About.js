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
            <div style={{width: 'auto', padding: '8% 0 3% 0', color:'lightseagreen', fontSize:'2.7em'}}class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">A curiosity-driven FullStack Developer and with love of learning</div>
        </div>
        <div class="row">
            <div style={{color:'lightseagreen', letterSpacing:'.2em'}}class="col-sm-6 col-md-5 col-lg-6">S K I L L S: <br></br>
            <div style={{color:'pink'}}>Languages:</div> Java, JavaScript, SQL, HTML5, BASH
            <br></br>
            <br></br>
            <div style={{color:'pink'}}>Frameworks/Libraries: </div>Spring, Spring Boot, Spring Security, Node.js, Express.js, React, Handlebars, Bootstrap, MaterialUI, Bulma, Tailwind
            <br></br>
            <br></br>
            <div style={{color:'pink'}}>Databases:</div> PostGresQL, MySQL, NoSQL, MongoDB, Sequelize, Mongoose
            <br></br>
            <br></br>
            <div style={{color:'pink'}}>Tools/Technologies:</div> RESTful APIs, Maven, Docker, Microservices, JWT, Auth0, OAuth2, Bycrpt, GraphQL, Jest, Object-oriented programming, Heroku, Git, IntelliJ, pgAdmin4, MySQL Workbench, MVC Pattern
            <br></br>
            <br></br>
            <div style={{color:'pink'}}>Project Management:</div> Team Collaboration, Communication, Agile Development, Scrum, Sprint, Kanban, Jira, Github Projects, Wireframming, GithubActions CI/DC Pipeline
            <br></br>
            <br></br>
            <div style={{color:'pink'}}>AWS: </div>IAM, ECS, Elastic Beanstalk, AWS RDS, S3
            <br></br>
            <br></br>
            </div>
            <div style={{fontSize: '1.5em', paddingBottom:'3%', lineHeight: '2em'}}class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">As a FullStack developer and dental hygienist, I bring a unique blend of skills to the table, coupled with a zest for life beyond the screen. When I'm not crafting code or ensuring bright smiles, you'll likely find me on the pickleball court, traveling the globe in search of new adventures, or hanging out with the pup. Embracing challenges is second nature to me, and the transition from oral health care to programming feels like a natural evolution of my passion for problem-solving. I'm excited to bring my diverse experiences, unwavering enthusiasm, and love for learning to a dynamic team, where together, we can create impactful solutions and embark on an exciting journey of growth and innovation.
            </div>
        </div>
    </div>
       
    </section>


  );
}
