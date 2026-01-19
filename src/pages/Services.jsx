const services = [
  {
    title: 'Full-stack website development',
    description:
      'Design and build complete websites with React frontend and Laravel backend, including databases and authentication.',
  },
  {
    title: 'Custom web applications',
    description:
      'Full-stack web apps, dashboards, and admin panels powered by React, Laravel, and REST APIs.',
  },
  {
    title: 'Figma/XD to full-stack implementation',
    description:
      'Convert designs into production-ready React UIs connected to Laravel APIs and databases.',
  },
  {
    title: 'Website & system upgrades',
    description:
      'Improve UI, refactor backend logic, add new features, and modernize existing PHP or Laravel systems.',
  },
  {
    title: 'Bug fixing & performance optimization',
    description:
      'Fix frontend and backend issues, optimize queries, improve load speed, and clean up legacy code.',
  },
];

function Services() {
  return (
    <section className='mx-auto max-w-5xl px-4 py-16 space-y-8'>
      <header className='space-y-3 text-center'>
        <p className='text-xs font-semibold uppercase tracking-[0.4em] text-slate-400'>
          Services
        </p>
        <h1 className='text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
          Full-stack services that get results.
        </h1>
        <p className='mx-auto max-w-3xl text-base text-slate-300'>
          I handle both frontend and backend development, from UI to APIs and
          databases. Every project gets clean code, clear updates, and a smooth
          delivery process.
        </p>
      </header>

      <div className='grid gap-5 md:grid-cols-2'>
        {services.map((service) => (
          <article
            key={service.title}
            className='rounded-3xl border border-slate-800 bg-slate-900/40 p-5'
          >
            <h2 className='text-base font-semibold text-slate-50'>
              {service.title}
            </h2>
            <p className='mt-2 text-sm text-slate-300'>{service.description}</p>
          </article>
        ))}
      </div>

      <div className='rounded-3xl border border-slate-800 bg-slate-900/30 p-6 text-center'>
        <p className='text-sm text-slate-300'>
          Need something custom like an admin dashboard, API integration, or
          database-driven system? I can build solutions tailored to your goals.
        </p>
        <a
          href='mailto:azizziar1405@gmail.com'
          className='mt-4 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300'
        >
          Discuss your project →
        </a>
      </div>
    </section>
  );
}

export default Services;
