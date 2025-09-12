import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/common/theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const classActive = "bg-orange-300 text-black";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[999]">
                <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? classActive : ""}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? classActive : ""}>
                    Dark
                </DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? classActive : ""}>
                    System
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}