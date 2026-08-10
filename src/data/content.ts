export interface Profile {
  name: string
  role: string
  kicker: string
  email: string
  linkedin: string
  github: string
  resume: string
  photo: string
  photoAlt: string
  photoPlaceholder: string
}

export interface Stat {
  value: string
  label: string
}

/** [plain, accent, plain] — the middle segment renders in the accent colour. */
export type Headline = [string, string, string]

export interface Hero {
  headline: Headline
  subline: string
  sublineBold: string
  stats: Stat[]
}

export interface FeaturedAnswer {
  q: string
  a: string
  /** Substring of `a` to emphasise. Must appear in `a` verbatim. */
  highlight?: string
}

export interface FeaturedLink {
  label: string
  href: string
  primary?: boolean
}

export interface DiagramNode {
  label: string
  meta: string
  highlight?: boolean
}

export interface Diagram {
  title: string
  nodes: DiagramNode[]
  outputs: string[]
  note: string
}

export interface Featured {
  label: string
  title: string
  qa: FeaturedAnswer[]
  links: FeaturedLink[]
  diagram: Diagram
}

/** Shared by `projects` and `ownership` — both render through ProjectCard. */
export interface Project {
  title: string
  body: string
  tags?: string[]
  outcome: string
}

export interface Fact {
  key: string
  value: string
  /** Renders the value in green with an availability dot. */
  available?: boolean
  /** Substring of `value` to bold. Must appear in `value` verbatim. */
  bold?: string
}

export interface HowIWorkItem {
  title: string
  body: string
}

export interface Contact {
  heading: string
  body: string
}

export interface NavItem {
  label: string
  href: string
}

export const profile: Profile = {
  name: 'Matthew Mulenga',
  role: 'Software engineer',
  kicker: 'Software engineer · backend & integrations · Saskatoon, SK · remote',
  email: 'matt.mulengawoo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mmulenga',
  github: 'https://www.github.com/mmulenga',
  resume: '/matthew-mulenga-resume.pdf',
  photo: '/matthew-mulenga.jpg',
  photoAlt: 'Matthew Mulenga',
  photoPlaceholder: 'Add photo'
}

export const hero: Hero = {
  // <mark> renders in the accent colour
  headline: ['Six years ', 'building and owning critical ', 'university systems.'],
  subline:
    "I'm Matthew. Since 2019 I've built and owned enterprise integrations, credential-delivery infrastructure and student-system applications at the University of Saskatchewan — usually as the only person on them. I'm looking for a product team where I can do that at a larger scale.",
  sublineBold: 'University of Saskatchewan',
  stats: [
    { value: '$200K+', label: 'annual revenue unlocked' },
    { value: '30,000+', label: 'identity records managed via pipeline' },
    { value: '6 yrs', label: 'shipping to production' },
    { value: '3', label: 'enterprise systems owned outright' }
  ]
}

export const featured: Featured = {
  label: 'Featured · designed and shipped · in production',
  title: "Connecting the University to Canada's national credential network",
  qa: [
    {
      q: 'The problem',
      a: 'Transcripts, confirmations of enrolment and graduation documents were standardless and not easily shareable between institutions. How could fellow institutions or employers verify the authenticity of a credential? The University had no digital channel into the national credential network that employers and other institutions were already using.'
    },
    {
      q: 'What I built',
      a: 'An API integration between the student information system and the national credential network, covering the full document lifecycle — request, generation, signing and delivery.'
    },
    {
      q: 'The result',
      a: 'Students get their digitally signed documents, on demand. The integration unlocked more than $200K in annual revenue for the University and is still the delivery path for every credential that leaves it.',
      highlight: 'unlocked more than $200K in annual revenue'
    },
    {
      q: 'What made it hard',
      a: "Credential data is unforgiving — a document that's wrong is worse than one that's late. Most of the work was in reconciliation and failure handling, not the happy path."
      // TODO: rewrite in Matt's own words. This is the line interviewers push hardest on.
    }
  ],
  links: [
    { label: 'Read the full case study', href: '#', primary: true }, // TODO: write this page
    { label: 'Architecture notes', href: '#' }
  ],
  diagram: {
    title: 'Credential delivery — request to student',
    nodes: [
      { label: 'Student information system', meta: 'Banner' },
      { label: 'Integration service', meta: 'Java · Mule · Dataweave', highlight: true },
      { label: 'National credential network', meta: 'REST API' }
    ],
    outputs: ['Transcript', 'Confirmation of Enrolment', 'Confirmation of Graduation'],
    note: 'Signed, verifiable documents delivered on demand — replacing a manual, paper-based process.'
  }
}

export const projects: Project[] = [
  {
    title: 'Identity data pipeline',
    body: 'Contact and identity data for every student, faculty member and staffer was syncing between the student system and the university data warehouse through a brittle legacy replication process. I replaced it with an API-driven pipeline.',
    tags: ['Java', 'Spring Boot', 'Oracle SQL', 'REST'],
    outcome: '30,000+ records centralised · legacy replication retired'
  },
  {
    title: 'Graduate progress tracker',
    body: "Graduate committees across the University were tracking student program progress on paper and in email. I built the web application from an empty repository — CAS single sign-on, and document upload wired into the document management system's API.",
    tags: ['Groovy', 'Grails', 'CAS SSO', 'PDF'],
    outcome: 'Built solo, ground up · used by committees university-wide'
  },
  {
    title: 'Confirmation of Graduation',
    body: 'I took over an application nobody owned and rewrote its document generation to produce PDFs from XML — including patching the embedded PDF library itself so the format could carry features it didn\'t support yet.',
    tags: ['Java', 'XML', 'PDF internals'],
    outcome: 'Full ownership · rewrite shipped without downtime'
  }
]

export const ownership: Project[] = [
  {
    title: 'Systems I own',
    body: "Document management, academic advising and degree audit — three enterprise systems where I'm responsible for customisations, upgrades and every bug that comes in. Team leads and developers on other teams route questions about them to me.",
    outcome: 'Subject matter expert across three teams'
  },
  {
    title: 'Mentoring & documentation',
    body: "Onboarded and mentored two developers onto systems that had almost no written record, and wrote the API and integration documentation that hadn't existed — partly so the next person wouldn't have to ask me.",
    outcome: "2 developers ramped · documentation now the team's reference"
  }
]

export const facts: Fact[] = [
  { key: 'Available', value: 'Open to new roles — interviewing now', available: true }, // TODO: confirm wording if job-searching quietly
  {
    key: 'Looking for',
    value:
      'Mid to senior backend or full-stack engineer. Teams building integrations, platform services or data infrastructure. I want more people around me than I\'ve had — code review, design discussion, and engineers to learn from.',
    bold: 'Mid to senior backend or full-stack engineer.'
  },
  {
    key: 'Location',
    value: 'Saskatoon, SK (Central). Six years fully remote — remote-first teams are where I do my best work. Open to hybrid in Saskatoon.',
    bold: 'Six years fully remote'
  },
  { key: 'Work authorization', value: 'Authorized to work in Canada.' }, // TODO: confirm
  { key: 'Strongest in', value: 'Java · Spring Boot · Groovy / Grails · Oracle SQL · REST API design · Python' },
  { key: 'Also worked with', value: 'Rust · JavaScript · HTML / CSS · Bash · Git · Docker · AWS' },
  { key: 'Currently', value: 'Programmer, University of Saskatchewan — October 2019 to present' },
  { key: 'Education', value: 'B.Sc. Computer Science, University of Saskatchewan, 2019' },
  {
    key: 'Interview process',
    value: 'Happy to do a take-home, pair on a live problem, or walk through any of the above in detail on a call. References available.'
  }
]

export const howIWork: HowIWorkItem[] = [
  {
    title: 'I take ownership, not tickets',
    body: "Every project above came to me as a problem, not a spec. I've been the only person on systems the University depends on, which means design, delivery, on-call and the boring maintenance are all the same job to me."
  },
  {
    title: 'I write things down',
    body: 'I inherited systems with no documentation and no one left to ask. So I document APIs and integrations as I build them. It\'s the cheapest thing you can do for the person who maintains it next — including future me.'
  },
  {
    title: 'Integrations are a discipline',
    body: 'Most of my work lives between systems that were never designed to talk to each other. The interesting engineering is in reconciliation, idempotency, and what happens when the other side is down — not the happy path.'
  },
  {
    title: 'Remote since 2019',
    body: "Six years of it, before it was normal. I communicate in writing by default, over-share status, and don't need to be in a room to be reachable."
  }
]

export const contact: Contact = {
  heading: 'Hiring backend or platform engineers?',
  body: "Email is fastest — I reply within a day. Happy to talk about what I've built in more detail than a résumé allows."
}

export const nav: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Facts', href: '#facts' },
  { label: 'How I work', href: '#how' }
]
