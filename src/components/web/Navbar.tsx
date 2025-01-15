import { RESPONSIVE_LAYOUT } from '@/constants'
import ThemeSwitcher from '../commons/ThemeSwitcher'
import UserProfile from '../commons/UserProfile'
import SideMenu from './SideMenu'
import { cn } from '@/lib/utils'

export default function Navbar() {
	return (
		<nav
			className={
				'responsive-layout w-full sticky top-0 left-0 z-[10] flex items-center justify-between backdrop-blur-md py-2 border-b'
			}>
			<SideMenu />
			<div className="flex items-center gap-3">
				<UserProfile />
				<ThemeSwitcher />
			</div>
		</nav>
	)
}
