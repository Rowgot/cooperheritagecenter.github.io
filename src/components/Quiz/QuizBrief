import Button from "common/Button";
import SectionContent from "common/SectionContent";

interface QuizBriefProps {
    onNext: any;
    assignmentNumber: number;
}

export default function QuizBrief(props: QuizBriefProps) {
    return (
        <div className="Quiz w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <SectionContent headerText={`Apprentice Curator Assignment #${props.assignmentNumber}`} className={"w-100"} headerClassName={"mt-5 mb-3"} orangeHrEnabled={false} >
                    Welcome to your Apprentice Curator Assignment!<br /><br />We at the Cooper Heritage Center aim to create immersive learning experiences for our visitors, and our new interactive quizzes will become a regular feature once we have finished testing their content.<br /><br />Please complete the following quiz to the best of your ability so we can gauge its difficulty before we introduce it to the public.<br /><br />Upon successful completion, you will receive access to unreleased content from our archives that didn’t find a place in our newest exhibit, “It All Came Crashing Down: Oral Histories of The Strahlenberg Blast.”<br /><br />We appreciate your help!
                </SectionContent>
                <Button onClick={props.onNext} buttonText={"Next"} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>)
}
