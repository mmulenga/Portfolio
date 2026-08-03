import { howIWork } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function HowIWorkSection() {
  return (
    <section id="how" className="py-19">
      <div className="mx-auto w-full max-w-page px-7">
        <SectionHeading kicker="Working with me" title="How I work" />

        <div className="grid gap-5 md:grid-cols-2">
          {howIWork.map((item) => (
            <div className="mm-card" key={item.title}>
              <h3 className="mb-2.5 text-[21px] font-extrabold">{item.title}</h3>
              <p className="text-[15px] leading-[1.66] text-copy">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
