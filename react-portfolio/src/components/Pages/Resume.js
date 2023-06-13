import React from 'react';

const styles = {
  button: {
    alignSelf:'center',
    color:'red'
  },
 
}

export default function Resume() {
  return (
  <div style={{background:'blue', height:'100vh'}}>
    <button style={styles.button}>Download Resume</button>
    <div style={{background:'yellow', height:'100vh'}}class="container">
      <div class="row">
        <div style={{background:'pink'}}class="col-12">
          <div class="container">
            <div style={{background:'red'}}class="row">
              <a href='#'>Github</a>
            </div>
            <div style={{background:'green'}}class="row">
              <a href='#'>LinkedIn</a>
            </div>
            <div style={{background:'blue'}}class="row">
              <a href='#'>Email</a>
            </div>
          </div>
          <div style={{background:'orange'}}class="d-flex flex-row-reverse">
            <h3>Kristin De Salme</h3>
          </div>
          <p style={{textAlign:'end'}}>Full Stack Web Developer</p>
        </div>
        <div style={{background:'orange'}}class="col-4">
          <h6>
            Skills
          </h6>
            <div class="container text-center">
              <div class="row">
                <div class="col">Html</div>
                <div class="col">Css</div>
                <div class="col">Javascript</div>
              </div>
              <div class="row">
                <div class="col">React.js</div>
                <div class="col">Node.js</div>
                <div class="col">Express.js</div>
              </div>
              <div class="row">
                <div class="col">GQL</div>
                <div class="col">Bootstrap</div>
                <div class="col">jQuery</div>
              </div>
              <div class="row">
                <div class="col">MySQL</div>
                <div class="col">Squealize</div>
                <div class="col">MongoDB</div>
              </div>
              <div class="row">
                
                <div class="col">Git</div>
                <div class="col">Command Line</div>
                <div class="col">PWA</div>
              </div>
            </div>   
          <h6>
            Techincal Skills
          </h6>
            <div class="container text-center">
              <div class="row">
                <div class="col">Express.js</div>
                <div class="col">React.js</div>
                <div class="col">Javascript</div>
              </div>
            </div>
        </div>
        <div class="col-6">
          <h6>Work</h6>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod.
            </p>
            <h6>
              Projects
            </h6>
        </div>
      </div>
    </div>
  </div>
  )
}
