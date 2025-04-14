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

//projects
import dojoProject from './assets/dojoHome.png'
import projectManager from './assets/projectManager.png'
import invoiceForm from './assets/invoiceForm.png'
import TermTracker from './assets/TermTracker.png'
import ClientScheduler from './assets/ClientScheduler.png'
import TanitiSite from './assets/taniti.png'

//logos
import githubLogo from './assets/github2.png'
import linkedinLogo from './assets/linkedin.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

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

      
        <Card id={cardInfo[0].id} title={cardInfo[0].title} indexNum={0} >
          <p>{cardInfo[0].desc}</p>
          <LanguageGrid ></LanguageGrid>
        </Card>
        <Card id={cardInfo[1].id} title={cardInfo[1].title} indexNum={1}>
          <p>{cardInfo[1].desc}</p>
          <div className="project-wrapper">
          <a href="https://www.igeniusglobal.com/" target='_blank'><img src={iGenius} alt="iGenuis Landing page" /></a>
          </div>
        </Card>
        <Card id={cardInfo[2].id} title={cardInfo[2].title}  indexNum={2}>
          <p>{cardInfo[2].desc}</p>
          <Project src={TermTracker} githubLink='https://github.com/braide7/TermTracker' siteLink='https://term-tracker-app.web.app/' >Term Tracker is a mobile app to help students manage academic terms, courses, and assessments 
          with a clean, intuitive interface. Built with .NET MAUI and utilizing SQLite, this project showcases my full-stack skills in crafting user-focused, cross-platform solutions. More information can be found in the README on GitHub or you can 
          download the APK at the link below</Project>
          <Project src={ClientScheduler} githubLink='https://github.com/braide7/ClientScheduler' >Client Scheduler is a Windows Form application utilizing Entity Core and MySQL. This app manages client appointments and customer data with secure login, 
          dynamic reports, and an intuitive interface. Built with C# and .NET, it uses MySQL to store data, handles times in UTC while displaying in local time. More information and screenshots can be found in the 
          README on GitHub.</Project>
          <Project src={TanitiSite} githubLink='https://github.com/braide7/tanitiSite'  siteLink='https://taniti-site-nu.vercel.app/'>A vibrant, fictional tourism website for the tropical island of Taniti, crafted with HTML, CSS, and JavaScript. 
          Designed with a mobile-first approach, it delivers a seamless and stunning experience across both mobile and desktop devices.</Project>
          <Project src={dojoProject} githubLink='https://github.com/braide7/the-dojo' siteLink='https://thedojosite-74fec.web.app/login'>This site is for team project management. 
          You are able to add new projects, assign to team members, add comments, filter by department, and see who is currently online. This project utilizes React.js as well as Firebase, 
          links to code as well as the hosted site below. </Project>
  
        </Card>

        <Card id={cardInfo[3].id} title={cardInfo[3].title} indexNum={3}>
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
