import ActionLogo from "./ActionLogo"

import githubLogo from '../assets/github2.png'
import linkLogo from '../assets/link2.png'


export default function Project({ children, src, githubLink, siteLink }) {
    return (
        <div className="project-wrapper">

            {siteLink ? (
                <a href={siteLink} target="_blank">
                    <img src={src} alt="image of project" />
                </a> 
            ):(
               
                    <img src={src} alt="image of project" />
                 )}
            <p>{children}</p>
            <div className="project-action">
            <ActionLogo link={githubLink} alt="github logo" src={githubLogo}/>
            {siteLink && <ActionLogo link={siteLink} alt="link logo" src={linkLogo} />}
            </div>
        </div>
    )
}