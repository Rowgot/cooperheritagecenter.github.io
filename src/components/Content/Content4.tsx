import Button from 'common/Button';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function Content() {
    return (<div className={"d-flex flex-column align-items-center"}>
        <div className="m-5 text-uppercase text-center font-weight-bold ch2">Internal Strahlenberg Emails</div>
        <Document
            file={"/media/InternalStrahlenbergEmails.pdf"}
        >
            <Page pageNumber={1} />
        </Document>
        <Button download href={"/media/InternalStrahlenbergEmails.pdf"} buttonText={"Download All Emails"} className={"cmt-5 mb-5 w-100 justify-content-center d-flex"} />
    </div>)
}
