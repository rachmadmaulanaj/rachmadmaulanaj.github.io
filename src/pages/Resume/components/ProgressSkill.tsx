import React from "react";
import { capitalize } from "@/utils/helpers";

import { Progress } from "@/components/ui/progress";

import type { Skill } from "@/types/resume";

interface ProgressSkillProps {
    data: Skill[];
}
type GroupedArray = {
    category: string;
    items: Skill[];
}[];

const ProgressSkill: React.FC<ProgressSkillProps> = ({ data }) => {
    const groupedArray: GroupedArray = Object.values(
        data.reduce<Record<string, { category: string; items: Skill[] }>>(
            (acc, skill) => {
                if (!acc[skill.category]) {
                    acc[skill.category] = { category: skill.category, items: [] };
                }
                acc[skill.category].items.push(skill);
                return acc;
            },
            {}
        )
    );

    return (
        <div className="p-5">
            {
                groupedArray.map((group, index) => {
                    return (
                        <div key={index}>
                            <h2 className="text-2xl font-bold mb-2">{capitalize(group.category)}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                {
                                    group.items.map((skill, index) => {
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
                })
            }
        </div>
    )
}

export default ProgressSkill;