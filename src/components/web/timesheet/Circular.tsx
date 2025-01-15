'use client'

import { useEffect, useState } from 'react'

import greenBrush from '@/assets/paint-brush-green.svg'
import yellowBrush from '@/assets/paint-brush-yellow.svg'
import redBrush from '@/assets/paint-brush-red.svg'
import eraser from '@/assets/eraser.svg'
import { cn } from '@/lib/utils'

type LevelState = 0 | 1 | 2 | 3

type SectionPath = 1 | 2 | 3

type SectionState = {
	outer: SectionPath
	middle: SectionPath
	inner: SectionPath
}

type DisabledSections = {
	outer: boolean
	middle: boolean
	inner: boolean
}

const colors = ['#ACACAC', '#4ade80', '#facc15', '#ef4444']

const cursors: { [K in LevelState]: string } = {
	0: `url(${greenBrush.src}) 2 18, auto`,
	1: `url(${yellowBrush.src}) 2 18, auto`,
	2: `url(${redBrush.src}) 2 18, auto`,
	3: `url(${eraser.src}) 2 18, auto`,
}

const paths = {
	outer: {
		d: 'A 98 98 0 0 1',
	},
}

export default function Circular() {
	const [sectionStates, setSectionStates] = useState<SectionState[]>(
		Array(8).fill({ outer: 0, middle: 0, inner: 0 })
	)
	const [disabledSections, setDisabledSections] = useState<DisabledSections[]>(
		Array(8).fill({ outer: false, middle: false, inner: false })
	)

	const getColorForState = (state: LevelState) => colors[state]

	const getCursor = (state: LevelState) => cursors[state]

	const handleClick = (sectionIndex: number, part: keyof SectionState) => {
		setSectionStates((prev) => {
			const newStates = [...prev]
			const newSection = { ...newStates[sectionIndex] }
			newSection[part] = ((newSection[part] + 1) % 4) as SectionPath
			newStates[sectionIndex] = newSection
			return newStates
		})
	}

	return (
		<div className="relative w-[35rem] h-[35rem]">
			<svg
				className="w-full h-full"
				viewBox="0 0 200 200">
				<defs>
					<radialGradient
						cx="50%"
						cy="50%"
						r="50%"
						fx="50%"
						fy="50%"
					/>
				</defs>

				{Array.from({ length: 8 }).map((_, index) => {
					const startAngle = index * 45
					const endAngle = (index + 1) * 45

					const radiuses = [98, 70, 45]
					const paths = radiuses.map((radius) => {
						const x1 = 100 + radius * Math.cos((startAngle * Math.PI) / 180)
						const y1 = 100 + radius * Math.sin((startAngle * Math.PI) / 180)
						const x2 = 100 + radius * Math.cos((endAngle * Math.PI) / 180)
						const y2 = 100 + radius * Math.sin((endAngle * Math.PI) / 180)
						return { x1, y1, x2, y2 }
					})

					const labelAngle = (startAngle + endAngle) / 2
					const labelX = 100 + 70 * Math.cos((labelAngle * Math.PI) / 180)
					const labelY = 100 + 70 * Math.sin((labelAngle * Math.PI) / 180)

					return (
						<g
							key={index}
							className="select-none">
							{/* Outer path */}
							<path
								d={`M ${paths[0].x1} ${paths[0].y1} A 98 98 0 0 1 ${paths[0].x2} ${paths[0].y2} L ${paths[1].x2} ${paths[1].y2} A 70 70 0 0 0 ${paths[1].x1} ${paths[1].y1} Z`}
								fill={getColorForState(sectionStates[index].outer)}
								className={cn(
									'transition-colors duration-200 stroke-1 stroke-primary-foreground',
									disabledSections[index].outer
										? 'cursor-not-allowed opacity-50'
										: ''
								)}
								onClick={() =>
									!disabledSections[index].outer && handleClick(index, 'outer')
								}
								style={{
									cursor: disabledSections[index].outer
										? undefined
										: getCursor(sectionStates[index].outer),
								}}
							/>

							{/* Middle path */}
							<path
								d={`M ${paths[1].x1} ${paths[1].y1} A 70 70 0 0 1 ${paths[1].x2} ${paths[1].y2} L ${paths[2].x2} ${paths[2].y2} A 45 45 0 0 0 ${paths[2].x1} ${paths[2].y1} Z`}
								fill={getColorForState(sectionStates[index].middle)}
								className={cn(
									'transition-colors duration-200 stroke-1 stroke-primary-foreground',
									disabledSections[index].middle
										? 'cursor-not-allowed opacity-50'
										: ''
								)}
								onClick={() => handleClick(index, 'middle')}
								style={{ cursor: getCursor(sectionStates[index].middle) }}
							/>

							{/* Inner path */}
							<path
								d={`M ${paths[2].x1} ${paths[2].y1} A 45 45 0 0 1 ${paths[2].x2} ${paths[2].y2} L 100 100 Z`}
								fill={getColorForState(sectionStates[index].inner)}
								className={cn(
									'transition-colors duration-200 stroke-1 stroke-primary-foreground',
									disabledSections[index].inner
										? 'cursor-not-allowed opacity-50'
										: ''
								)}
								onClick={() => handleClick(index, 'inner')}
								style={{ cursor: getCursor(sectionStates[index].inner) }}
							/>

							{/* Text label */}
							<text
								x={labelX}
								y={labelY}
								fontSize="4.5"
								fontWeight="700"
								textAnchor="middle"
								dominantBaseline="middle"
								className="fill-secondary-foreground"
								transform={`rotate(${labelAngle}, ${labelX}, ${labelY})`}>
								{`DV${((index + 3) % 8) + 1}`}
							</text>
						</g>
					)
				})}
			</svg>
		</div>
	)
}
