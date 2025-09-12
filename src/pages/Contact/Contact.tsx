import React from "react";

import MapsAddress from "./components/MapsAddress";
import FormMessage from "./components/FormMessage";

import type { ResumeData } from "@/types/resume";

type ResumeProps = { data: ResumeData };

const Contact: React.FC<ResumeProps> = ({ data }) => {
    return (
        <>
            <MapsAddress data={data.personal_info} />
            <FormMessage />
        </>
    )
}

export default Contact;