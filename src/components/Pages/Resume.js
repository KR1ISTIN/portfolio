import React from "react";
import "../style.css";

const styles = {
  resumeHeader: {
    background: "linear-gradient(rgba(72, 213, 206, 0.719), rgb(241, 232, 232)",
  },
  contact: {
    textDecoration: "none",
    color: "#22222B",
    padding: ".2em",
    fontWeight: "bold",
  },
  resumeName: {
    color: "#22222B",
    letterSpacing: ".4em",
  },
  
};

const onButtonClick = () => {
  const pdfUrl = "./assets/KristinDeSalme_Resume_24.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "KristinDeSalme_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Resume() {
  return (
    <div style={{ background: "#22222B" }}>
      {/* <div style={{padding:'2%', display:'flex', justifyContent:'center'}}>
      <button className='linkProject'>Download Resume</button>
    </div> */}
      <div style={{display:'flex', justifyContent:'center'}}  id="resumeDownload">
        <button className='linkProject'onClick={onButtonClick} id="resumeButton">
          Download Resume
        </button>
      </div>
      
      <div style={{ background: "	#FAF9F6" }} class="container">
        <div class="row">
          <div style={styles.resumeHeader} class="col-12">
            <div class="container">
              <div class="row">
                <a style={styles.contact} target='_blank' href="https://github.com/KR1ISTIN">
                  Github: KR1ISTIN
                </a>
              </div>
              <div class="row">
                <a style={styles.contact}target='_blank' href="https://www.linkedin.com/in/kristin-desalme/">
                  LinkedIn
                </a>
              </div>
              <div class="row">
                <a
                  style={styles.contact}
                  href="mailto:kristin.desalme@gmail.com"
                >
                  kristin.desalme@gmail.com
                </a>
              </div>
            </div>
            <div class="d-flex flex-row-reverse">
              <h3 style={styles.resumeName}>Kristin De Salme</h3>
            </div>
            <h5 style={{ textAlign: "end", letterSpacing: ".1em" }}>
              Full Stack Web Developer
            </h5>
          </div>

          <div class="container text-center">
            <div class="row">
              <div class="col-sm-12">As a FullStack developer and dental hygienist, I offer excellent communication and teamwork skills, along with a keen eagerness and willingness to learn on this journey. The transition from oral health care to programming may seem unexpected, but I thrive on challenges, and web development provides the perfect canvas. I look forward to contributing my diverse experiences and enthusiasm to a new team and making a meaningful impact in the field.</div>
            </div>
            <h5 style={{padding:'1em',letterSpacing:'.5em'}}>Techincal Skills</h5>
            <div class="row">
              <div class="col-sm-12"><strong>Languages:</strong> Java, JavaScript, SQL, HTML5, BASH</div>
              <p /> 
              <div class="col-sm-12"><strong>Frameworks/Libraries: </strong>Spring, Spring Boot, Spring Security, Node.js, Express.js, React, Handlebars, Bootstrap, MaterialUI, Bulma, Tailwind</div>
              <p />
              <div class="col-sm-12"><strong>Databases:</strong> PostGresQL, MySQL, NoSQL, MongoDB, Sequelize, Mongoose <br /></div>
              <p />
              <div class="col-sm-12"><strong>Tools/Technologies: </strong>RESTful APIs, Maven, Docker, Microservices, JWT, Auth0, OAuth2, Bycrpt, GraphQL, Jest, Object-oriented programming, Heroku, Git, IntelliJ, pgAdmin4, MySQL Workbench, MVC Pattern<br /></div>
              <p />
              <div class="col-sm-12"><strong>Project Management:</strong> Team Collaboration, Communication, Agile Development, Scrum, Sprint, Kanban, Jira, Github Projects, Wireframming, GithubActions CI/DC Pipeline</div>
              <p />
              <div class="col-sm-12"><strong>AWS:</strong> IAM, ECS, Elastic Beanstalk, AWS RDS, S3</div></div>
            
            <h5 style={{paddingTop:'1em', letterSpacing:'.5em'}}>Experience</h5>
            <div class="row">
              <div style={{padding:'1em'}}class="col-sm-12"> <strong>ARP Roofing and Remodeling: Backend Developer <br />2024-Present<br /></strong>Contracted to create an app that is a central source for customer related data. 
                <div style={{paddingTop:'1em'}}class="row">
                  <div class="col-sm-4"><strong>Key Accomplishments:</strong></div>
                  <div class="col-sm-8">
                    <ul style={{textAlign:'start'}}>
                        <li>
                        <em>Reduced</em> latency in lead creation by enabling sales reps to quickly input leads on the go
                        </li>
                        <li>
                        <em>Effectively</em> created a central customer MySQL database with access for customer manipulation
                        </li>
                        {/* <li> */}
                        {/* <em>Reduced operational debt</em> by integrating multiple systems together
                        </li>
                        <li>
                        <em>Successfully</em> implemented user authentication with Bycrpt, JWT, Sessions, OAuth2
                        </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="row">
              <div style={{padding:'1em'}}class="col-sm-12"> <strong>HelloCure: FullStack Developer <br />2023-Present<br /></strong>Volunteering to help a childhood cancer nonprofit. Built a key-single page featuring update operations, database consultation and implementation, and mentoring in Git versioning control,  and maintenance in code base. 
                <div style={{paddingTop:'1em'}}class="row">
                  <div class="col-sm-4"><strong>Key Accomplishments:</strong></div>
                  <div class="col-sm-8">
                    <ul style={{textAlign:'start'}}>
                        <li>
                        <em>Collaborated</em> with team to refine database architecture, ensuring <em>efficiency</em>
                        </li>
                        <li>
                        <em>Successfully</em> trained my partner in Git versioning control, fostering <em>collaborative</em> and efficient development environments
                        </li>
                        <li>
                        <em>Successfully</em> implemented Update operations using Django and Python for user implementation
                        </li>
                        <li>
                        <em>Enhancing</em> cleanliness in code base by addressing errors, will be adding test units
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h5 style={{padding:'1em', letterSpacing:'.5em'}}>Projects</h5>
            <div class="row">
            <div class="col-sm-12"> <h6><strong>Yard Gems</strong><br></br><a style={{color:'black'}}href='https://yardgems-15b0faee737f.herokuapp.com/'>Project Link</a><br></br><a style={{color:'black'}} href='https://github.com/Omar4589/YardGems'> Github Link</a>
              <br />A team project, utilizing the MERN Stack. Allowing users to search and post garage sales</h6>
              <div class="row">
                <div class="col-sm-4"><strong>Role: FullStack Development and Project Management</strong>	Implemented React Google Maps API, Models, GraphQL, Routes for CRUD 	
                  both front and backend, secure Login/Logout functionality, partial implementation UI design, Scrum Master</div>
                <div class="col-sm-8">	
                  <strong>Tools/Technologies:</strong> React, React Router DOM, Heroku, Mongoose, JavaScript,
                  React Google Maps API, GraphQL, MaterialUI, Express.js, Node.js, Apollo
                  Server, JWT, Bycrpt, HTML, CSS, Team Collaboration, Agile Development,
                  Kanban, Scrum, Paired Programming, Git, Github Projects, Wireframe
                </div>
              </div>
            </div>
            
          </div>

          <div class="row">
          <div class="col-sm-12"> <h6><strong>Meal Mappr</strong><br></br><a style={{color:'black'}} href='https://mealmappr.herokuapp.com/'>Project Link</a><br></br><a style={{color:'black'}}href='https://github.com/Rolyat512/MealMappr'> Github Link</a>
            <br></br>MealMappr, a team project, that allows access for users to manage their personalized meal plans
            </h6>
            <div class="row">
              <div class="col-sm-4"><strong>Role: FullStack Development and Project Management</strong>	Implemented Models, Routes for CRUD both front and backend, Login/Logout 				functionality , Scrum Master, UI design for modals </div>
              <div class="col-sm-8">	
                <strong>Tools/Technologies:</strong> Heroku, HTML, JavaScript, Node, Express, Sequelize, 			Handlebars, TailWind, Full Calendar, Bycrpt, Team Collaboration, Agile 			Development, KanBan, Scrum, Paired Programming, Git, Github Projects, 			Wireframe 
              </div>
            </div>
          </div>
          </div>
          <h5 style={{padding:'1em', letterSpacing:'.5em'}}>Education</h5>
          <div class="row">
            <div style={{paddingBottom:'1.5em'}}class="col-sm-12"><h6>Certificate, Master Java, Spring 6 and Spring Boot 3 with JDBC, JPA, 
            Security, Docker and Microservices with Telusko</h6>
          A 42-hour course in mastering Java, Spring, Spring Boot, JPA, AOP, with the addition of Docker and Microservices<br /> May 2024
            </div> 
            <div style={{paddingBottom:'1.5em'}}class="col-sm-12"><h6>Certificate, FullStack Web Development: UTSA </h6>
            A 24-week, project driven course, in FullStack JavaScript Web Development/MERN STACK
            <br></br> July 2023
            </div>
            <div style={{paddingBottom:'1.5em'}}class="col-sm-12"><h6>Associate, Dental Hygiene: Concorde Career College</h6>
              A 18-month accelerated program, focusing on oral hygiene and clinical care
              <br></br> April 2017
            </div>
          </div>
        </div>
    
        
          
        </div>
      </div>
    </div>
  );
}
