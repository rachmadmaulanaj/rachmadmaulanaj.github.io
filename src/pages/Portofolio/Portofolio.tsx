import React from "react";
import { capitalize } from "@/utils/helpers";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { ResumeData } from "@/types/resume";
import CardPortofolio from "@/pages/Portofolio/components/CardPortofolio";

type PortofolioProps = { data: ResumeData };

const Portofolio: React.FC<PortofolioProps> = ({ data }) => {
    const categories = [...['all'], ...new Set(data.portofolio.map((portofolio) => portofolio.category))];
    return (
        <>
            <div className="mt-5">
                <Tabs defaultValue="all" className="w-full">
                    <TabsList>
                        {
                            categories.map((category) => (
                                <TabsTrigger key={category} value={category}>{capitalize(category)}</TabsTrigger>
                            ))
                        }
                    </TabsList>
                    <div className="mt-5">
                        <TabsContent value="all">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                {
                                    data.portofolio.map((portofolio, index) => (
                                        <CardPortofolio data={portofolio} key={index} />
                                    ))
                                }
                            </div>
                        </TabsContent>
                        <TabsContent value="frontend">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                {
                                    data.portofolio.map((portofolio, index) => {
                                        if (portofolio.category === 'frontend') return <CardPortofolio data={portofolio} key={index} />
                                    })
                                }
                            </div>
                        </TabsContent>
                        <TabsContent value="backend">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                {
                                    data.portofolio.map((portofolio, index) => {
                                        if (portofolio.category === 'backend') return <CardPortofolio data={portofolio} key={index} />
                                    })
                                }
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Portofolio;