import React from 'react';
import { Printer, GraduationCap, Briefcase, Award, MapPin, Mail, Phone } from 'lucide-react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* SECTION 1: VISUAL PREVIEW (Hidden when printing) */}
      <section id="resume" className="py-24 bg-white print:hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Professional CV</h2>
              <p className="text-slate-500 font-medium">Export a clean, one-page A4 document for applications.</p>
            </div>
            <button 
              onClick={handlePrint}
              className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-100"
            >
              <Printer size={20} className="group-hover:scale-110 transition-transform" />
              Generate A4 PDF
            </button>
          </div>
          
          {/* Mockup of the Resume */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-12 rounded-[3rem] text-center">
            <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
              <Award className="text-blue-600" size={32} />
            </div>
            <p className="text-slate-900 font-bold">Ready to Print</p>
            <p className="text-slate-500 text-sm max-w-xs mx-auto mt-2">
              Click the button above to see the perfectly formatted A4 version.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ACTUAL A4 DOCUMENT (Visible ONLY when printing) */}
      {/* We use print:block and fixed dimensions to force A4 layout */}
      <div className="hidden print:block print:static bg-white font-sans text-slate-900" style={{ width: '210mm', height: '297mm', margin: '0 auto' }}>
        <div className="p-12 h-full border-[12mm] border-transparent">
          
          {/* Header */}
          <div className="border-b-4 border-blue-600 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">Harleymar J. Macadaeg, LPT</h1>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mt-1">ICT Specialist • Full-Stack Web Developer • Educator</p>
            </div>
            <div className="text-right text-[9px] font-bold text-slate-500 space-y-0.5 uppercase">
              <div className="flex items-center justify-end gap-1.5"><Phone size={10} className="text-blue-600" /> +63 928 031 1520</div>
              <div className="flex items-center justify-end gap-1.5"><Mail size={10} className="text-blue-600" /> harleymarmacadaeg@gmail.com</div>
              <div className="flex items-center justify-end gap-1.5"><MapPin size={10} className="text-blue-600" /> Maddela, Quirino, PH</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {/* Sidebar (Skills & Ed) */}
            <div className="col-span-1 space-y-8">
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">Core Expertise</h3>
                <ul className="text-[10px] space-y-2 font-bold text-slate-700 uppercase">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> React.js / Vite</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Supabase / SQL</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Tailwind CSS v4</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> CSS NC II Support</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Adobe Photoshop</li>
                </ul>
              </section>

              <section>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase">BS in Information Technology</p>
                    <p className="text-[9px] text-slate-500 italic">Graduate</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase">Licensed Prof. Teacher</p>
                    <p className="text-[9px] text-slate-500 italic">PRC Licensed (LPT)</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Main Content (Experience) */}
            <div className="col-span-2 space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-4">Professional Roadmap</h3>
              <div className="space-y-6 border-l-2 border-slate-100 pl-6">
                
                {[
                  { 
                    role: "ICT Teacher / IT Specialist", 
                    company: "Sangbay Integrated School", 
                    date: "2025 - PRES",
                    desc: "Leading ICT curriculum and digital literacy for secondary students." 
                  },
                  { 
                    role: "Trainer – JDVP (CSS NC II)", 
                    company: "S Two Dolorin Training Institute", 
                    date: "2025",
                    desc: "Specialized training for Grade 12 ICT in computer system standards." 
                  },
                  { 
                    role: "Digital Media / IT Staff", 
                    company: "Nagtipunan Tourism Office", 
                    date: "2024 - 2025",
                    desc: "Managed digital assets, drone ops, and municipal IT infrastructure." 
                  },
                  { 
                    role: "ICT Teacher / Lab Manager", 
                    company: "Quirino State University", 
                    date: "2017 - 2021",
                    desc: "Instructed Web Development and CSS NC II specialized subjects." 
                  },
                  { 
                    role: "ICT Teacher / Asst. Registrar", 
                    company: "Saint Mary's Academy", 
                    date: "2015 - 2017",
                    desc: "Managed computer facilities and supported registrar data ops." 
                  }
                ].map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-white border-2 border-blue-600 rounded-full"></div>
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="text-[11px] font-black uppercase leading-tight">{job.role}</h4>
                      <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase">{job.date}</span>
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mb-1">{job.company}</p>
                    <p className="text-[9px] text-slate-600 leading-snug">{job.desc}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;