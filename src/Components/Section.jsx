import TypingText from "./TypingText";



export default function Section() {
    const text = [
        "Hey, I'm Braiden", 'A full-stack developer with a passion for making attractive and efficient web applications',


    ];

    return (

        <div id="section-wrapper">
            <div id="text-wrap">
                <div className="text">
                    <h1>
                        <TypingText inputText={text[0]}  />
                    </h1>
                    <p data-aos="zoom-in"
                        data-aos-delay="1750"
                        data-aos-duration="1500"> 
                        {text[1]}
                    </p>
                </div>
            </div>
        </div>

    )

}