import BannerImage from "common/BannerImage";
import SectionContent from "common/SectionContent";
import Miners1 from "../assets/Miners1.jpg"
import Miners2 from "../assets/Miners2.jpg"
import Miners3 from "../assets/Miners3.jpg"
import Miners4 from "../assets/Miners4.jpg"
import Miners5 from "../assets/Miners5.jpg"

function OralHistoriesView() {
    return (
        <div className="OralHistoriesView w-100 overflow-hidden">
            <SectionContent headerText={"It All Came Crashing Down: Oral Histories of The Strahlenberg Blast"} headerClassName={"col-md-8 col-lg-7 col-xl-6 mb-5 mt-5"} className={"w-100 mb-4"} orangeHrEnabled={false} >
                Roughly thirty years have passed, and the mystery remains unsolved: What was the true cause of the mining fiasco that devastated Cooper’s Rock in 1989? The only facts that are known for certain about the blast are its effect on the community. We have gathered first-person accounts of the incident and its aftershocks to paint a clearer picture of an event that has long been mired in rumor, controversy, misinformation, and local folklore.
                <br />
                <br />
                In addition to audio recordings of interviews with survivors, witnesses, and the families of victims, our immersive new exhibit includes images captured by Strahlenberg company photographer Lloyd Franklin in 1984, which would turn out to be some of the last official images of the Strahlenberg mine taken before the blast.
            </SectionContent>
            <BannerImage textContent={"Waiting on shift change at the Strahlenberg mine. L-R: Davy Newton, Winston Dale, Irving Slokum, James Lee Brawne, Craig Hackle, Morris Grant (standing), Damian Grisham (standing)."}
                textContentClass={"max-w-lg"} className={"max-w-lg mt-5 pb-0"} imgClassName={"w-100"} wideSource={Miners1} source={Miners1} altText={"miners1"} />

            <BannerImage textContent={"End of the day at the main site. L-R: Unidentified, Unidentified, Charles Harper, Christopher Kaminsky, David Trent, Unidentified, Hector Berkiss."}
                textContentClass={"max-w-lg"} className={"max-w-lg mt-5 pb-0"} imgClassName={"w-100"} wideSource={Miners2} source={Miners2} altText={"miners2"} />

            <BannerImage textContent={"Foreman Thomas Eakins surveys the work site."}
                textContentClass={"max-w-lg"} className={"max-w-lg mt-5 pb-0"} imgClassName={"w-100"} wideSource={Miners3} source={Miners3} altText={"miners3"} />

            <BannerImage textContent={"Strahlenberg workers awaiting the start-of-shift whistle. L-R: Mick Reilley, Mark Harper, Joseph Satorsky, David Tedesci, Martin Jones."}
                textContentClass={"max-w-lg"} className={"max-w-lg mt-5 pb-0"} imgClassName={"w-100"} wideSource={Miners4} source={Miners4} altText={"miners4"} />

            <BannerImage textContent={"Union men on the way into the Strahlenberg “pit.” L-R: Norman Lawton, Dwayne Simkins, Unidentified, Unidentified, David Griffith, Patrick McManis, Dalton Kinkaid."}
                textContentClass={"max-w-lg mb-5"} className={"max-w-lg mt-5 pb-0"} imgClassName={"w-100"} wideSource={Miners5} source={Miners5} altText={"miners5"} />
        </div>
    );
}

export default OralHistoriesView;
