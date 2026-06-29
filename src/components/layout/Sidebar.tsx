// src/components/layout/Sidebar.tsx
import {
  BookOpen,
  Calendar,
  ClipboardList,
  DollarSign,
  LayoutDashboard,
  Users,
} from 'lucide-react'

type NavItem = {
  label: string
  icon: typeof LayoutDashboard
  to: string
}

export const NAV_ITEMS = {
  admin: [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
    { label: 'Calendar', icon: Calendar, to: '/calendar' },
    { label: 'My trainings', icon: BookOpen, to: '/trainings' },
    { label: 'Payout', icon: DollarSign, to: '/payout' },
    { label: 'Surveys', icon: ClipboardList, to: '/surveys' },
    { label: 'Team', icon: Users, to: '/team' },
  ] satisfies NavItem[],
  dm: [] satisfies NavItem[],
  instructor: [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/i/dashboard' },
    { label: 'Calendar', icon: Calendar, to: '/i/calendar' },
    { label: 'My trainings', icon: BookOpen, to: '/i/trainings' },
    { label: 'Payout', icon: DollarSign, to: '/i/payout' },
  ] satisfies NavItem[],
}

export function Sidebar() {
  return (
    <aside>
      <ul>
        {NAV_ITEMS.admin.map((item) => {
          const Icon = item.icon

          return (
            <li key={item.to}>
              <a href={item.to}>
                <Icon />
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}