'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { SIDE_MENU_ITEMS } from '@/constants'
import { AlignJustify } from 'lucide-react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { Fragment } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Badge } from '../ui/badge'

export default function SideMenu() {
	const pathname = usePathname()
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className="bg-transparent"
					variant="ghost"
					size={'icon'}>
					<AlignJustify />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<SheetTitle>Siouks</SheetTitle>
					<SheetDescription>Lorem ipsum dolor sit amet.</SheetDescription>
					<Separator className="mb-5" />
					<div className="flex flex-col">
						{SIDE_MENU_ITEMS.map(({ icon: Icon, label, href }) => (
							<SheetClose
								asChild
								key={label}>
								<Link
									className={cn(
										'flex items-center gap-5 mt-2 text-primary/50',
										href === pathname ? 'text-primary' : ''
									)}
									href={href}
									prefetch={false}>
									<Icon />
									<div className="flex-1 flex flex-col">
										<span className="flex justify-between">
											<p className="py-2">{label}</p>
											<span>
												<Badge variant={'info'}>33</Badge>
											</span>
										</span>
										<Separator />
									</div>
								</Link>
							</SheetClose>
						))}
					</div>
				</SheetHeader>
				<SheetFooter>
					<SheetClose></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
