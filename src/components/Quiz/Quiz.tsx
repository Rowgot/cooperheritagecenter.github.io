import Button from "common/Button";
import SectionContent from "common/SectionContent";
import { useState } from "react";

interface QuizProps {
    headerText?: string;
    children?: any;
    headerClassName?: string;
    questions?: any[];
    meta?: any;
    onSubmit: any;
}

export default function Quiz(props: QuizProps) {
    const [correctAns, setCorrectAns] = useState([] as any[]);

    const onSubmit = () => {
        if (correctAns.length === 0 || correctAns.includes(false) || correctAns.includes(undefined))
            props.onSubmit(false);
        else
            props.onSubmit(true);
    }

    const { headerText, headerClassName, children, questions = [] } = props;

    return (
        <div className="Quiz w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <SectionContent className={"w-100"} contentClassName={"col-xl-12 col-lg-12"} orangeHrEnabled={false} >
                    <span className={`d-flex text-center ch2 text-uppercase font-weight-bold section-content-title mt-3 ${headerClassName}`} >{headerText || ""}</span>
                    {children}
                </SectionContent>
                {questions.map((question: any, index: number) => {
                    return <Question key={"Question" + index} {...question} index={index} onSelect={(isCorrect: boolean) => { correctAns[index] = isCorrect; setCorrectAns(correctAns); }} />
                })}
                <Button onClick={onSubmit} buttonText={"Submit"} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>)
}

function Question(props: { picture?: string, question?: string, answers: any[], index: number, onSelect: any }) {
    const [selectedAns, setSelectedAns] = useState("");

    const setAns = (key: string, correct: boolean) => {
        setSelectedAns(key);
        props.onSelect(correct);
    }

    return (
        <div key={"Question" + props.index} className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="p-4 col-lg-7">
                <hr className="bg-orange" />
            </div>
            {props.question ? <div className="fw-bold mb-3">{props.index + 1}. {props.question}</div> : null}
            {props.picture ? <img alt={props.picture} src={`/images/quiz/${props.picture}`} className="quiz-image"></img> : null}
            {props.answers.map((answer: any) => {
                return (
                    <div key={answer.key} className={`fw-bold mb-3 cursor-pointer ${selectedAns === answer.key && "selected-answer"}`} onClick={() => setAns(answer.key, answer.correct)}>
                        {answer.picture ? <div className="flex items-center justify-center">
                            <span>{answer.key}</span>
                            <img alt={answer.picture} src={`/images/quiz/${answer.picture}`} className="ml-4 w-8 h-8" />
                        </div> : null}
                        {answer.key && answer.text ? <span>{answer.key}. {answer.text}</span> : null}
                    </div>
                )
            })}
        </div>)
}