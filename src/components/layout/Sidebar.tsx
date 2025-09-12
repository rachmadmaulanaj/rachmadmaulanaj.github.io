import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SidePersonalInfo from "@/components/common/SidePersonalInfo";
import SideSocialMedia from "@/components/common/SideSocialMedia";

import type { ResumeData } from "@/types/resume";

type SidebarProps = { data: ResumeData };

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
    return (
        <Card className="h-full shadow-xl">
            <CardContent>
                <div className="grid grid-cols-1 xl:grid-rows-2 gap-2">
                    <div className="flex flex-row xl:flex-col gap-5 items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Avatar className="rounded-lg w-24 h-24 xl:w-40 xl:h-40 p-2 bg-accent">
                                <AvatarImage src="assets/images/personal/face.png" alt={data.personal_info.full_name} />
                                <AvatarFallback>NF</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <h3 className="text-lg xl:text-2xl font-bold text-left xl:text-center">{data.personal_info.full_name}</h3>
                            <div className="flex items-center justify-start xl:justify-center flex-wrap gap-2 mt-5">
                                {
                                    data.title.map((title, index) => {
                                        return <Badge key={index} variant="secondary">{title}</Badge>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <SidePersonalInfo data={data.personal_info} />
                    <SideSocialMedia data={data.social_media} />
                </div>
            </CardContent>
        </Card>
    )
}

export default Sidebar;