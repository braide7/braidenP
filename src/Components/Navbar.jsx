

export default function Navbar({styles}) {


    return (

        <nav className={`${styles}`}>
            <ul>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#projects">PROJECTS</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>

    )
}