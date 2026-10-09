import Quiz from "components/Quiz/Quiz";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizBrief from "components/Quiz/QuizBrief";
import PasswordProtected from "components/Quiz/PasswordProtected";
import QuizResult from "components/Quiz/QuizResult";

export default function QuizView() {
    const [quizStage, setQuizStage] = useState("brief" as "brief" | "quiz" | "result");
    const [isSuccess, setSuccess] = useState(false);
    const [quizData, setQuizData] = useState<{ questions: any; title: string; meta: any; customComponent?: string; subtitle?: string } | null>(null);
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id, 10) : undefined;

    useEffect(() => {
        async function loadQuiz() {
            if (numericId === undefined) return;
            
            try {
                const module = await import(`../components/Quiz/questions/assignment${numericId}.tsx`);
                setQuizData(module);
            } catch (error) {
                console.error('Error loading quiz:', error);
            }
        }
        
        loadQuiz();
    }, [numericId]);

    const onQuizSubmit = (isSucc: boolean) => {
        if(isSucc){
            setSuccess(true);
            setQuizStage("result");
        }
        else{
            setQuizStage("result");
        }
    }

    if (!numericId) {
        return <div>Quiz not found</div>;
    }

    if (!quizData) {
        return <div>Loading quiz...</div>;
    }

    const { questions, title, meta } = quizData;

    return (
        <div className="QuizView w-100 overflow-hidden">
            <PasswordProtected type={"quiz"} id={numericId} headerText="Enter your Password:" enableEmail={true} onSubmit={() => { }}>
                {quizStage === "quiz" ? <Quiz onSubmit={onQuizSubmit} questions={questions} headerText={title} headerClassName={"ch5"} /> : null}
                {quizStage === "brief" ? <QuizBrief assignmentNumber={numericId} onNext={() => { setQuizStage("quiz"); }} /> : null}
                {quizStage === "result" ? <QuizResult failureCallback={() => { setQuizStage("quiz"); }} id={numericId} title={title} meta={meta} isSuccess={isSuccess} /> : null}
            </PasswordProtected>
        </div>
    );
}
