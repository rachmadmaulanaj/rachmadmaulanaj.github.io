import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SiPhp, SiLaravel, SiReact, SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";
import { FaCircleXmark } from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { Portfolio } from "@/types/resume";

interface DialogPortofolioProps {
    data: Portfolio;
}

const icons: Record<string, IconType> = {
    "Php": SiPhp,
    "Laravel": SiLaravel,
    "React": SiReact,
    "Tailwindcss": SiTailwindcss,
    "Javascript": SiJavascript,
    "Vite": SiVite,
};

const DialogPortofolio: React.FC<DialogPortofolioProps> = ({ data }) => {
    const [api, setApi] = React.useState<any>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <span className="font-medium cursor-pointer">
                        {data.name}
                    </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-11/12">
                    <DialogHeader>
                        <DialogTitle>Detail Portofolio</DialogTitle>
                    </DialogHeader>
                    <DialogDescription asChild>
                        <div className="grid grid-cols-5 gap-5 w-full">
                            <div className="col-span-5 xl:col-span-3 m-auto">
                                <Carousel className="w-full max-w-4xl" setApi={setApi}>
                                    <CarouselContent>
                                        {
                                            data.screenshots.map((item, index) => (
                                                <CarouselItem key={index}>
                                                    <Card className="shadow">
                                                        <CardContent className="p-0">
                                                            <img src={item} alt={data.name} className="w-full h-full object-cover" />
                                                        </CardContent>
                                                    </Card>
                                                </CarouselItem>
                                            ))
                                        }
                                    </CarouselContent>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <CarouselPrevious className="static translate-y-0" />
                                        <span className="text-sm text-muted-foreground my-auto">
                                            Slide {current} of {count}
                                        </span>
                                        <CarouselNext className="static translate-y-0" />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="col-span-5 xl:col-span-2">
                                <div className="grid grid-cols-4 gap-1 md:gap-2 xl:gap-4 text-md md:text-lg">
                                    <div className="col-span-4 md:col-span-1 font-bold">Name :</div>
                                    <div className="col-span-4 md:col-span-3 break-words">{data.name}</div>
                                    <div className="col-span-4 md:col-span-1 font-bold">Description :</div>
                                    <div className="col-span-4 md:col-span-3 break-words">{data.description}</div>
                                    <div className="col-span-4 md:col-span-1 font-bold">Link :</div>
                                    <div className="col-span-4 md:col-span-3">
                                        <a href={data.link} className="text-blue-500 hover:underline break-words">{data.link}</a>
                                    </div>
                                    <div className="col-span-4 font-bold">Stack :</div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    {
                                        data.stack.map((item, index) => {
                                            const Icon = icons[item] ?? FaCircleXmark;

                                            return (
                                                <div key={index} className="my-3 w-7 h-7">
                                                    <Icon className="text-orange-300 w-full h-full" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                    <DialogFooter className="justify-end">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="cursor-pointer">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DialogPortofolio;