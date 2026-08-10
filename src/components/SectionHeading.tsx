interface SectionHeadingProps {
  kicker: string
  title: string
  sub?: string
}

export default function SectionHeading({ kicker, title, sub }: SectionHeadingProps) {
  return (
    <div className="mb-7">
      <p className="mm-kicker">{kicker}</p>

      <h2 className="mt-2.5 text-[clamp(26px,3.2vw,38px)] font-extrabold">{title}</h2>

      {sub && (
        <p className="mt-3.5 max-w-[64ch] text-[16.5px] leading-[1.66] text-copy">{sub}</p>
      )}
    </div>
  )
}
