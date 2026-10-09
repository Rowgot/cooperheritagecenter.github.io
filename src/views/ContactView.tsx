import BannerImage from 'common/BannerImage';
import SectionContent from 'common/SectionContent';
import Inbox from './InboxMOM';
//import "../styles/contact.css"

function ContactView() {

    return (
        <div className="ContactView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-contact-wide.jpg"} source={"/images/photo-banner-contact.jpg"} altText={"volunteer"} />
                <SectionContent headerText={"Contact Us"} contentClassName={"col-lg-10 col-xl-10"} className={"pt-5 mb-4"}>
                    Fill out the form below to send a message to the Cooper Heritage Center or contact a member of our curatorial team.
                    <br />
                    <br />
                    We regret that we are not able to respond personally to each message, but we encourage visitors to get in touch. All feedback helps our team improve the facility for future guests!
                </SectionContent>
                <Inbox tapBack={() => { }} currentSeason={1} currentEpisode={1} />
            </div>
        </div>
    );
}

export default ContactView;
