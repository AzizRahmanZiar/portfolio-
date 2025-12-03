import { Link } from 'react-router-dom';
import profilePhoto from '../assets/aziz.jpg';

function Home() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl' />

      <div className='mx-auto max-w-5xl px-4 py-16 lg:flex lg:items-center lg:gap-20'>
        <div className='flex-1 space-y-6'>
          <span className='inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400'>
            Remote · Frontend
          </span>
          <div className='space-y-4'>
            <p className='text-sm font-semibold text-slate-300'>
              Hi, I&apos;m Aziz Ziar.
            </p>
            <h1 className='text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl'>
              I build modern, responsive websites with React, Next.js, Tailwind
              CSS, and JavaScript.
            </h1>
            <p className='max-w-xl text-base leading-relaxed text-slate-300'>
              I keep things clean, fast, and friendly for phones, tablets, and
              desktops. Need a landing page, personal brand site, or simple web
              app so you can look professional online? I can design it, code it,
              and ship it fully remote.
            </p>
          </div>

          <div className='flex flex-wrap gap-4'>
            <Link
              to='/projects'
              className='rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300'
            >
              View my work
            </Link>
            <Link
              to='/contact'
              className='rounded-full border border-slate-700 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400'
            >
              Contact me
            </Link>
          </div>

          <dl className='grid gap-6 sm:grid-cols-3'>
            {[
              { label: 'Years building', value: '4+' },
              { label: 'Web projects', value: '4+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className='rounded-2xl border border-slate-800 bg-slate-950/50 p-4'
              >
                <dt className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                  {stat.label}
                </dt>
                <dd className='text-2xl font-semibold text-slate-50'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className='mt-12 flex-1 lg:mt-0'>
          <div className='rounded-[32px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-sky-500/10'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>
              Friendly & ready to help
            </p>
            <div className='mt-6 flex justify-center'>
              <img
                src={profilePhoto}
                alt='Aziz Ziar'
                className='h-64 w-60 rounded-[28px] ring-1 ring-slate-700'
              />
            </div>
            <div className='mt-6 space-y-4'>
              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Frontend focus
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  Reusable components, Tailwind styling, and readable JavaScript
                  that anyone can maintain.
                </p>
              </div>
              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Beginner advantage
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  Extra attention to detail, daily updates, and flexible pricing
                  while I grow online.
                </p>
              </div>
              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Remote ready
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  I can work through Fiverr, email, or WhatsApp—whatever is
                  easier for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
