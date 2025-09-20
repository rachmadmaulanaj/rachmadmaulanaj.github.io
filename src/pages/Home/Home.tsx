import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

import { User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { ResumeData } from "@/types/resume";

type HomeProps = { data: ResumeData };

const Home: React.FC<HomeProps> = ({ data }) => {
    const full_name = data.personal_info.full_name;
    const intro = data.title.flatMap((value) => [`A ${value}`, 1000]);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 h-full xl:h-[calc(100vh-160px)]">
            <div className="col-span-3 order-2 md:order-1 my-3">
                <div className="flex flex-col justify-center w-full h-full">
                    <h1 className="text-xl md:text-4xl font-bold">Hi, I'm {full_name}.</h1>
                    <TypeAnimation
                        sequence={intro}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-xl md:text-4xl font-bold mt-0 md:mt-3"
                    />
                    <div className="flex justify-center w-full mt-5 gap-2 md:gap-5">
                        <Button size="lg">
                            <Link to="/aboutme">
                                About Me </Link>
                            <User />
                        </Button>
                        <Button size="lg" asChild>
                            <a href="assets/files/CV.pdf" target="_blank" download={true}>
                                Download CV <FileText />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-2 order-1 md:order-2 mx-auto my-3">
                <img src="assets/images/personal/half-body.png" alt="half-body" className="h-full w-auto object-contain" />
            </div>
        </div>
    )
}

export default Home;