import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home/Home";
import AboutMe from "@/pages/AboutMe/AboutMe";
import Resume from "@/pages/Resume/Resume";
import Portofolio from "@/pages/Portofolio/Portofolio";
import Contact from "@/pages/Contact/Contact";

import type { ResumeData } from "@/types/resume";

type PageProps = { data: ResumeData };

const Page: React.FC<PageProps> = ({ data }) => {
    const location = useLocation()

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <Card className="h-full shadow-xl">
            <CardContent>
                <Header />
                <hr className="my-5 border-t-1 border-orange-300" />
                <ScrollArea className="h-full xl:h-[calc(100vh-160px)]">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route
                                path="/"
                                element={
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Home data={data} />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/aboutme"
                                element={
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <AboutMe data={data} />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/resume"
                                element={
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Resume data={data} />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/portofolio"
                                element={
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Portofolio data={data} />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Contact data={data} />
                                    </motion.div>
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

export default Page;