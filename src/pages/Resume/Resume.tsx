import React from "react";

import { GraduationCap, BriefcaseBusiness, Cog } from "lucide-react";
import StepList from "@/pages/Resume/components/StepList";
import ProgressSkill from "@/pages/Resume/components/ProgressSkill";

import type { ResumeData } from "@/types/resume";

type ResumeProps = { data: ResumeData };

const Resume: React.FC<ResumeProps> = ({ data }) => {
    return (
        <div className="xl:p-5">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                    <BriefcaseBusiness size={32} />
                    <h2 className="text-2xl">Experience</h2>
                </div>
                <StepList data={data.work_experience} />

                <div className="flex flex-row gap-3">
                    <GraduationCap size={32} />
                    <h2 className="text-2xl">Education</h2>
                </div>
                <StepList data={data.education} />

                <div className="flex flex-row gap-3">
                    <Cog size={32} />
                    <h2 className="text-2xl">My Skills</h2>
                </div>
                <ProgressSkill data={data.skills} />
            </div>
        </div>
    )
}

export default Resume;