import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { FaCode, FaPaintbrush, FaMobileScreenButton, FaChartLine, FaObjectGroup, FaCircleXmark, FaGear } from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { WhatImDoing } from "@/types/resume";

interface CardWhatImDoingProps {
    data: WhatImDoing[];
}

const icons: Record<string, IconType> = {
    FaCode,
    FaPaintbrush,
    FaMobileScreenButton,
    FaChartLine,
    FaObjectGroup,
    FaGear,
};

const CardWhatImDoing: React.FC<CardWhatImDoingProps> = ({ data }) => {
    return (
        <>
            <h4 className="text-xl font-bold">What I'm Doing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {
                    data.map((item, index) => {
                        const Icon = icons[item.icon] ?? FaCircleXmark;

                        return (
                            <Card key={index} className="shadow">
                                <CardContent>
                                    <div className="flex flex-row gap-5">
                                        <Icon className="hidden sm:block flex-1 w-full h-full text-orange-300" />
                                        <div className="flex flex-col gap-3 flex-10">
                                            <div className="flex flex-row gap-5">
                                                <Icon className="block sm:hidden size-6 text-orange-300" />
                                                <h4 className="text-xl">{item.title}</h4>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CardWhatImDoing;