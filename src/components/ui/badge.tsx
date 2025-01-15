import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
				outline: 'text-foreground',
				error: 'bg-[#eb9ca6]/20 hover:bg-[#eb9ca6]/30 text-[#d73a4a]',
				success:
					'bg-[#008672]/20 hover:bg-[#008672]/30 text-[#00B398] dark:text-[#00e6c4]',
				skyblue: 'bg-[#35abff]/20 hover:bg-[#35abff]/30 text-[#35abff]',
				purple: 'bg-[#d97ee5]/20 hover:bg-[#d97ee5]/30 text-[#d97ee5]',
				info: 'bg-[#18e022]/20 hover:bg-[#18e022]/30 text-[#18e022]',
				fuchsia: 'bg-[#a21caf]/20 hover:bg-[#a21caf]/30 text-[#a21caf]',
				teal: 'bg-[#0d9488]/20 hover:bg-[#0d9488]/30 text-[#0d9488]',
				orange: 'bg-[#c2410c]/20 hover:bg-[#c2410c]/30 text-[#c2410c]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
