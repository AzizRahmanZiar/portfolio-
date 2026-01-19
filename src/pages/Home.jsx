import { Link } from 'react-router-dom';
import profilePhoto from '../assets/aziz.jpg';

function Home() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl' />

      <div className='mx-auto max-w-5xl px-4 py-16 lg:flex lg:items-center lg:gap-20'>
        <div className='flex-1 space-y-6'>
          <span className='inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400'>
            Remote · Full-stack
          </span>

          <div className='space-y-4'>
            <p className='text-sm font-semibold text-slate-300'>
              Hi, I&apos;m Aziz Ziar.
            </p>

            <h1 className='text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl'>
              I build complete web applications with React, Laravel, and
              Tailwind CSS.
            </h1>

            <p className='max-w-xl text-base leading-relaxed text-slate-300'>
              From clean user interfaces to powerful backend logic, I create
              fast, secure, and scalable web apps. Whether you need a landing
              page, dashboard, or full CRUD system, I can design, develop, and
              deploy everything remotely.
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
            <p className='text-sm text-center font-semibold uppercase tracking-[0.3em] text-slate-400'>
              Full-stack & problem solver
            </p>

            <div className='mt-6 flex justify-center'>
              <img
                src={profilePhoto}
                alt='Aziz Ziar'
                className='h-80 w-80 rounded-full ring-4 ring-slate-700'
              />
            </div>

            <div className='mt-6 space-y-4'>
              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Frontend & backend
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  Modern React UI connected to Laravel APIs with clean,
                  maintainable code.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Database & logic
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  Authentication, CRUD systems, and business logic built with
                  Laravel and MySQL.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 p-5'>
                <p className='text-[13px] font-semibold text-slate-50'>
                  Remote delivery
                </p>
                <p className='mt-2 text-sm text-slate-400'>
                  Clear communication, regular updates, and smooth remote
                  collaboration.
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
