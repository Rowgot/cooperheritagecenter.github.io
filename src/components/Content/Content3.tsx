
export function Content() {
    return (
        <div className="d-flex flex-column w-100 justify-content-center align-items-center mb-5">
            <div className="d-flex flex-column col-10">
                <div className="m-5 text-uppercase text-center fw-bold ch2">
                    Lucille Walters Interview - 1984
                </div>
                <video
                    controls
                    className="w-100"
                    style={{
                        maxWidth: "960px",
                        margin: "0 auto",
                        aspectRatio: "16 / 9",
                        backgroundColor: "black",
                    }}
                >
                    <source src="/media/lucille-walters-interview.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            </div>
        </div>
    );
}
