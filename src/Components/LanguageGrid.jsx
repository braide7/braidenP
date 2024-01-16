import GridItem from "./GridItem"

import { LANG_LOGOS } from "../LanguageLogos"

export default function LanguageGrid() {

    return (
        <div id='languages'>
            <h3>Technologies I have worked with:</h3>
            <div id="lang-grid__wrapper">

                {LANG_LOGOS.map((logo) => (
                    <GridItem key={logo.key} title={logo.title} src={logo.src} />
                ))}

            </div>
        </div>
    )
}