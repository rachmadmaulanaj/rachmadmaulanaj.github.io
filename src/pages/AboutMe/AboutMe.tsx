import React from "react";

import CardWhatImDoing from "./components/CardWhatImDoing";

import type { ResumeData } from "@/types/resume";

type AboutMeProps = { data: ResumeData };

const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
    return (
        <>
            <div className="mt-5">
                <p className="whitespace-pre-wrap">{data.about_me}</p>
            </div>
            <hr className="my-5" />
            <CardWhatImDoing data={data.what_im_doing} />
        </>
    )
}

export default AboutMe;