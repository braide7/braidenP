

export default function Card({title, children, id, indexNum}){
    let transition = indexNum % 2 === 0 ? "fade-right" : "fade-left";

    console.log(`key = ${indexNum} and transition = ${transition}`)

    return(
        <div className="card" id={id} data-aos={transition} data-aos-duration="1000">
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}