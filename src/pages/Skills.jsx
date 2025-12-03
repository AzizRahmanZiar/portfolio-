function Skills() {
  const sections = [
    {
      title: 'Frontend development',
      skills: [
        'HTML5, CSS3, modern layout techniques',
        'JavaScript (ES6+), TypeScript basics',
        'Responsive web design & cross-browser testing',
      ],
    },
    {
      title: 'Frameworks & libraries',
      skills: [
        'React.js with hooks and routing',
        'Next.js for SEO-friendly, production-ready apps',
        'Tailwind CSS, Bootstrap, custom component systems',
      ],
    },
    {
      title: 'Tools & workflow',
      skills: [
        'Git & GitHub, npm / yarn',
        'REST API integration, async data fetching',
        'VS Code, Figma to code handoff, Notion docs',
      ],
    },
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 space-y-10">
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
          Skills & tools
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Everything you need for a solid frontend.
        </h1>
        <p className="mx-auto max-w-3xl text-base text-slate-300">
          I focus on clean layouts, fast code, and simple workflows that keep
          projects moving without stress.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {section.skills.map((skill) => (
                <li key={skill} className="leading-relaxed">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills


