function Projects() {
  const projects = [
    {
      title: 'TMS',
      github: 'https://github.com/AzizRahmanZiar/TMS',
      liveDemo: '',
    },
    {
      title: 'SaaS Note-taking App',
      github: 'https://github.com/AzizRahmanZiar/SaaS_Note-taking_App',
      liveDemo: '',
    },
    {
      title: 'School Management System',
      github: 'https://github.com/AzizRahmanZiar/School-management-system',
      liveDemo: '',
    },
    {
      title: 'TODO List',
      github: 'https://github.com/AzizRahmanZiar/TODO-List.git',
      liveDemo: 'https://todo-list-five-theta-64.vercel.app',
    },
    {
      title: 'Calculator',
      github: 'https//github.com/AzizRahmanZiar/Calculator.git',
      liveDemo: 'https://calculator-phi-swart-99.vercel.app',
    },
  ];

  return (
    <section className='mx-auto max-w-5xl px-4 py-16 space-y-10'>
      <header className='space-y-3'>
        <p className='text-xs font-semibold uppercase tracking-[0.4em] text-slate-400'>
          Recent work
        </p>
        <h1 className='text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
          Real projects built with real tools.
        </h1>
        <p className='max-w-3xl text-base text-slate-300'>
          Here are a few examples that show how I design, code, and ship
          responsive interfaces. Want more details? Message me and I’ll share
          live demos or GitHub links.
        </p>
      </header>

      <div className='grid gap-6'>
        {projects.map((project) => (
          <article
            key={project.title}
            className='rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-sky-400/60 hover:bg-slate-900/70'
          >
            <h2 className='text-2xl font-semibold text-slate-50'>
              {project.title}
            </h2>
            <p className='mt-4 text-sm text-slate-300'>{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='mt-3 inline-flex text-sm font-semibold text-sky-400 hover:text-sky-300'
              >
                View on GitHub →
              </a>
            )}
            <a
              href={project.liveDemo}
              target='_blank'
              rel='noreferrer'
              className='mt-3 flex text-sm font-semibold text-sky-400 hover:text-sky-300'
            >
              Live Demo
            </a>
            {/* <ul className='mt-4 space-y-2 text-sm text-slate-300'>
              {project.highlights.map((item) => (
                <li key={item} className='flex items-start gap-2'>
                  <span className='mt-1 h-1.5 w-1.5 rounded-full bg-sky-400' />
                  <span>{item}</span>
                </li>
              ))}
            </ul> */}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
