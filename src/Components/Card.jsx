

export default function Card({title, children, id}){

    return(
        <div className="card" id={id}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}