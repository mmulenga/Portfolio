import { Fragment } from 'react'

/**
 * Flat CSS diagram used instead of a screenshot — the real systems are
 * internal, so nothing confidential can be shown.
 */
export default function ArchitectureDiagram({ diagram }) {
  return (
    <div className="flex h-full items-center bg-linear-[160deg] from-[#f4f6f9] to-[#e3e8ef] px-[34px] py-[38px]">
      <div className="w-full rounded-xl bg-white px-[22px] py-6 shadow-[0_24px_60px_-22px_rgba(16,20,26,0.3)]">
        <p className="mb-[18px] font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa3af]">
          {diagram.title}
        </p>

        {diagram.nodes.map((node) => (
          <Fragment key={node.label}>
            <div className={`mm-node${node.highlight ? ' mm-node-highlight' : ''}`}>
              <span>{node.label}</span>
              <em>{node.meta}</em>
            </div>
            <div className="mm-connector" />
          </Fragment>
        ))}

        <div className="grid grid-cols-3 gap-2">
          {diagram.outputs.map((out) => (
            <div className="mm-node" key={out}>
              {out}
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-[10.5px] leading-[1.6] text-[#9aa3af]">{diagram.note}</p>
      </div>
    </div>
  )
}
