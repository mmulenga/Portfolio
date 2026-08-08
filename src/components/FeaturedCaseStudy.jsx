import { featured } from '../data/content.js'
import ArchitectureDiagram from './ArchitectureDiagram.jsx'

function Answer({ text, highlight }) {
  if (!highlight) return <>{text}</>
  const [pre, post] = text.split(highlight)
  return (
    <>
      {pre}
      <strong className="text-sig">{highlight}</strong>
      {post}
    </>
  )
}

export default function FeaturedCaseStudy() {
  return (
    <section className="mm-surface mt-13 grid overflow-hidden lg:grid-cols-2">
      <div className="p-7 lg:p-11">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-sig">
          {featured.label}
        </p>

        <h2 className="mb-3.5 text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.12]">
          {featured.title}
        </h2>

        <dl className="mt-5">
          {featured.qa.map((row) => (
            <div key={row.q}>
              <dt className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ash">
                {row.q}
              </dt>
              <dd className="mt-1.5 text-[15.5px] leading-[1.66]">
                <Answer text={row.a} highlight={row.highlight} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {featured.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.primary
                  ? 'rounded-md bg-sig px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-sig-deep'
                  : 'rounded-md border border-[#d2d8e0] px-4 py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:border-ink'
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <ArchitectureDiagram diagram={featured.diagram} />
    </section>
  )
}
