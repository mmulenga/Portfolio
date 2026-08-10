import { facts } from '../data/content'
import type { Fact } from '../data/content'
import SectionHeading from './SectionHeading'

interface ValueProps {
  fact: Fact
}

function Value({ fact }: ValueProps) {
  if (fact.available) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-go">
        <i className="inline-block size-[7px] rounded-full bg-go" />
        {fact.value}
      </span>
    )
  }

  if (fact.bold) {
    const [pre, post] = fact.value.split(fact.bold)
    return (
      <>
        {pre}
        <b className="font-semibold">{fact.bold}</b>
        {post}
      </>
    )
  }

  return <>{fact.value}</>
}

export default function FactsSection() {
  return (
    <section id="facts" className="py-19">
      <div className="mx-auto w-full max-w-page px-7">
        <SectionHeading kicker="For the recruiter doing a 30-second scan" title="The facts" />

        <table className="w-full border-collapse overflow-hidden rounded-[14px] border border-line bg-paper">
          <tbody>
            {facts.map((fact) => (
              <tr key={fact.key} className="border-b border-line-soft last:border-b-0">
                <th
                  scope="row"
                  className="w-[230px] px-[22px] pt-4 pb-4 text-left align-top font-mono
                             text-[11px] font-normal uppercase tracking-[0.1em] text-ash
                             max-md:block max-md:w-auto max-md:pb-0.5"
                >
                  {fact.key}
                </th>
                <td
                  className="px-[22px] pt-4 pb-4 text-left align-top text-[15px] leading-[1.58]
                             max-md:block max-md:pt-0.5"
                >
                  <Value fact={fact} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
