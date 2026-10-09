import BannerImage from 'common/BannerImage';
import SectionContent from 'common/SectionContent';
import React from 'react';

function AboutView() {
    React.useEffect(() => { })
    return (
        <div className="AboutView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-about-wide.jpg"} source={"/images/photo-banner-about.jpg"} altText={"About"} />
                <SectionContent headerText={"Our Heritage"} className={"pt-5"} orangeHrEnabled={true}>
                    The Cooper Heritage Center was founded in 1906 as an archive for the maps, journals, and other documents that naturalist Sydney Cooper created during his travels through uncharted land in West Virginia -- land that would come to be known as Cooper’s Rock.
                    <br />
                    <br />
                    Salvaged from Cooper’s possessions by William Flynn, a travel companion of Cooper’s during his youth, the Cooper Archive has since become the cornerstone of West Virginia’s third-largest collection of archival materials. The archive was first housed in the basement of Cooper’s Rock Town Hall, but was moved into a building all its own since 1963.
                    <br />
                    <br />
                    Since then, the Cooper Heritage Center has grown into the greater role of chronicling the defining moments of Cooper’s Rock history. In addition to housing the collected writings of our town’s founder, the museum’s collection has expanded since its establishment to contain other local records, artifacts, and samples of the area’s unique ecosystem as well, thanks to a generous donation from the Petronia Foundation.
                </SectionContent>
                <SectionContent headerText={"Our Founder"} className={"pt-5"} orangeHrEnabled={true}>
                    Sydney Cooper was the explorer and naturalist who put Cooper’s Rock on the map - literally! Born to a barrel-maker and a former schoolteacher in Trenton, New Jersey in 1850, Cooper had a fascination with nature and a longing for travel from a young age. He could often be found poring obsessively over the textbooks and atlases in his mother’s small library while other children played in the cobbled streets outside. After a short period of apprenticing under his father, Cooper left the barrel-making lifestyle and took up an apprenticeship with a local surveyor.
                    <br />
                    <br />
                    Soon after the completion of his training, Cooper accepted a private commission from the Strahlenberg Mining Company to scout for natural resources in uncharted territory at the age of twenty-four. He fell in love with the unnamed land as it was settled by the influx of mining families around him, who inevitably called the area Cooper’s Rock after the man who led them to it. It was here that Sydney Cooper spent the rest of his life.
                    <br />
                    <br />
                    The once-friendly naturalist became intensely reclusive during this period - refusing contact with even his closest friends and companions. Cooper eventually passed away in his mountain-top cabin at the age of fifty-six. With no family to bury him, the town collectively laid him to rest near the Foxfire Caves. The numerous journals and hand-drawn maps that he left behind all indicate that Cooper felt a powerful and ineffable draw towards the location, one that bordered on obsession.
                    <br />
                    <br />
                    Cooper’s Cabin is currently available for touring on Thursdays and Fridays.
                </SectionContent>
                <SectionContent headerText={"Our Town"} orangeHrEnabled={false} className={"mb-5 pt-5"} contentClassName={"mb-5"}>
                    While Cooper first recorded the town’s location in 1873, it was not until 1875 that the first groups of miners came to settle the town of Cooper’s Rock on the payroll of the Strahlenberg Company. While the company came prepared to violently expel any Native peoples that may have already been living on the land, the Shawnee tribes indigenous to the region had long since abandoned the area for unknown reasons - thought to be a combination of foreign airborne diseases preceding the colonists themselves and General Anthony Wayne’s crusade against the Shawnee in nearby Ohio territory throughout the late eighteenth century. Over the next few decades, the coal mining industry in Cooper’s Rock hit its stride, becoming the primary source of income for the majority of the town until it began to decline in the 1970s and catastrophically ended in 1989.
                </SectionContent>
            </div>
        </div>
    );
}

export default AboutView;
