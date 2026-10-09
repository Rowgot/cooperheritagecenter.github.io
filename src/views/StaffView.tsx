import BannerImage from 'common/BannerImage';
import Button from 'common/Button';
import SectionContent from 'common/SectionContent';
import React from 'react';

function StaffView() {
    React.useEffect(() => { })
    return (
        <div className="StaffView w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <BannerImage wideSource={"/images/photo-banner-staff-wide.jpg"} source={"/images/photo-banner-staff.jpg"} altText={"staff"} />
                <SectionContent headerText={"Our Staff"} className={"my-5"} headerClassName={"mb-1"} contentClassName={"justify-content-center max-w-lg"}>
                    <StaffPerson
                        photo="photo-staff-1"
                        name="Cecilia Dandridge"
                        position="Executive Director"
                    />
                    <StaffPerson
                        photo="photo-staff-2"
                        name="Danny Carrington"
                        position="Administrative Manager"
                    />
                    <StaffPerson
                        photo="photo-staff-3"
                        name="Hank Forester"
                        position="Curator of Natural Sciences"
                    />
                    <StaffPerson
                        photo="photo-staff-4"
                        name="June Novak"
                        position="Curator of Culture & History"
                    />
                    <StaffPerson
                        photo="photo-staff-5"
                        name="Frances Graves"
                        position="Communications Coordinator"
                    />
                    <StaffPerson
                        photo="photo-staff-6"
                        name="Jerri Kane"
                        position="Education Coordinator"
                    />
                    <StaffPerson
                        photo="photo-staff-7"
                        name="Savannah Lewis"
                        position="Volunteer Outreach Coordinator"
                    />
                    <StaffPerson
                        photo="photo-staff-8"
                        name="Sarah Fowler"
                        position="Tour Guide"
                    />
                    <StaffPerson
                        photo="photo-staff-9"
                        name="Bill Green"
                        position="Maintenance"
                    />
                </SectionContent>
                <Button href={"/contact"} buttonText={"Contact Us"} className={"mb-3"} buttonClassName={"m-5"} />
            </div>
        </div>
    );
}

function StaffPerson(props: { name: string; photo: string; position: string }) {
    return (
        <div className="m-1">
            <img alt={props.photo} src={`/images/${props.photo}.png`} />
            <div className="pt-4 font-weight-bold">{props.name}</div>
            <div className="font-italic">{props.position}</div>
        </div>
    )
}
export default StaffView;
