import React from "react";
import moment from "moment";

import type { WorkExperienceAndEducation } from "@/types/resume";

interface StepListProps {
    data: WorkExperienceAndEducation[];
}

const StepList: React.FC<StepListProps> = ({ data }) => {
    return (
        <div className="p-5">
            <ol className="relative border-s border-orange-300">
                {
                    data.map((item, index) => {
                        const endDate = item.end_date === "Present" ? "Present" : moment(item.end_date).format("DD/MM/YYYY");
                        return (
                            <li className="mb-6 ms-6" key={index}>
                                <span className="absolute -start-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-300"></span>
                                <h3 className="font-semibold text-gray-900 dark:text-white">{item.organization}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{moment(item.start_date).format("DD/MM/YYYY")} - {endDate}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{item.role} - {item.description}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default StepList;