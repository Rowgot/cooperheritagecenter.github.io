import Button from "common/Button";
import SectionContent from "common/SectionContent";

interface QuizResultProps {
    meta: any;
    isSuccess: boolean;
    failureCallback: any;
    id: number;
    title: string;
}

export default function QuizResult(props: QuizResultProps) {
    const { isSuccess, failureCallback, meta, id, title } = props;
    return (
        <div className="Quiz w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <SectionContent contentClassName={"flex-column"} className={"w-100"} orangeHrEnabled={false} >
                    <div className={`d-flex flex-column align-items-center text-center ch1 text-uppercase fw-bold section-content-title my-5`} >{title}</div>
                    <div className={` d-flex flex-column align-items-center text-center h1 fw-bold section-content-title my-4 fst-italic`} >
                        {isSuccess ? meta.successTitle :meta.failTitle }</div>
                    {isSuccess ? meta.successText : meta.failText}
                </SectionContent>
                <Button onClick={!isSuccess && failureCallback} href={isSuccess ? `/${meta.successButtonRoute.name}${id ? '/' + id : ''}` : undefined} buttonText={isSuccess ? meta.successButtonText : meta.failButtonText} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>)
}
