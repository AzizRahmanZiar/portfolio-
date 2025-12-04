const services = [
  {
    title: 'Custom website development',
    description:
      'Design and build responsive marketing sites, portfolio experiences, and high-converting landing pages.',
  },
  {
    title: 'React web apps',
    description:
      'Single-page applications, dashboard interfaces, and component-driven products powered by React.',
  },
  {
    title: 'Figma/XD to production-ready code',
    description:
      'Pixel-perfect implementation of your design files using Tailwind CSS, Bootstrap, or custom CSS.',
  },
  {
    title: 'Website redesign & UI improvements',
    description:
      'Modernize legacy layouts, improve UX flows, and refresh visual systems without disrupting existing data.',
  },

  {
    title: 'Bug fixing & performance tuning',
    description:
      'Audit existing codebases, fix layout issues, improve Core Web Vitals, and clean up CSS debt.',
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
          Simple services that get results.
        </h1>
        <p className='mx-auto max-w-3xl text-base text-slate-300'>
          I can design, code, fix, or refresh your website. Every project gets
          clean code, clear updates, and a friendly process.
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
          Need something custom like an Upwork/Fiverr profile, resume? I can
          prepare deliverables that fit your exact goals.
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
