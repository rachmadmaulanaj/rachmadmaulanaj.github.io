import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

import { Home, User, FileText, Grid, MapPin } from "lucide-react";
import { ModeToggle } from "@/components/common/mode-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";

const Header: React.FC<{}> = () => {
    const links = [
        { name: "Home", to: "/", icon: <Home /> },
        { name: "About Me", to: "/aboutme", icon: <User /> },
        { name: "Resume", to: "/resume", icon: <FileText /> },
        { name: "Portofolio", to: "/portofolio", icon: <Grid /> },
        { name: "Contact", to: "/contact", icon: <MapPin /> },
    ];
    const pageLocation = useLocation();
    const pageTitle = links.find((link) => link.to === pageLocation.pathname)?.name || "Home";

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center justify-between w-full mb-5 md:mb-0">
                <div>
                    <h1 className="text-2xl font-bold">{pageTitle}</h1>
                    <div className="border-b-4 border-orange-300 w-1/2 mt-1"></div>
                </div>
                <div className="md:hidden">
                    <ModeToggle />
                </div>
            </div>
            <div className="flex gap-5 w-full md:w-auto">
                <NavigationMenu viewport={false} className="max-w-full">
                    <NavigationMenuList className="flex justify-between">
                        {
                            links.map((link) => (
                                <NavigationMenuItem key={link.name}>
                                    <NavigationMenuLink
                                        asChild
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            pageLocation.pathname === link.to &&
                                            "bg-orange-300 text-black-foreground"
                                        )}
                                    >
                                        <Link to={link.to}>
                                            <span className="sm:hidden">{link.icon}</span>
                                            <span className="hidden sm:inline">{link.name}</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden md:block">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header;