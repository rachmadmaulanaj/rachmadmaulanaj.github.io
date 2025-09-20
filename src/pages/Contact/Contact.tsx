import React, { useState } from "react";

import MapsAddress from "@/pages/Contact/components/MapsAddress";
import FormMessage from "@/pages/Contact/components/FormCardMessage";
import AlertSendMessage from "@/pages/Contact/components/AlertSendMessage";

import type { ResumeData } from "@/types/resume";

type ResumeProps = { data: ResumeData };
type StatusState = "idle" | "loading" | "success" | "error";

const Contact: React.FC<ResumeProps> = ({ data }) => {
    const [status, setStatus] = useState<StatusState>("idle");

    return (
        <>
            <MapsAddress data={data.personal_info} />
            <FormMessage setStatus={setStatus} sendTo={data.personal_info.email} />
            <AlertSendMessage status={status} setStatus={setStatus} />
        </>
    )
}

export default Contact;