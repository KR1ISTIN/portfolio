import React from 'react';
import '../style.css';

const styles = {
 
  resumeHeader: {
    background:'linear-gradient(rgba(72, 213, 206, 0.719), rgb(241, 232, 232)'
  },
  contact: {
    textDecoration:'none',
    color: '#22222B',
    padding:'.2em',
    fontWeight:'bold'
  },
  resumeName: {
    color:'#22222B',
    letterSpacing:'.4em'
  },
  resumeTitles: {
    paddingTop:'1em',
    letterSpacing:'.2em',
    textDecoration:'underline'
  },
  resumeEdu: {
    fontWeight:'bold',
    fontSize: '.9em',
    padding:'.5em'
  },
  projectSection: {
    marginTop:'1em',
    padding:'.6em',
    fontWeight:'bold',
    fontSize: '.9em',
    letterSpacing:'.15em'
  },
 
 
}

export default function Resume() {
  return (
  <div style={{background:'#22222B' }}>
    {/* <div style={{padding:'2%', display:'flex', justifyContent:'center'}}>
      <button className='linkProject'>Download Resume</button>
    </div> */}
    <div style={{background:'	#FAF9F6'}}class="container">
      <div class="row">
        <div style={styles.resumeHeader}class="col-12">
          <div class="container">
            <div class="row">
              <a style={styles.contact} href='#'>Github: KR1ISTIN</a>
            </div>
            <div class="row">
              <a style={styles.contact} href='#'>LinkedIn</a>
            </div>
            <div class="row">
              <a style={styles.contact} href='mailto:kristin.desalme@gmail.com'>kristin.desalme@gmail.com</a>
            </div>
          </div>
          <div class="d-flex flex-row-reverse">
            <h3 style={styles.resumeName}>Kristin De Salme</h3>
          </div>
          <h5 style={{textAlign:'end', letterSpacing:'.1em'}}>Full Stack Web Developer</h5>
        </div>
        <div class="col-4">
          <h5 style={styles.resumeTitles}>
            Skills
          </h5>
            <div style={{padding:'.5em'}}class="container text-center">
              <div  class="row">
                <div class="col">Html</div>
                <div class="col">Css</div>
                <div class="col">Javascript</div>
                <div class="col">Squealize</div>
              </div>
              <div class="row">
                <div class="col">React</div>
                <div class="col">Node</div>
                <div class="col">Express</div>
                <div class="col">NoSQL</div>
              </div>
              <div class="row">
                <div class="col">GQL</div>
                <div class="col">SQL</div>
                <div class="col">jQuery</div>
                <div class="col">OOP</div>
              </div>
              <div class="row">
                <div class="col">Sequelize</div>
                <div class="col">Mongoose</div>
                <div class="col">MongoDB</div>
              </div>
              <div class="row">
                <div class="col">Git</div>
                <div class="col">Handlebars</div>
                <div class="col">PWA</div>
                <div class="col">MVC</div>
              </div>
            </div>   
          {/* <h5 style={styles.resumeTitles}>
            Techincal Skills
          </h5>
            <div style={{padding:'1em'}} class="container text-center">
              <div class="row">
                <div class="col">Express.js</div>
                <div class="col">Node</div>
                <div class="col">Javascript</div>
              </div>
            </div> */}
            <h5 style={styles.resumeTitles}>
              Education
            </h5>
            <div style={{padding:'1em'}} class="container">
              <div class="row">
                <div style={styles.resumeEdu} class="col-12">UTSA July 2023</div>
                <div class="col-12">Full Stack Web Development Bootcamp</div>
                <div style={styles.resumeEdu}class="col-12">Concorde Career College April 2017</div>
                <div class="col-12">Dental Hygiene</div>
                <div style={styles.resumeEdu}class="col-12">Concorde Career College 2014 </div>
                <div class="col-12">Dental Assistant</div>
              </div>
            </div>
        </div>
        <div class="col-6">
          <h5 style={styles.resumeTitles}>Work</h5>
            <p>
            As a backend developer and dental hygienist of seven years, I bring a unique blend of skills, adaptability, and willingness to learn. The transition from oral health care to programming may seem unexpected, but I thrive on challenges, and web development provides the perfect canvas for me to learn and grow every day. I look forward to contributing my diverse experiences and enthusiasm to a new team and making a meaningful impact in the field.
            </p>
            <h5 style={styles.resumeTitles}>
              Projects
            </h5>
            <div class="container">
              <div class="row">
                <div style={styles.projectSection}class="col-12">GitFood.Travel</div>
                <div class="col-12">GitFood.Travel was designed for a traveler looking to find the most luxurious hotels and restaurants in any city. This project was group based group and sharpen our communication skills, resolving merge confilcts and practice working in a agile enviroment.</div>
                <div class="col-12"><a href='https://kr1istin.github.io/GIT-FOOD.Travel/'>https://kr1istin.github.io/GIT-FOOD.Travel/</a></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div style={styles.projectSection}class="col-12">Meal Mappr</div>
                <div class="col-12">Meal Mappr is a app for a user to use all CRUD methods planning out their meals for the the month,day, or week. MySQL, Tailwind, Full Calender.js and Bycrpt were implemented</div>
                <div class="col-12"><a href='https://mealmappr.herokuapp.com'>https://mealmappr.herokuapp.com</a></div>
              </div>
            </div> 
        </div>
      </div>
    </div>
  </div>
  )
}
