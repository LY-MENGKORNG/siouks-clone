'use client'

import { BOTTOM_MENU_ITEMS } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomMenu() {
	const pathname = usePathname()
	return (
		<nav
			className={
				'responsive-layout w-full static bottom-0 left-0 z-[10] flex items-center justify-between bg-primary-foreground py-2 border-t'
			}>
			{BOTTOM_MENU_ITEMS.map(({ icon: Icon, label, href }) => (
				<Link
					className={cn(
						'flex flex-col items-center text-primary/50',
						href === pathname ? 'text-primary' : ''
					)}
					href={href}
					prefetch={false}
					key={label}>
					<Icon className="w-5 h-5" />
					<span className="text-sm font-light mt-1">{label}</span>
				</Link>
			))}
		</nav>
	)
}
