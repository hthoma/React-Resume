import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import ResumeDownloads from './ResumeDownloads';


const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  const projectData = props.jsonObj.projects;
  // console.log(profileData)
  return (
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                </div>
                <div className="inner" style={{marginTop:'10px', paddingTop: '5px',marginBottom: '-10px',}}>
                  <ResumeDownloads/>
                </div>
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />
                  <Education educationData={educationData} />
                  <Skills skillsData={skillsData} />
                  <Work workData={workData}/>
                  <Projects projectData={projectData}/>
                </div>
              </main>
            </div>


          </div>



    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
