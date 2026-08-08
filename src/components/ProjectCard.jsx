export default function ProjectCard({ title, body, tags = [], outcome }) {
  return (
    <div className="mm-card">
      <h3 className="mb-2.5 text-[21px] font-extrabold">{title}</h3>

      <p className="mb-4 text-[15px] leading-[1.66] text-copy">{body}</p>

      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span className="mm-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-sm font-semibold leading-[1.5] text-sig">{outcome}</div>
    </div>
  )
}
