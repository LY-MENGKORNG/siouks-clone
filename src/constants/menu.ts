import { Bell, CalendarDays, ClipboardList, FolderOpenDot, Home, Umbrella } from 'lucide-react'

export const SIDE_MENU_ITEMS = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Projects', icon: FolderOpenDot, href: '/projects' },
  { label: 'Timesheet', icon: ClipboardList, href: '/timesheet' },
  { label: 'Leave Request', icon: Umbrella, href: '/leave-request' },
  { label: 'Notifications', icon: Bell, href: '/notifications' },
  { label: 'Calendar', icon: CalendarDays, href: '/calendar' }
]

export const BOTTOM_MENU_ITEMS = [
  { label: 'Home', icon: Home, href: '/', },
  { label: 'Projects', icon: FolderOpenDot, href: '/projects' },
  { label: 'TimeSheet', icon: ClipboardList, href: '/timesheet' },
  { label: 'Notifications', icon: Bell, href: '/notifications' },
  { label: 'Calendar', icon: CalendarDays, href: '/calendar' }
]