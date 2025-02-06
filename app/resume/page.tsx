"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaVuejs,
    FaLaravel,
    FaPhp,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiNuxtdotjs } from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"

//  about data 
const about = {
    title: "About Me",
    description: "I am a software developer with 3 years of experience in web development. I have completed 12 projects and mastered 13 technologies. I have made 500 code commits.",
    info: [
        { fieldName: "Name", fieldValue: "Đoàn Khiêm", link: "#" },
        { fieldName: "Experience", fieldValue: "3 years", link: "#" },
        { fieldName: "Skype", fieldValue: "Đoàn Khiêm", link: "https://join.skype.com/invite/xTe25mkE02yl" },
        { fieldName: "Telegram", fieldValue: "@devbi19", link: "#" },
        { fieldName: "Tiktok", fieldValue: "Sadboiz IT", link: "https://www.tiktok.com/@sadboizit" },
    ]
}

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "I have 3 years of experience in web development. I have completed 12 projects and mastered 8 technologies. I have made >1.200 code commits.",
    items: [
        { company: "Commude Vietnam Co., LTD", position: "INTERN Php + Vuejs", duration: "11/2021 - 01/2022" },
        { company: "Everflow Company", position: "Fresher Laravel + VueJs", duration: "01/2022 - 03/2022" },
        { company: "Brite Solutions .,JSC ", position: "Developer Laravel + VueJs", duration: "03/2022 - 11/2022" },
        { company: "Townsoft Vina LTD", position: "Developer VueJs", duration: "11/2022 - Now" },
    ]
}

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "I used to study at the Hanoi University of Natural Resources and Environment. I have a degree in Information Technology Engineering",
    items: [
        { institution: "Information Technology", degree: "Hanoi University of Natural Resources and Environment", duration: "2018 - 2024" },
        { institution: "PHP FullStack", degree: "BachKhoa Aptech", duration: "2020 - 2021" },
        
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "I have mastered 13 technologies. I am proficient in HTML, CSS, JavaScript,, TypeScript, Php, Laravel, VueJs, NuxtJs, React, Figma, Node.js, Tailwind CSS, and Next.js.",
    skillList: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Php", icon: <FaPhp /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experrience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="texl-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="texl-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}:</span>
                                                {item.link !== "#" ? (
                                                    <a href={item.link} className="text-xl">{item.fieldValue}</a>
                                                ) : (
                                                    <p className="text-xl">{item.fieldValue}</p>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;