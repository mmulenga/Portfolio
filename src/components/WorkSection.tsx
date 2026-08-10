import { projects, ownership } from '../data/content'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function WorkSection() {
  return (
    <section id="work" className="py-19">
      <div className="mx-auto w-full max-w-page px-7">
        <SectionHeading
          kicker="Selected work"
          title="Built, owned, still running"
          sub="All of this is internal university software, so there's no public repo to link. Each one has a write-up instead: the problem, the decisions, and what I'd do differently."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {ownership.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
