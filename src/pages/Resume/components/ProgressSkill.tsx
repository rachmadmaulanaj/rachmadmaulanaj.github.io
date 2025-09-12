import React from "react";

import { Progress } from "@/components/ui/progress";

import type { Skill } from "@/types/resume";

interface ProgressSkillProps {
    data: Skill[];
}

const ProgressSkill: React.FC<ProgressSkillProps> = ({ data }) => {
    return (
        <div className="p-5">
            <div className="flex flex-col gap-5">
                {
                    data.map((skill, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex-row gap-2 mb-2">
                                    <h6 className="font-bold">{skill.name}</h6>
                                    <span>({skill.value})</span>
                                </div>
                                <Progress value={skill.value} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProgressSkill;