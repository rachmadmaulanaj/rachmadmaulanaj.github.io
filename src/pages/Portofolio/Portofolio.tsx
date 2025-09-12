import React from "react";

import { Card, CardContent } from "@/components/ui/card";
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
                                <TabsTrigger key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</TabsTrigger>
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
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                                <Card className="overflow-hidden">
                                    <img
                                        src="https://picsum.photos/300/300"
                                        alt="Random"
                                        className="h-48 w-full object-cover"
                                        loading="lazy"
                                    />
                                    <CardContent className="p-4">
                                        <p className="font-medium">Random Photo</p>
                                        <p className="text-sm text-muted-foreground">Contoh pakai &lt;img&gt; biasa.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="backend">
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                                <Card className="overflow-hidden">
                                    <img
                                        src="https://picsum.photos/300/300"
                                        alt="Random"
                                        className="h-48 w-full object-cover"
                                        loading="lazy"
                                    />
                                    <CardContent className="p-4">
                                        <p className="font-medium">Random Photo</p>
                                        <p className="text-sm text-muted-foreground">Contoh pakai &lt;img&gt; biasa.</p>
                                    </CardContent>
                                </Card>

                                <Card className="overflow-hidden">
                                    <img
                                        src="https://picsum.photos/300/300"
                                        alt="Random"
                                        className="h-48 w-full object-cover"
                                        loading="lazy"
                                    />
                                    <CardContent className="p-4">
                                        <p className="font-medium">Random Photo</p>
                                        <p className="text-sm text-muted-foreground">Contoh pakai &lt;img&gt; biasa.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Portofolio;