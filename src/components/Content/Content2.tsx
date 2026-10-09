import BannerImage from "common/BannerImage";
import MinePhoto1 from "../../assets/MinePhoto1.jpg"
import MinePhoto2 from "../../assets/MinePhoto2.jpg"
import MinePhoto3 from "../../assets/MinePhoto3.jpg"

export function Content() {
    return (<div className={"d-flex flex-column align-items-center"}>
        <div className="m-5 text-uppercase text-center fw-bold ch2">Mine Photos</div>
        <BannerImage imgClassName={"col-10"} wideSource={MinePhoto1} source={MinePhoto1} altText={"MinePhoto1"} />
        <BannerImage imgClassName={"col-10"} wideSource={MinePhoto2} source={MinePhoto2} altText={"MinePhoto2"} />
        <BannerImage imgClassName={"col-10 pb-5"} wideSource={MinePhoto3} source={MinePhoto3} altText={"MinePhoto3"} />
    </div>)
}