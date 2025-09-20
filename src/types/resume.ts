export interface PersonalInfo {
    short_name: string;
    full_name: string;
    email: string;
    phone: string;
    birth_date: string;
    address: string;
    longitude: number;
    latitude: number;
}

export interface WhatImDoing {
    title: string;
    description: string;
    icon: string;
}

export interface SocialMedia {
    name: string;
    link: string;
    icon: string;
}

export interface WorkExperienceAndEducation {
    organization: string;
    role: string;
    description: string;
    start_date: string;
    end_date: string;
}

export interface Skill {
    name: string;
    value: number;
    category: string;
}

export interface Portfolio {
    name: string;
    description: string;
    category: string;
    stack: string[];
    link: string;
    thumbnail: string;
    screenshots: string[];
}

export interface ResumeData {
    personal_info: PersonalInfo;
    title: string[];
    about_me: string;
    what_im_doing: WhatImDoing[];
    social_media: SocialMedia[];
    work_experience: WorkExperienceAndEducation[];
    education: WorkExperienceAndEducation[];
    skills: Skill[];
    portofolio: Portfolio[];
}