import { hero, profile } from '../data/content.js'

export default function Hero() {
  const [before, accent] = hero.headline
  const [pre, post] = hero.subline.split(hero.sublineBold)

  return (
    <section className="pb-2 pt-4">
      <p className="mm-kicker">{profile.kicker}</p>

      <h1 className="mt-4 max-w-[20ch] text-[clamp(36px,5.2vw,62px)] font-extrabold">
        {before}
        <span className="text-sig">{accent}</span>
      </h1>

      <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.66] text-[#464f5c]">
        {pre}
        <b className="font-semibold text-ink">{hero.sublineBold}</b>
        {post}
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {hero.stats.map((stat) => (
          <div className="mm-chip" key={stat.value + stat.label}>
            <b className="font-display text-[19px] font-black tracking-[-0.03em]">{stat.value}</b>
            <span className="text-[13px] text-ash">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
