import cvFile from '../assets/Aziz Rahman CV.pdf';

function About() {
  const commitments = [
    'Clean, maintainable frontend and backend code that scales with your product.',
    'Well-structured APIs and databases built with Laravel best practices.',
    'Modern UI design combined with solid backend logic.',
    'Responsive, secure, and performant web applications.',
    'Clear communication, regular updates, and on-time delivery.',
  ];

  return (
    <section className='mx-auto max-w-5xl px-4 py-16 space-y-10'>
      <header className='space-y-4'>
        <h1 className='text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
          About Aziz Ziar
        </h1>

        <p className='text-base text-slate-300 leading-relaxed'>
          I build complete web applications using React, Tailwind CSS, and
          Laravel. As a growing full-stack developer working remotely, I focus
          on clean architecture, readable code, and reliable systems that help
          businesses run smoothly online.
        </p>

        <p className='text-base text-slate-300 leading-relaxed'>
          Whether you have an idea, Figma design, or a simple feature list, I
          can handle both frontend and backend development. We plan the
          structure together, I build it step by step, share progress, and
          deliver when everything works as expected.
        </p>
      </header>

      <div className='grid gap-8 lg:grid-cols-[1.1fr,0.9fr]'>
        <div className='space-y-4'>
          <div className='rounded-3xl border border-slate-800 bg-slate-900/40 p-6'>
            <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
              Profile
            </h2>
            <p className='text-sm text-slate-300'>
              I am Aziz Ziar, a full-stack web developer working with React on
              the frontend and Laravel on the backend. I build responsive user
              interfaces, REST APIs, authentication systems, and database-driven
              applications. I enjoy turning ideas into reliable products and
              helping clients grow with solid web solutions.
            </p>
          </div>

          <div className='rounded-3xl border border-slate-800 bg-slate-900/40 p-6'>
            <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
              What I’m committed to
            </h2>
            <ul className='mt-4 space-y-3 text-sm text-slate-300'>
              {commitments.map((item) => (
                <li key={item} className='flex items-start gap-2'>
                  <span className='mt-1 h-1.5 w-1.5 rounded-full bg-sky-400' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6'>
          <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
            Fast facts
          </h2>

          <dl className='space-y-4 text-sm text-slate-300'>
            <div>
              <dt className='text-xs uppercase tracking-[0.3em] text-slate-500'>
                Based in
              </dt>
              <dd className='text-base text-slate-50'>Afghanistan · Remote</dd>
            </div>

            <div>
              <dt className='text-xs uppercase tracking-[0.3em] text-slate-500'>
                Availability
              </dt>
              <dd>Open to freelance, contract, and remote full-stack roles.</dd>
            </div>

            <div>
              <dt className='text-xs uppercase tracking-[0.3em] text-slate-500'>
                Resume
              </dt>
              <dd>
                <a
                  href={cvFile}
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 font-semibold hover:text-sky-300'
                >
                  Download my resume (PDF)
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
