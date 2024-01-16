

import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Card from './Components/Card'
import Section from './Components/Section'
import LanguageGrid from './Components/LanguageGrid.jsx'
import Project from './Components/Project.jsx'
import ContactMe from './Components/ContactMe.jsx'
import ActionLogo from './Components/ActionLogo.jsx'

import iGenius from './assets/iGenuis.png'
import dojoProject from './assets/dojoHome.png'
import projectManager from './assets/projectManager.png'
import githubLogo from './assets/github2.png'
import linkedinLogo from './assets/linkedin.png'

import { CARD_DATA } from './card-data.js'

function App() {
  const cardInfo = CARD_DATA;
  return (
    <>

      <Header />
      <Section/>
      <Main>

      {/* {CARD_DATA.map((card) => (
        <Card key={card.id} id={card.id} title={card.title}>{card.desc}</Card>
      ))} */}

      
        <Card id={cardInfo[0].id} title={cardInfo[0].title} >
          <p>{cardInfo[0].desc}</p>
          <LanguageGrid ></LanguageGrid>
        </Card>
        <Card id={cardInfo[1].id} title={cardInfo[1].title} >
          <p>{cardInfo[1].desc}</p>
          <div className="project-wrapper">
          <a href="https://www.igeniusglobal.com/" target='_blank'><img src={iGenius} alt="iGenuis Landing page" /></a>
          </div>
        </Card>
        <Card id={cardInfo[2].id} title={cardInfo[2].title} >
          <p>{cardInfo[2].desc}</p>
          <Project src={dojoProject} githubLink='https://github.com/braide7/the-dojo' siteLink='https://thedojosite-74fec.web.app/login'>This site is for team project management. You are able to add new projects, assign to team members, add comments, filter by department, and see who is currently online. This project utilizes React.js as well as Firebase, links to code as well as the hosted site below.</Project>
          <Project src={projectManager} githubLink='https://github.com/braide7/projectTrackingApp' siteLink={null}>This app utlizes React.js and Tailwind CSS.

This is a project management app, you can add new projects with a description and a due date. Once added you can edit and add/remove additonal tasks.</Project>
        </Card>

        <Card id={cardInfo[3].id} title={cardInfo[3].title}>
          <ContactMe></ContactMe>
        </Card>
      </Main>
      <footer>
        <ActionLogo link="https://github.com/braide7" alt="github logo" src={githubLogo}/>
        <ActionLogo link="https://www.linkedin.com/in/braidenpedersen/" alt="linkedIn logo" src={linkedinLogo}/>
      </footer>
    </>
  )
}

export default App
