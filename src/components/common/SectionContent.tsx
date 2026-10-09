interface SectionContentProps {
    id?: string;
    className?: string;
    contentId?: string;
    children?: any;
    orangeHrEnabled?: boolean;
    headerClassName?: string;
    headerId?: string;
    headerText?: string;
    subHeaderClassName?: string;
    subHeaderId?: string;
    subHeaderText?: string;
    contentClassName?: string;
}

export default function SectionContent(props: SectionContentProps) {
    return (
        <div className={`section-content-container d-flex flex-column align-items-center px-3 ${props.className ? props.className : ""}`} id={props.id}>
            <span className={`text-center ch1 text-uppercase fw-bold section-content-title ${props.headerClassName ? props.headerClassName : ""}`} id={props.headerId}>{props.headerText ? props.headerText : ""}</span>
            {props.subHeaderText ? <span className={`pt-5 pb-1 fst-italic fw-bold ch4 w-100 justify-content-center text-center ${props.subHeaderClassName ? props.subHeaderClassName : ""}`} id={props.subHeaderId}>{props.subHeaderText ? props.subHeaderText : ""}</span> : null}
            <span className={`pt-2 text-center d-flex justify-content-center align-items-center flex-wrap flex-row col-lg-9 col-xl-7 ${props.contentClassName ? props.contentClassName : ""}`} id={props.contentId}>
                {props.children ? props.children : ""}
            </span>
            {props.orangeHrEnabled
                ?
                <div className="p-4 col-lg-7">
                    <hr className="bg-orange" />
                </div>
                :
                null}
        </div>)
}
