import BannerImage from 'common/BannerImage';
import Button from 'common/Button';
import SectionContent from 'common/SectionContent';

function ExhibitView() {
    return (
        <div className="ExhibitView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-exhibits-wide.jpg"} source={"/images/photo-banner-exhibits.jpg"} altText={"Exhibits"} />
                <SectionContent headerText={"Permanent Exhibits"} subHeaderText={"Sydney Cooper: An Explorer’s Life, Explored"} subHeaderClassName={"pb-4"} className={"w-100 pt-5"} orangeHrEnabled={false} >
                    While Cooper’s notes on the region are the informational cornerstone of the CHC, little focus has been placed on the man himself until recently. A compilation of Cooper’s more personal documents paints the portrait of an intelligent but troubled man who entered a sharp state of mental decline in the final years of his life. Interspersed with years of journals and drawings expressing Cooper’s fascination with the Cooper’s Rock area are more depressed and frantic private notes that often veer into incomprehensibility, particularly towards the end of his life. This intimate look into the journals of Sydney Cooper reveals the man behind the myth, for better and for worse.
                    <br />
                    <br />
                    Sydney Cooper’s cabin, relocated to museum grounds in 1954, is available for tours from 2 p.m. to 4 p.m., Thursday through Friday.
                </SectionContent>
                <SectionContent subHeaderText={"Fluorescent Flora and Freaky Fauna: The Natural History of Cooper’s Rock"} subHeaderClassName={"pb-4"} className={"w-100 pt-0"} orangeHrEnabled={false} >
                    The Cooper’s Rock area is little known to the American mainstream but is famous within scientific communities for the unusual biological variations present in much of the region’s plant life, weather patterns, and animal life. This exhibit allows visitors the closest possible look at Cooper’s Rock - pull up a microscope and start investigating!
                </SectionContent>
                <SectionContent subHeaderText={"An Interactive Tour of Foxfire Cave and Its Paintings"} subHeaderClassName={"pb-4"} className={"w-100 pt-0"} orangeHrEnabled={false} >
                    Join one of our licensed tour guides for an adventure into the depths of a natural marvel. The origins and purposes of the ancient illustrations drawn throughout Foxfire Cave are hotly debated to this day. But nobody can disagree on the mysterious beauty of the illustrations themselves, or of the pale blue light that illuminates them as it emits naturally from the surrounding rock. No flashlights required! Sturdy shoes are strongly recommended.
                </SectionContent>
                <SectionContent subHeaderText={"Rock ‘n Coal Lifestyle: A Day in the Life of a Mid-Century Miner"} subHeaderClassName={"pb-4"} className={"w-100 pt-0"} orangeHrEnabled={false} >
                    The cabin home of Randolph Leroy Boggs was donated by his family after his death in 1941 and is currently available for observation in its original condition. Located on the outskirts of the area used for dumping overburden, or the sediment removed from the seams during the mining process, the cabin was relocated to the museum’s grounds in 1957. Throughout Boggs’ home are illustrated descriptions of his life as a miner, single parent, and amateur taxidermist.
                </SectionContent>
                <span className="pt-5 pb-1 font-weight-bold ch4 w-100 justify-content-center text-center"><a href="/oral-histories" className={"non-underlined"}><span className={"font-italic underlined"}>It All Came Crashing Down: Oral Histories of The Strahlenberg Blast</span><span className={"text-orange"}>&nbsp; New!</span></a></span>
                <br /><br />
                <SectionContent className={"w-100 pt-0"} orangeHrEnabled={false} >
                    Roughly thirty years have passed, and the mystery remains unsolved: What was the true cause of the mining fiasco that devastated Cooper’s Rock in 1989? The only facts that are known for certain about the blast are its aftereffects on the community. We have gathered first-person accounts of the incident and its aftershocks to paint a clearer picture of an event that has long been mired in rumor, controversy, misinformation, and local folklore. Experience these accounts in our immersive new exhibit that features audio recordings of interviews with survivors, witnesses, and the families of the loved ones who didn’t make it out of the mine that fateful day.
                </SectionContent>
                <BannerImage className={"cp-5 my-5"} wideSource={"/images/miners.png"} source={"/images/miners.png"} altText={"miners"} />
                <SectionContent headerText={"Temporary Installations"} subHeaderText={"Catching the Drift: Medical Accounts of the Chthonic Dementia Epidemic"} subHeaderClassName={"pb-4"} className={"w-100"} orangeHrEnabled={false} >
                    The journals of Dr. Jonathan “Quinine Jimmy” Young, who spent over forty years attending to the medical needs of local miners, contain volumes of notes on a regionally-specific neurodegenerative condition common to Cooper’s Rock known as chthonic dementia (or simply as “drift” among locals). Documenting Dr. Young’s mission to have the illness recognized by the greater medical community, this temporary installation includes transcripts of the interviews he conducted with those afflicted, the miners’ own descriptions of their strange symptoms, and medical illustrations by Dr. Young.
                </SectionContent>
                <SectionContent subHeaderText={"The Warped Mammalian: Sculptures by Locally Born Artist Sarah Quetawah"} subHeaderClassName={"pb-4"} className={"w-100 pt-0"} orangeHrEnabled={false} >
                    Although Sarah Quetawah currently resides with her family in Toronto, the influence of her childhood in Cooper’s Rock shines through in much of her artwork. Her LED-illuminated translucent renderings of two-headed deer grazing while simultaneously gazing towards the viewer take deep inspiration from local folklore and Quetawah’s own experiences roaming the nearby forests as an imaginative teenager.
                </SectionContent>
                <BannerImage className={"cp-5 my-5"} wideSource={"/images/fossils.png"} source={"/images/fossils.png"} altText={"fossils"} />
                <SectionContent headerText={"Archives"} className={"w-100 pb-5"} orangeHrEnabled={false} >
                    In addition to the permanent on-view collection, the CHC maintains an archive of over a century’s worth of additional documents and images relating to Cooper’s Rock and the surrounding area. This catalog is a valuable resource for those researching regional traditions, genealogy, and industry. Access is granted on a case-by-case basis.
                </SectionContent>
                <Button href={"/contact"} buttonText={"Contact Us"} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>
    );
}

export default ExhibitView;
