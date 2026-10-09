export function Content() {
    return (<div className={"d-flex flex-column align-items-center"}>
        <div className="m-5 text-uppercase text-center font-weight-bold ch2">Silas Kemp</div>
        <audio controls>
            <source
                src="/media/silas_interview.mp3"
                type="audio/mp3"
            />
                Your browser does not support the audio element.
        </audio>
      </div>)
}
