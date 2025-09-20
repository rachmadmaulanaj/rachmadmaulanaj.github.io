import React from "react";

import {
    SiPhp,
    SiLaravel,
    SiCodeigniter,
    SiJavascript,
    SiJquery,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiShadcnui,
    SiLeaflet,
    SiVite,
    SiFirebase,
    SiSupabase,
    SiMysql
} from "react-icons/si";
import Silverstripe from "@/assets/icons/silverstripe.svg?react";
import { FaCircleXmark } from "react-icons/fa6";

import type { IconType } from "react-icons";
type IconKey = keyof typeof iconMap | keyof typeof svgMap;

type CustomIconProps = {
    name: IconKey;
    className?: string;
};

const iconMap: Record<string, IconType> = {
    Php: SiPhp,
    Laravel: SiLaravel,
    Codeigniter: SiCodeigniter,
    Javascript: SiJavascript,
    Jquery: SiJquery,
    React: SiReact,
    Bootstrap: SiBootstrap,
    Tailwindcss: SiTailwindcss,
    Shadcnui: SiShadcnui,
    Leaflet: SiLeaflet,
    Vite: SiVite,
    Firebase: SiFirebase,
    Supabase: SiSupabase,
    Mysql: SiMysql
};
const svgMap = {
    Silverstripe: Silverstripe,
};

const CustomIcon: React.FC<CustomIconProps> = ({ name, className }) => {
    // cek react-icons
    if (iconMap[name]) {
        const Icon = iconMap[name];
        return <Icon className={className} />;
    }

    // cek svg lokal
    if (svgMap[name as keyof typeof svgMap]) {
        const SvgIcon = svgMap[name as keyof typeof svgMap];
        return <SvgIcon className={className} />;
    }

    // fallback default
    return <FaCircleXmark className={className} />;
};

export default CustomIcon;