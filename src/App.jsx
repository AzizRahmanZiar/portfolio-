// 'use client';

// import { useState } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Skills from './pages/Skills.jsx';
// import Projects from './pages/Projects.jsx';
// import Contact from './pages/Contact.jsx';
// import Services from './pages/Services.jsx';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/services', label: 'Services' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <div className='min-h-screen bg-slate-950 text-slate-100'>
//       <div className='pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%)]' />

//       {/* Navbar */}
//       <header className='sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur'>
//         <nav className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3'>
//           <span className='text-sm font-semibold tracking-widest text-sky-400'>
//             AZIZ ZIAR
//           </span>

//           {/* Desktop Navigation */}
//           <div className='hidden gap-6 text-sm text-slate-300 md:flex'>
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition-colors ${
//                     isActive ? 'text-sky-400' : 'hover:text-sky-400'
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className='flex flex-col gap-1.5 md:hidden'
//             aria-label='Toggle menu'
//           >
//             <span
//               className={`block h-0.5 w-6 bg-sky-400 transition-all ${
//                 isMenuOpen ? 'translate-y-2 rotate-45' : ''
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-6 bg-sky-400 transition-all ${
//                 isMenuOpen ? 'opacity-0' : ''
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-6 bg-sky-400 transition-all ${
//                 isMenuOpen ? '-translate-y-2 -rotate-45' : ''
//               }`}
//             />
//           </button>
//         </nav>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className='border-t border-slate-800 bg-slate-900/95 backdrop-blur md:hidden'>
//             <div className='mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4'>
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `transition-colors ${
//                       isActive
//                         ? 'text-sky-400'
//                         : 'text-slate-300 hover:text-sky-400'
//                     }`
//                   }
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       <main className='pb-16'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/skills' element={<Skills />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/projects' element={<Projects />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//       </main>

//       <footer className='mx-auto flex max-w-5xl flex-col gap-4 border-t border-slate-800 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
//         <span>© 2025 Aziz Ziar.</span>
//         <span>Built with React & Tailwind CSS.</span>
//       </footer>
//     </div>
//   );
// }

// export default App;

'use client';

import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%)]' />

      {/* Navbar */}
      <header className='sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur'>
        <nav className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3'>
          <span className='text-sm font-semibold tracking-widest text-sky-400'>
            AZIZ ZIAR · FULL STACK
          </span>

          {/* Desktop Navigation */}
          <div className='hidden gap-6 text-sm text-slate-300 md:flex'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? 'text-sky-400' : 'hover:text-sky-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='flex flex-col gap-1.5 md:hidden'
            aria-label='Toggle menu'
          >
            <span
              className={`block h-0.5 w-6 bg-sky-400 transition-all ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-sky-400 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-sky-400 transition-all ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='border-t border-slate-800 bg-slate-900/95 backdrop-blur md:hidden'>
            <div className='mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4'>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? 'text-sky-400'
                        : 'text-slate-300 hover:text-sky-400'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className='pb-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <footer className='mx-auto flex max-w-5xl flex-col gap-4 border-t border-slate-800 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
        <span>© 2025 Aziz Ziar.</span>
        <span>Built with React, Laravel & Tailwind CSS.</span>
      </footer>
    </div>
  );
}

export default App;
