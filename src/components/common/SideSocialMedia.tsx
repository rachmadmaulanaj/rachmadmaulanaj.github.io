import React from "react";

import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
import { FaCircleXmark } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import type { IconType } from "react-icons";
import type { SocialMedia } from "@/types/resume";

type SideSocialMediaProps = { data: SocialMedia[] };

const icons: Record<string, IconType> = {
    SiGithub,
    SiLinkedin,
    SiFacebook,
    SiInstagram,
};

const SideSocialMedia: React.FC<SideSocialMediaProps> = ({ data }) => {
    return (
        <div className="flex flex-row gap-4 md:gap-7 justify-center mt-5">
            {
                data.map((item, index) => {
                    const Icon = icons[item.icon] ?? FaCircleXmark;

                    return (
                        <Button asChild key={index} className="bg-orange-300 hover:bg-orange-400 cursor-pointer">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Icon className="text-white size-5" />
                            </a>
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default SideSocialMedia;