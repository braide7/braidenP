

export default function ActionLogo({ link, alt, src }) {

    return (

        <div id="action-logo">
            <a href={link} target='_blank'>
                <img src={src} alt={alt}  />
                
            </a>
        </div>
    )
}