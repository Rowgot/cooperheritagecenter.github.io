import { useParams } from "react-router-dom";
import PasswordProtected from "components/Quiz/PasswordProtected";
import React, { useEffect, useState } from "react";
import * as Content1 from "../components/Content/Content1";
import * as Content2 from "../components/Content/Content2";
import * as Content3 from "../components/Content/Content3";
import * as Content4 from "../components/Content/Content4";
import * as Content5 from "../components/Content/Content5";

// Static mapping of content modules
const contentModules = {
    1: Content1,
    2: Content2,
    3: Content3,
    4: Content4,
    5: Content5
};

export default function ContentView() {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? Number(id) : 0;
    const [Content, setContent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        if (id) {
            const module = contentModules[numericId as keyof typeof contentModules];
            if (module) {
                setContent(() => module.Content);
            }
        }
    }, [id, numericId]);

    if (!Content) return null;

    return (
        <div className="ContentView w-100 overflow-hidden">
            <PasswordProtected type={"content"} id={numericId} headerText="ENTER YOUR PASSWORD TO ACCESS THE EXCLUSIVE CONTENT:" enableEmail={false} onSubmit={() => { }}>
                <Content />
            </PasswordProtected>
        </div>
    );
}