import BottomMenu from '@/components/web/BottomMenu'
import Navbar from '@/components/web/Navbar'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function WebLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<main className="flex flex-col justify-between h-svh relative">
			<Navbar />
			<main className={cn('responsive-layout pt-3 flex-1 overflow-auto')}>
				{children}
			</main>
			<BottomMenu />
		</main>
	)
}
