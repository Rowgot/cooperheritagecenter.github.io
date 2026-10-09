interface ButtonProps {
    buttonClassName?: string;
    className?: string;
    href?: string;
    buttonText?: string;
    onClick?: any;
    download?: any;
}

export default function Button(props: ButtonProps) {
    return (
        <div className={`${props.className ? props.className : ""}`}>
            {props.download
                ?
                <a download onClick={props.onClick} className={`app-button ${props.buttonClassName ? props.buttonClassName : ""}`} href={props.href}>{props.buttonText ? props.buttonText : ""}</a>
                :
                <a onClick={props.onClick} className={`app-button ${props.buttonClassName ? props.buttonClassName : ""}`} href={props.href}>{props.buttonText ? props.buttonText : ""}</a>
            }
        </div>
    )
}
