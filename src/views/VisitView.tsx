import BannerImage from 'common/BannerImage';
import Button from 'common/Button';
import SectionContent from 'common/SectionContent';

function VisitView() {
    return (
        <div className="VisitView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-visit-wide.jpg"} source={"/images/photo-banner-visit.jpg"} altText={"Visit"} />
                <SectionContent headerText={"Visit Us"} orangeHrEnabled={false} className={"w-100 pt-5"} contentClassName={"d-flex justify-content-center"}>
                    The Cooper Heritage Center is open
                    <br />
                    Wednesday through Sunday from 10 a.m. to 7 p.m.
                </SectionContent>
                <div className=" section-content-container d-flex flex-column align-items-center px-3 w-100">
                    <div className="pt-5 d-flex justify-content-center flex-col w-100">
                        <div className="border border-dark d-flex flex-row flex-wrap p-4 mt-8 col-lg-7 w-100">
                            <span className="text-center ch1 mb-3 text-uppercase fw-bold section-content-title w-100">Prices</span>
                            <span className="fw-bold ch3 mb-3 w-100 justify-content-center text-center">General Admission: $5</span><br /><br />
                            <span className="fw-bold ch3 mb-3 w-100 justify-content-center text-center">Children under 18, Senior Citizens, and Students with Valid ID: $3</span><br /><br />
                            <span className="fw-bold ch3 mb-3 w-100 justify-content-center text-center">Wednesdays are free!</span>
                            <span className="w-100 mt-2 justify-content-center text-center font-italic">Donations at the door are appreciated but not required.</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5 d-flex justify-content-center flex-col w-100">
                    <div className="d-flex flex-row flex-wrap p-4 mt-8 col-lg-7 w-100">
                        <span className="fw-bold ch4 w-100 justify-content-center text-center">Cooper Heritage Center</span><br /><br />
                        <span className="fw-bold ch4 w-100 justify-content-center text-center">6632 James Street</span><br /><br />
                        <span className="fw-bold ch4 w-100 justify-content-center text-center">Cooper's Rock, WV 26525</span>
                    </div>
                </div>
                <SectionContent orangeHrEnabled={false} className={"w-100"}>
                    The museum is now wheelchair accessible at both the front and rear entrances.
                    <br />
                    <br />
                    Make sure to check out our gift shop at the end of your visit for apparel, replicas of historical artifacts, and samples of authentic Cooper's Rock coal! All CHC merchandise makes perfect gifts for the holiday season!
                </SectionContent>
                <Button href={"/contact"} buttonText={"Contact Us"} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>
    );
}

export default VisitView;
