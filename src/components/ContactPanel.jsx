import { contact, profile } from '../data/content.js'

const linkClass = 'font-mono text-sm text-[#9fa9b6] transition-colors hover:text-white'

export default function ContactPanel() {
  return (
    <div className="mb-19 rounded-[18px] bg-ink px-7 py-12 text-center md:px-12 md:py-16">
      <h2 className="text-[clamp(28px,4.2vw,50px)] font-extrabold text-white">{contact.heading}</h2>

      <p className="mx-auto mt-4 mb-7 max-w-[52ch] text-[17px] leading-[1.64] text-[#9fa9b6]">
        {contact.body}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="inline-block rounded-lg bg-flag px-6 py-3.5 text-[15px] font-semibold text-white
                   transition-colors hover:bg-white hover:text-ink"
      >
        {profile.email}
      </a>

      <div className="mt-7 flex flex-wrap justify-center gap-6">
        <a className={linkClass} href={profile.linkedin}>LinkedIn</a>
        <a className={linkClass} href={profile.github}>GitHub</a>
        <a className={linkClass} href={profile.resume}>Résumé (PDF)</a>
        <a className={linkClass} href={profile.phoneHref}>{profile.phone}</a>
      </div>
    </div>
  )
}
