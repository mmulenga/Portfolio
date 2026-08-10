import { profile, nav } from '../data/content'

export default function NavBar() {
  return (
    <header className="mx-auto flex w-full max-w-page items-center justify-between px-7 py-6">
      <span className="font-display text-[56px] font-black tracking-[-0.02em]">
        {profile.name}
      </span>

      <nav className="flex items-center gap-6">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden text-sm font-medium text-ash transition-colors hover:text-ink md:inline"
          >
            {item.label}
          </a>
        ))}

        <a
          href={profile.resume}
          className="rounded-md bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-white
                     transition-colors hover:bg-sig"
        >
          Download résumé
        </a>
      </nav>
    </header>
  )
}
