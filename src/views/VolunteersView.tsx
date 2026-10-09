import BannerImage from 'common/BannerImage';
import Button from 'common/Button';
import SectionContent from 'common/SectionContent';
import React from 'react';

function VolunteersView() {
    React.useEffect(() => { })
    return (
        <div className="VolunteersView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-volunteer-wide.jpg"} source={"/images/photo-banner-volunteer.jpg"} altText={"volunteer"} />
                <SectionContent headerText={"Volunteer"} className={"w-100 pt-5 justify-content-center d-flex text-center align-items-center"} orangeHrEnabled={false} >
                    <span>Thanks to a generous donation from the Petronia Heritage Foundation, the CHC is now able to launch the Apprentice Curator Program!
                        <br />
                        <br />
                        This five-month-long program invites volunteer members to dive into our local culture and regional history, while assisting our curatorial team with extra research and testing the user experience of future exhibit features, like this one:
                        <Button href={"/live-quiz"} buttonText={"Click Here"} className={"my-5 w-100 justify-content-center d-flex"} />
                        If you would like to join the Apprentice Curator Program or learn more about how to help the Cooper Heritage Center, please send us a message using our <a href={"/contact"} className={"non-underlined font-weight-bold"}>Contact Form</a>.
                        <br />
                        <br />
                        If you have already joined our program, click below to access your Apprentice Curator Assignments.
                        <Button href={"/quiz/1"} buttonText={"Apprentice Curator Assignment #1"} className={"cmt-5 w-100 justify-content-center d-flex"} />
                        <Button href={"/quiz/2"} buttonText={"Apprentice Curator Assignment #2"} className={"cmt-5 w-100 justify-content-center d-flex"} />
                        <Button href={"/quiz/3"} buttonText={"Apprentice Curator Assignment #3"} className={"cmt-5 w-100 justify-content-center d-flex"} />
                        <Button href={"/quiz/4"} buttonText={"Apprentice Curator Assignment #4"} className={"cmt-5 w-100 justify-content-center d-flex"} />
                        <Button href={"/quiz/5"} buttonText={"Apprentice Curator Assignment #5"} className={"cmt-5 mb-5 w-100 justify-content-center d-flex"} />
                    </span>
                </SectionContent>
            </div>
        </div>
    );
}

export default VolunteersView;
