import BannerImage from "common/BannerImage";
import Button from "common/Button";
import SectionContent from "common/SectionContent";

const homeDidYouKnowFacts = [
    'Cooper’s Rock is nationally recognized for its low volume of reported crimes compared to other towns of its size. Contrary to popular local legend, that implies Cooper’s Rock is one of the safest towns in America!',
    'When Sydney Cooper first explored the wild land that would become Cooper’s Rock, there was little evidence that humans had settled permanently in the area, though the surrounding area had been populated for centuries. Historians disagree on what may have caused this anomaly.',
    'Visiting hikers can find beautiful wildlife and scenic vistas at every turn of our forest trails, which are regularly maintained by attentive rangers. Our rangers ask that hikers not leave the designated trails, as it is almost impossible to hear cries for help in the dense brush.',
    'Birdwatchers can expect to hear a call very similar to the common barn owl on the outskirts of Cooper’s Rock, but the call does not come from an owl at all. ',
    'The Strahlenberg Lodestone was recovered from the wreckage of the 1989 Mine Blast by a rescue worker who graciously donated it to our collection. Its magnetic properties can produce uneasiness in sensitive individuals, so approach with caution on your next visit to our natural history wing.',
    'Pepperoni rolls are a popular West Virginian snack invented in the 1920s as an easy lunch for coal miners. The only museum facility in the country to sell them is our very own Cooper Heritage Center!',
    'Cooper’s Rock takes pride in its production of local honey, which is almost black in color due to bee pollination from native poplar trees. Not only is this honey said to help with allergies, but it’s also rumored to produce a deep sleep in children.',
    'The oldest freestanding structure in Cooper’s Rock, known simply as “Cabin Crypt,” is said to be one of the most haunted buildings in West Virginia. Touring hours are from 2 to 4 p.m., Wednesday through Friday.',
    'Cooper’s Rock was the site of the second-to-last public hanging in West Virginia in early 1897. The offender was convicted for crimes that were, unfortunately, redacted from public record except for one reference to “crimes of insanity.”',
    'Cooper’s Rock is locally notable for its high concentration of bustling nocturnal wildlife. Residents have grown accustomed to the unidentified noises outside their windows as they fall asleep, but visitors can find high-quality earplugs at any shop in town.',
    'Visitors interested in theater can attend one of the bi-annual reenactments at the Cooper Community Playhouse. Check with the box office to see when their next recreation of the 1989 Strahlenberg Miner’s Union Meeting or the 1897 Public Hanging of a Madman is showing.'
]

function HomeView() {


    return (
        <div className="HomeView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-home-wide.jpg"} source={"/images/photo-banner-home.jpg"} altText={"Home"} />
                <SectionContent orangeHrEnabled={true} className={"pt-5"} headerText={"Welcome to the Cooper Heritage Center!"} >
                    Cooper’s Rock is a small town with a big history. Since its founding in 1906, the Cooper Heritage Center has striven to educate the public about the cultural and natural history of the area. We hope that nearby residents and out-of-towners alike can form a better understanding of our community by visiting our extensive collections.
                    <br />
                    <br />
                    Come visit us to tap into the region’s most abundant natural resource of all: knowledge.
                </SectionContent>
                <div className="pt-5 section-content-container d-flex flex-column align-items-center px-3">
                    <span className="text-center ch1 text-uppercase font-weight-bold section-content-title">Cooper’s rock fun facts!</span>
                    <div className="pt-5 d-flex justify-content-center flex-col">
                        <div className="border border-dark d-flex flex-row flex-wrap p-4 mt-8 col-lg-7 w-100">
                            <span className="font-weight-bold h2 font-italic mb-2 w-100 justify-content-center text-center">Did you know?</span>
                            <span className="w-100 mt-2 justify-content-center text-center">{homeDidYouKnowFacts[Math.floor(Math.random() * homeDidYouKnowFacts.length)]}</span>
                        </div>
                    </div>
                </div>
                <Button href={"/contact"} buttonText={"Contact Us"} className={"m-3"} buttonClassName={"m-5"} />
            </div>
        </div>
    );
}

export default HomeView;
