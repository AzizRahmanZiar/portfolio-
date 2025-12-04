import cvFile from '../assets/Aziz Rahman CV.pdf';

function About() {
  const commitments = [
    'Clean, maintainable code that scales with your product.',
    'Beautiful UI design that matches your brand and feels modern.',
    'Smooth user experiences with performance best practices.',
    'Responsive layouts that look perfect on phones, tablets, and desktops.',
    'Clear, reliable communication and on-time delivery.',
  ];

  return (
    <section className='mx-auto max-w-5xl px-4 py-16 space-y-10'>
      <header className='space-y-4'>
        <h1 className='text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
          About Aziz Ziar
        </h1>
        <p className='text-base text-slate-300 leading-relaxed'>
          I build user-friendly websites with React, Tailwind CSS. As a beginner
          developer growing on Fiverr and remote platforms, I focus on clean
          layouts, readable code, and smooth flows that help people trust your
          brand.
        </p>
        <p className='text-base text-slate-300 leading-relaxed'>
          I can start from your idea, Figma design, or simple checklist. We plan
          the layout together, I code it step by step, send updates, and then we
          ship when you are happy.
        </p>
      </header>

      <div className='grid gap-8 lg:grid-cols-[1.1fr,0.9fr]'>
        <div className='space-y-4'>
          <div className='rounded-3xl border border-slate-800 bg-slate-900/40 p-6'>
            <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
              Profile
            </h2>
            <p className='text-sm text-slate-300'>
              I am Aziz Ziar, a frontend web developer who uses HTML, CSS,
              JavaScript, React, and Tailwind CSS. I build modern, responsive
              websites with a focus on clean UI, smooth performance, and easy
              navigation. I enjoy turning ideas into working products and
              helping clients grow online.
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
              <dd>Open to freelance, contract, and remote roles.</dd>
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
