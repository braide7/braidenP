export default function gridItem({title, src}){

    return(
        <div className="lang-grid__item">
            <img src={src} alt={title} />
            <p>{title}</p>
        </div>
    )
}