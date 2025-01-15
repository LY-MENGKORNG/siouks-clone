'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ReactNode, useState } from 'react'
import Circular from '../timesheet/Circular'

const projectList = [
	{
		name: 'Project 1',
		id: 1,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
	{
		name: 'Project 2',
		id: 2,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
	{
		name: 'Project 3',
		id: 3,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
	{
		name: 'Project 4',
		id: 4,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
	{
		name: 'Project 5',
		id: 5,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
	{
		name: 'Project 6',
		id: 6,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio.',
	},
]

export default function ProjectTabs() {
	const [currentProject, setCurrentProject] = useState(projectList[0])

	return (
		<Tabs
			defaultValue={projectList[0].name}
			className="w-full flex flex-col">
			<TabsList className="w-full flex">
				{projectList.map((project) => (
					<TabsTrigger
						key={project.id}
						className="w-full"
						onClick={() => setCurrentProject(project)}
						value={project.name}>
						{project.name}
					</TabsTrigger>
				))}
			</TabsList>
			<TabsContent
				value={currentProject.name}
				className="flex justify-center relative">
				<Circular />
			</TabsContent>
		</Tabs>
	)
}
