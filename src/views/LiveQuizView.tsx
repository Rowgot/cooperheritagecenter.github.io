import Quiz from "components/Quiz/Quiz";
import { useState, useEffect } from "react";
import phenemeChart from "../assets/pheneme-chart.png"
import phenemeChartLg from "../assets/pheneme-chart-lg.png"
import QuizResult from "components/Quiz/QuizResult";
import * as assignment0 from "../components/Quiz/questions/assignment0";
import * as assignment1 from "../components/Quiz/questions/assignment1";
import * as assignment2 from "../components/Quiz/questions/assignment2";
import * as assignment3 from "../components/Quiz/questions/assignment3";
import * as assignment4 from "../components/Quiz/questions/assignment4";
import * as assignment5 from "../components/Quiz/questions/assignment5";

// Static mapping of assignment modules
const assignmentModules = {
    0: assignment0,
    1: assignment1,
    2: assignment2,
    3: assignment3,
    4: assignment4,
    5: assignment5
};

export default function LiveQuizView() {
    const [floatingImage, enableFloatingImage] = useState(false);
    const [quizStage, setQuizStage] = useState("quiz" as "brief" | "quiz" | "result");
    const [isSuccess, setSuccess] = useState(false);
    const id = 0;
    const [quizModule, setQuizModule] = useState<any>(null);

    useEffect(() => {
        // Use static mapping instead of dynamic import
        const module = assignmentModules[id as keyof typeof assignmentModules];
        if (module) {
            setQuizModule(module);
        }
    }, [id]);

    if (!quizModule) return null;
    const { questions, title, meta } = quizModule;

    const onImgClick = () => {
        enableFloatingImage(true);
    }

    const onImgBackClick = () => {
        enableFloatingImage(false);
    }

    const onQuizSubmit = (isSucc: boolean) => {
        if (isSucc) {
            setSuccess(true);
            setQuizStage("result");
        }
        else {
            setQuizStage("result");
        }
    }

    return (
        <div className="LiveQuizView w-100 overflow-hidden">
            {floatingImage
                ?
                <div id={"floating-img-container"}>
                    <div className={"position-absolute w-100 h-100"} onClick={onImgBackClick}></div>
                    <img alt={"phenemeChartLg"} id={"floating-img"} src={phenemeChartLg} className={" max-w-md bg-white shadow-lg rounded"} onClick={onImgClick} />
                </div>
                :
                null}
            {quizStage === "quiz"
                ?
                <Quiz onSubmit={onQuizSubmit} questions={questions} headerText={"Match the Miner's Argot to Correct Pronunciation!"} headerClassName={"mb-5"}>
                    Can you match the Miner's Argot from the Folklore Booklet to their correct pronunciations? Every word in our language is made up of a series of distinct sounds, known as phonemes. Below is a chart of commonly occurring sounds in American English, as well as many other languages!
                        <br />
                    <br />
                    <span className={"font-weight-bold w-100 text-center m-3"}>Click the chart below to enlarge.</span>
                    <div className="w-100"><img alt={"phenemeChart"} src={phenemeChart} className={"max-w-sm w-100"} onClick={onImgClick} /></div>
                </Quiz>
                :
                null}
            {quizStage === "result" ? <QuizResult failureCallback={() => { setQuizStage("quiz"); }} id={id} title={title} meta={meta} isSuccess={isSuccess} /> : null}

        </div>
    )
}