import { useScript } from "../../hooks/useScript";

export function Content() {
    // Load Wistia scripts
    useScript("https://fast.wistia.com/embed/medias/jlwrb7qty9.jsonp");
    useScript("https://fast.wistia.com/assets/external/E-v1.js");

    return (
        <div className="d-flex flex-column w-100 justify-content-center align-items-center mb-5">
            <div className="d-flex flex-column col-10">
                <div className="m-5 text-uppercase text-center fw-bold ch2">
                    Lucille Walters Interview - 1984
                </div>
                <div className="wistia_responsive_padding wistia_responsive_padding_style">
                    <div className="wistia_responsive_wrapper wistia_responsive_wrapper_style">
                        <div className="wistia_embed wistia_embed_style wistia_async_jlwrb7qty9 seo=false videoFoam=true">
                            <div className="wistia_swatch wistia_swatch_style">
                                <img
                                    className={"wistia_swatch_img_style"}
                                    src="https://fast.wistia.com/embed/medias/jlwrb7qty9/swatch"
                                    alt="swatch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
