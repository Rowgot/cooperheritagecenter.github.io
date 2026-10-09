interface BanerImageProps {
    altText?: string;
    source?: string;
    wideSource?: string;
    className?: string;
    outerClassName?: string;
    imgClassName?: string;
    textContent?: string;
    textContentClass?: string;
}

export default function BannerImage(props: BanerImageProps) {
    return (<div className={`w-100 align-items-center d-flex flex-column ${props.outerClassName}`}>
        <div className={`d-flex w-100 justify-content-center ${props.className ? props.className : ""}`} >
            <img alt={props.altText} src={props.source} className={`d-md-none d-flex img-fluid mw-100 ${props.imgClassName || ""}`} />
            <img alt={props.altText} src={props.wideSource} className={`d-none d-md-flex ${props.imgClassName || ""}`} />
        </div>
        {props.textContent ? <div className={`w-100 text-center ${props.textContentClass || ""}`}><span className="max-w-lg pb-1 ch5 w-100">{props.textContent || ""}</span></div> : null}
    </div>)
}
