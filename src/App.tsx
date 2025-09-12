import React from "react";

import { ThemeProvider } from "@/components/common/theme-provider";
import Sidebar from "@/components/layout/Sidebar"
import Page from "@/components/layout/Page"

import resumeData from "@/data/resume.json";
import type { ResumeData } from "@/types/resume";

const App: React.FC = () => {
	const data: ResumeData = resumeData;

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex flex-col items-center justify-center h-full xl:h-lvh">
				<div className="grid xl:grid-cols-4 grid-cols-1 gap-5 w-full h-full p-5">
					<div className="xl:col-span-1">
						<Sidebar data={data} />
					</div>
					<div className="xl:col-span-3">
						<Page data={data} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App;