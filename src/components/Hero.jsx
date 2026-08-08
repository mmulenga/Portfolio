import { hero, profile } from '../data/content.js'

export default function Hero() {
  const [before, accent, after] = hero.headline
  const [pre, post] = hero.subline.split(hero.sublineBold)

  return (
    <section className="pb-2 pt-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[3fr_2fr] md:items-center">
        <div className="order-2 md:order-1">
          <p className="mm-kicker">{profile.kicker}</p>

          <h1 className="mt-4 max-w-[20ch] text-[clamp(36px,5.2vw,62px)] font-extrabold">
            {before}
            <span className="text-sig">{accent}</span>
            {after}
          </h1>

          <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.66] text-[#464f5c]">
            {pre}
            <b className="font-semibold text-ink">{hero.sublineBold}</b>
            {post}
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="mm-surface relative aspect-square w-[220px] overflow-hidden rounded-full sm:w-[260px] md:w-full md:max-w-[280px]">
            <div className="absolute inset-0 flex items-center justify-center px-3 text-center font-mono text-[11px] text-ash">
              {profile.photoPlaceholder}
            </div>
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4">
        {hero.stats.map((stat) => (
          <div className="mm-chip w-full flex-col items-start gap-1" key={stat.value + stat.label}>
            <b className="whitespace-nowrap font-display text-[22px] font-black tracking-[-0.03em]">
              {stat.value}
            </b>
            <span className="text-[13px] leading-[1.4] text-ash">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
