import Resume from './components/resume';
import React, { useState, useEffect } from 'react';
import { Github, Mail, ShieldCheck, GraduationCap, ExternalLink, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "HJM-Built-It Shop",
      desc: "E-commerce engine with real-time stock management.",
      image: "/images/HJM.jpg",
      link: "https://hjm-build-it-online-store.vercel.app/",
      color: "bg-slate-900"
    },
    {
      title: "Weather App",
      desc: "Real-time weather tracking with location services.",
      image: "/images/Weather Pro.png",
      link: "https://hjm-built-weather.vercel.app/",
      color: "bg-blue-600"
    },
    {
      title: "Job Tracker Pro",
      desc: "Cloud-synced career manager for modern professionals.",
      image: "/images/JobTracker.jpg",
      link: "https://hjm-built-jobtrackerpro.vercel.app/",
      color: "bg-emerald-600"
    },
    {
      title: "Movie Vault Pro",
      desc: "Personal cinema database and watchlist manager.",
      image: "/images/Movie Vault Pro.png",
      link: "https://movie-vault-react.vercel.app/",
      color: "bg-slate-800"
    },
    {
      title: "Harley-Kristin Mix Tape",
      desc: "A Mix Tape Birthday Gift remembering our memories.",
      image: "/images/Gift.png",
      link: "https://hjm-birthday-gift.vercel.app/",
      color: "bg-emerald-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      
      {/* --- WEBSITE CONTENT (HIDDEN ON PRINT) --- */}
      <div className="print:hidden">
        
        {/* NAVIGATION */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">H</div>
              <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">Macadaeg<span className="text-blue-600">.</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#certifications" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Certifications</a>

              <a 
                href="#contact" 
                className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Designing <span className="text-blue-600">Futures</span>,<br /> 
                Coding <span className="text-emerald-500 italic">Solutions.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                I am a <strong>Licensed Professional Teacher</strong> and <strong>Full-Stack Developer</strong> specialized in React and Supabase. I build systems that are as educational as they are functional.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                  View My Projects
                </a>
                <div className="flex gap-2">
                  <a href="https://github.com/harleymarmacadaeg-star" target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 transition-all">
                    <Github size={24} />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harleymarmacadaeg@gmail.com" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 transition-all">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 w-full aspect-square max-w-[420px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-white border-8 border-white">
                <img 
                  src="/images/profilepic.png" 
                  alt="Harleymar J. Macadaeg" 
                  className="w-full h-full object-cover object-top -rotate-3 scale-125 origin-center" 
                />
              </div>
              
              <div className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase leading-none">Certified</div>
                  <div className="text-sm font-bold text-slate-900">CSS NC II Trainer</div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase leading-none">Licensed</div>
                  <div className="text-sm font-bold text-slate-900">Prof. Teacher (LPT)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
       {/* PROJECTS SECTION */}
<section id="projects" className="py-24 bg-white overflow-hidden scroll-mt-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Featured Work</h2>
        <p className="text-slate-500 font-medium max-w-md">
          A selection of enterprise-ready applications and personal digital experiences.
        </p>
      </div>
      <div className="text-right">
        <span className="text-5xl font-black text-slate-100 block leading-none">05</span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Total Projects</span>
      </div>
    </div>

    {/* Improved: Scale only on desktop (md:), full size on mobile for better readability */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 transform md:scale-95 origin-top transition-transform duration-500">
      {projects.map((project, idx) => (
        <motion.div 
          whileHover={{ y: -10 }}
          key={idx} 
          className={`
            ${project.color} rounded-[2.5rem] p-8 h-[380px] relative overflow-hidden group shadow-xl transition-all duration-500
            ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'}
          `}
        >
          <div className="relative z-30 h-full flex flex-col justify-between">
            <div className="bg-gradient-to-b from-black/40 via-transparent to-transparent -m-8 p-8 rounded-t-[2.5rem]">
              <h3 className="text-xl font-black text-white mb-2 leading-tight">{project.title}</h3>
              <p className="text-white/80 text-xs font-medium max-w-[180px]">{project.desc}</p>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-slate-900 transition-all w-fit shadow-lg"
            >
              View Project <ExternalLink size={12} />
            </a>
          </div>
          
          <div className={`
            absolute z-10 transition-transform duration-700 ease-out
            ${idx < 2 
              ? 'top-1/2 right-1/2 translate-x-1/2 -translate-y-[40%] w-[85%] h-[85%]' 
              : 'top-1/2 right-0 translate-x-6 -translate-y-28 w-[100%] h-full'
            }
            group-hover:scale-110
          `}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]" 
              // Added Fallback: Shows a clean placeholder if the image file is missing
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Preview+Coming+Soon";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* EXPERIENCE ROADMAP SECTION */}
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-16 text-center">Professional Roadmap</h2>
            <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              {[
                { school: "Sangbay Integrated School", role: "ICT Teacher / IT Specialist", date: "2025 - PRESENT", active: true },
                { school: "S Two Dolorin Training Institute", role: "Part Time Trainer – JDVP (CSS NC II)", date: "NOV - DEC 2025", active: false },
                { school: "Municipal Tourism Nagtipunan", role: "Digital Media / IT Staff", date: "2024 - 2025", active: false },
                { school: "Quirino State University", role: "ICT Teacher / Computer Lab Manager", date: "2017 - 2021", active: false },
                { school: "Saint Mary's Academy", role: "ICT Teacher / Computer Lab Manager / Assistant Registrar", date: "2015 - 2017", active: false }
              ].map((job, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${job.active ? 'bg-blue-600' : 'bg-slate-300'}`}>
                    {job.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white shadow-xl border border-slate-100 ${!job.active && 'opacity-80'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-black text-slate-900 text-sm">{job.school}</div>
                      <time className={`font-black text-[9px] uppercase px-2 py-1 rounded-lg ${job.active ? 'text-blue-600 bg-blue-50' : 'text-slate-400 bg-slate-50'}`}>{job.date}</time>
                    </div>
                    <div className="text-xs font-bold text-slate-500">{job.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-24 bg-slate-50 scroll-mt-24">
          <div className="scale-90 md:scale-75 lg:scale-85 transition-transform origin-top">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Professional Credentials</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                Validated expertise in Computer Systems, Teaching Methodology, and Professional Education.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { title: "CSS NC II", subtitle: "Computer Systems Servicing", img: "/images/css-ncii.jfif", accent: "from-blue-600 to-blue-400", isPortrait: false },
                { title: "TM I", subtitle: "Trainers Methodology", img: "/images/tmi.jfif", accent: "from-emerald-600 to-emerald-400", isPortrait: false },
                { title: "LPT", subtitle: "Licensed Professional Teacher", img: "/images/LPT.jpg", accent: "from-slate-800 to-slate-600", isPortrait: true }
              ].map((cert, idx) => (
                <motion.div key={idx} whileHover={{ y: -15 }} className="relative group w-full sm:w-80">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${cert.accent} rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
                  <div className="relative bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 h-full flex flex-col items-center text-center">
                    <div className={`w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 shadow-inner relative ${!cert.isPortrait ? 'bg-slate-50 p-4' : 'bg-slate-100'}`}>
                       <img src={cert.img} alt={cert.title} className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${cert.isPortrait ? 'object-cover' : 'object-contain'}`} />
                       <div className="absolute top-3 right-3 bg-white/90 backdrop-blur shadow-sm p-2 rounded-xl z-10"><ShieldCheck size={18} className="text-blue-600" /></div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-black text-slate-900 text-2xl tracking-tight leading-none">{cert.title}</h3>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cert.subtitle}</p>
                    </div>
                    <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${cert.accent}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<Resume />
        {/* CONTACT SECTION - Direct Connect Version */}
<section id="contact" className="py-24 bg-slate-900 overflow-hidden relative scroll-mt-24">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
  <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
    
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
        Let's Build the <span className="text-blue-500">Future</span> Together
      </h2>
      <p className="text-slate-400 font-medium max-w-xl mx-auto text-lg leading-relaxed">
        I'm currently available for ICT consultancy, full-stack development roles, and educational technology partnerships.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3.5rem] max-w-4xl mx-auto shadow-2xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Email Focus */}
        <div className="text-left space-y-8">
          <div className="space-y-3">
            <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs">Get in Touch</p>
            <h3 className="text-white text-3xl font-black">Have a project?</h3>
            <p className="text-slate-400 text-sm">Click below to send me an email directly. I usually respond within 24 hours.</p>
          </div>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harleymarmacadaeg@gmail.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20 group"
          >
            <Mail className="group-hover:rotate-12 transition-transform" />
            EMAIL ME NOW
          </a>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 gap-4">
          <a href="https://web.facebook.com/harleymar.macadaeg" target="_blank" rel="noreferrer" className="group bg-white/5 p-6 rounded-3xl hover:bg-blue-600 transition-all duration-300 flex flex-col items-center gap-3 border border-white/5">
            <Facebook className="text-white group-hover:scale-110 transition-transform" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Facebook</span>
          </a>
          <a href="https://www.linkedin.com/in/harleymar-macadaeg-lpt-9a4340129/" target="_blank" rel="noreferrer" className="group bg-white/5 p-6 rounded-3xl hover:bg-blue-700 transition-all duration-300 flex flex-col items-center gap-3 border border-white/5">
            <Linkedin className="text-white group-hover:scale-110 transition-transform" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
          </a>
          <a href="https://github.com/harleymarmacadaeg-star" target="_blank" rel="noreferrer" className="group bg-white/5 p-6 rounded-3xl hover:bg-slate-800 transition-all duration-300 flex flex-col items-center gap-3 col-span-2 border border-white/5">
            <Github className="text-white group-hover:scale-110 transition-transform" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">GitHub Portfolio</span>
          </a>
        </div>
      </div>
    </div>

    {/* Availability Badge */}
    <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      <span className="text-emerald-500 text-xs font-black uppercase tracking-widest">Ready for new opportunities in 2026</span>
    </div>

    {/* Credits */}
    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
      <p>© 2026 HARLEYMAR MACADAEG</p>
      <div className="flex gap-8">
        <p>LPT • CSS NC II • TM I</p>
        <span>Philippines</span>
      </div>
    </div>
  </div>
</section>
      </div>

     {/* <Resume /> */}

      {/* <footer className="bg-slate-50 py-12 border-t border-slate-200 print:hidden text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-widest">© 2026 Harleymar J. Macadaeg</p>
      </footer> */}
    </div>
  );
};

export default App;