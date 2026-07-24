import { NavLink, Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { useTheme } from '../lib/useTheme'

const NAV = [
  { to: '/', label: 'ข่าว', icon: 'news', end: true },
  { to: '/schools', label: 'โรงเรียน', icon: 'school' },
  { to: '/innovation', label: 'นวัตกรรม', icon: 'bulb' },
  { to: '/map', label: 'แผนที่', icon: 'map' },
  { to: '/docs', label: 'เอกสาร', icon: 'doc' },
]

export default function Layout() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md backdrop-saturate-150">
        <div className="max-w-[1120px] mx-auto px-5 h-16 flex items-center gap-5">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={38} />
            <div className="leading-tight">
              <b className="block text-[15px] font-head font-bold text-ink">พื้นที่นวัตกรรมการศึกษา</b>
              <span className="hidden sm:block font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">
                Krabi · จังหวัดกระบี่
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-1 ml-auto">
            {NAV.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-[14.5px] font-medium flex items-center gap-2 transition-colors ${
                    isActive
                      ? 'bg-sky text-blue-700 dark:text-blue font-bold'
                      : 'text-muted hover:bg-sky hover:text-ink'
                  }`
                }
              >
                <Icon name={it.icon} />
                {it.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={toggle}
            aria-label="สลับธีมสว่าง/มืด"
            className="md:ml-1.5 ml-auto w-[38px] h-[38px] rounded-lg border border-line bg-surface text-muted grid place-items-center hover:text-ink hover:border-blue transition-colors"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
        </div>
      </header>

      {/* Page */}
      <main className="flex-1 pb-24 md:pb-10">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-surface">
        <div className="max-w-[1120px] mx-auto px-5 py-7 flex justify-between gap-4 flex-wrap text-[13px] text-muted">
          <span>© 2569 สำนักงานศึกษาธิการจังหวัดกระบี่ · พื้นที่นวัตกรรมการศึกษา</span>
          <span className="font-mono">krabiedusandbox.org · prototype</span>
        </div>
      </footer>

      {/* Mobile tab bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-60 border-t border-line bg-surface/90 backdrop-blur-md flex px-1 pt-1.5 pb-[calc(6px+env(safe-area-inset-bottom))]">
        {NAV.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[10.5px] font-semibold ${
                isActive ? 'text-blue' : 'text-muted'
              }`
            }
          >
            <Icon name={it.icon} className="w-[22px] h-[22px]" />
            {it.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
