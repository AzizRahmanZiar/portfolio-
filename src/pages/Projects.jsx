function Projects() {
  const projects = [
    {
      title: 'TMS',
      subtitle: 'Task Management System',
      description:
        'A simple task management system where users can create, update, and organize tasks. Built to practice clean UI and basic CRUD flows.',
      highlights: [
        'Organizes tasks with clear status and basic filters.',
        'Good example of component reuse and layout structure.',
      ],
      github: 'https://github.com/AzizRahmanZiar/TMS',
    },
    {
      title: 'SaaS Note-taking App',
      subtitle: 'SaaS_Note-taking_App',
      description:
        'A note-taking interface inspired by SaaS tools. Users can create and view notes in a clean, focused layout.',
      highlights: [
        'Shows how I structure forms, lists, and detail views.',
        'Uses modern styling for a clean, distraction-free UI.',
      ],
      github: 'https://github.com/AzizRahmanZiar/SaaS_Note-taking_App',
    },
    {
      title: 'School Management System',
      subtitle: 'School-management-system',
      description:
        'Frontend for a simple school management system with sections for students, classes, and basic records.',
      highlights: [
        'Demonstrates table layouts and simple navigation patterns.',
        'Useful example for admin-style interfaces.',
      ],
      github: 'https://github.com/AzizRahmanZiar/School-management-system',
    },
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
          Recent work
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Real projects built with real tools.
        </h1>
        <p className="max-w-3xl text-base text-slate-300">
          Here are a few examples that show how I design, code, and ship
          responsive interfaces. Want more details? Message me and I’ll share
          live demos or GitHub links.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-sky-400/60 hover:bg-slate-900/70"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {project.subtitle}
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              {project.title}
            </h2>
            <p className="mt-4 text-sm text-slate-300">{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                View on GitHub →
              </a>
            )}
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


