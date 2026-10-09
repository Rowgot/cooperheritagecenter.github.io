import Button from "common/Button";
import SectionContent from "common/SectionContent";
import { useState } from "react";

interface PasswordProtectedProps {
    headerText: string;
    enableEmail: boolean;
    onSubmit: any;
    children: any;
    type: string;
    id: number;
}

export default function PasswordProtected(props: PasswordProtectedProps) {
    const [isValidCredentials, setIsValid] = useState(false);
    const [errorText, setError] = useState("" as any);
    const [password, setPassword] = useState("" as any);

    const onSubmit = () => {
        const envKey = `VITE_${props.type}_${props.id}_PASSWORD`.toUpperCase();
        const envPassword = import.meta.env[envKey];
        
        if (password === envPassword) {
            props.onSubmit();
            setIsValid(true);
        } else {
            setError("Wrong password !!");
        }
    }

    if (isValidCredentials) {
        return props.children;
    }
    else {
        return (<div className="Quiz w-100 overflow-hidden">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <SectionContent className={"w-100"} contentClassName={"d-flex justify-content-center flex-column align-items-center"} orangeHrEnabled={false} >
                    <span className={`text-center ch2 text-uppercase font-weight-bold section-content-title mt-3 mb-4`} >{props.headerText ? props.headerText : ""}</span>
                    {props.enableEmail ? <input placeholder="EMAIL" className="input-fields m-3" /> : null}
                    <input placeholder="PASSWORD" type="password" className="input-fields m-3" onChange={(event: any) => { setPassword(event.target.value) }} />
                    {errorText ? <span className="text-danger ch5">{errorText}</span> : null}
                    <Button onClick={onSubmit} buttonText={"Submit"} className={"mb-3 justify-content-center d-flex"} buttonClassName={"m-5 col-4 h-25"} />
                </SectionContent>
            </div>
        </div>)
    }
}