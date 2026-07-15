import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Courses', to: '/courses' },
  { label: 'To-Do', to: '/todo' },
  { label: 'Calendar', to: '/calendar' },
  { label: 'Grades', to: '/grades' },
]

export function Sidebar() {
  return (
    <aside className="flex h-full w-56 flex-col gap-1 border-r border-neutral-border bg-neutral-surfaceCard p-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-sm font-medium ${
              isActive
                ? 'bg-primary-selected text-primary'
                : 'text-neutral-textBody hover:bg-neutral-surface'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  )
}
