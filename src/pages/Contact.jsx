function Contact() {
  return (
    <section className='mx-auto max-w-5xl px-4 py-16 space-y-10'>
      <header className='space-y-3'>
        <p className='text-xs font-semibold uppercase tracking-[0.4em] text-slate-400'>
          Availability
        </p>
        <h1 className='text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
          New projects, collaborations, and interesting conversations.
        </h1>
        <p className='max-w-3xl text-base text-slate-300'>
          Tell me about your roadmap, timelines, and success metrics—I’ll share
          how I can help.
        </p>
      </header>

      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-6'>
          <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
            Quick links
          </h2>
          <div className='space-y-4 text-sm text-slate-200'>
            <p>
              <span className='font-medium text-slate-100'>Email</span>
              <br />
              <a
                href='mailto:azizziar1405@gmail.com'
                className='text-sky-400 hover:underline'
              >
                azizziar1405@gmail.com
              </a>
            </p>
            <p>
              <span className='font-medium text-slate-100'>Fiverr</span>
              <br />
              <a
                href='https://www.fiverr.com/azizziar'
                className='text-sky-400 hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                fiverr.com/azizziar
              </a>
            </p>
            <p className='flex flex-col'>
              <span className='font-medium text-slate-100'>Phone</span>

              <a
                href='tel:+93702492682'
                className='text-sky-400 hover:underline'
              >
                +93 702 492 682
              </a>

              <a
                href='tel:+93747214110'
                className='text-sky-400 hover:underline'
              >
                +93 747 214 110
              </a>
            </p>

            <p className='flex flex-col'>
              <span className='font-medium text-slate-100'>Social</span>

              <a
                href='https://github.com/AzizRahmanZiar'
                className='text-sky-400 hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                github.com/AzizRahmanZiar
              </a>
              <a
                href='https://www.linkedin.com/in/AzizZiar'
                className='text-sky-400 hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                linkedin.com/in/AzizZiar
              </a>
            </p>
          </div>

          <div className='rounded-2xl border border-slate-800 bg-slate-950/40 p-5'>
            <p className='text-[13px] font-semibold uppercase tracking-[0.3em] text-slate-400'>
              Typical engagement
            </p>
            <ul className='mt-3 space-y-3 text-sm text-slate-300'>
              <li>• 4–12 week sprint-based collaborations</li>
              <li>• Hands-on with design, build, QA, and docs</li>
              <li>• Weekly async updates + milestone demos</li>
            </ul>
          </div>
        </div>
        <div className='space-y-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6'>
          <h2 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
            Prefer email or WhatsApp
          </h2>
          <p className='text-sm text-slate-300'>
            This is a frontend-only portfolio, so the quickest way to reach me
            is directly by email or WhatsApp. Share a short brief, link, or
            voice note and I’ll reply within 12 hours.
          </p>
          <div className='flex flex-wrap gap-3'>
            <a
              href='mailto:azizziar1405@gmail.com'
              className='inline-flex flex-1 items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300'
            >
              Email Aziz
            </a>
            <a
              href='https://www.fiverr.com/azizziar'
              className='inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400'
              target='_blank'
              rel='noreferrer'
            >
              Fiverr message
            </a>
          </div>
          <div className='rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-sm text-slate-300'>
            <p className='font-semibold text-slate-100'>WhatsApp</p>
            <p>+93 702 492 682</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
