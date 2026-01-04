import React, { useState, useEffect } from 'react';
import { Printer, MapPin, Mail, Phone } from 'lucide-react';

const Resume = () => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    setIsPrintMode(true);
  };

  useEffect(() => {
    if (isPrintMode) {
      window.print();
      const timer = setTimeout(() => {
        setIsPrintMode(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPrintMode]);

  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header/Control Section - Hidden when printing */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 print:hidden">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Professional CV</h2>
            <p className="text-slate-500 font-medium">Live preview of your A4 document.</p>
          </div>
          <button 
            onClick={handlePrint}
            className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-100"
          >
            <Printer size={20} className="group-hover:scale-110 transition-transform" />
            Generate A4 PDF
          </button>
        </div>
        
        {/* THE RESUME DOCUMENT */}
        {/* On screen: rounded with shadow. On print: flat A4. */}
        <div 
          id="resume-print-root"
          className="bg-white font-sans text-slate-900 p-8 md:p-12 mx-auto border border-slate-200 shadow-2xl rounded-2xl print:shadow-none print:border-0 print:p-0" 
          style={{ width: '100%', maxWidth: '210mm', minHeight: '297mm', boxSizing: 'border-box' }}
        >
          {/* Resume Header */}
          <div className="border-b-4 border-blue-600 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-left">Harleymar J. Macadaeg, LPT</h1>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mt-1 text-left">
                ICT Specialist • Full-Stack Web Developer • Educator
              </p>
            </div>
            <div className="text-right text-[9px] font-bold text-slate-500 space-y-0.5 uppercase">
              <div className="flex items-center justify-end gap-1.5"><Phone size={10} className="text-blue-600" /> +63 928 031 1520</div>
              <div className="flex items-center justify-end gap-1.5"><Mail size={10} className="text-blue-600" /> harleymarmacadaeg@gmail.com</div>
              <div className="flex items-center justify-end gap-1.5"><MapPin size={10} className="text-blue-600" /> Maddela, Quirino, PH</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 text-left">
            {/* Left Sidebar */}
            <div className="col-span-1 space-y-8">
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">Core Expertise</h3>
                <ul className="text-[10px] space-y-2 font-bold text-slate-700 uppercase">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> React.js / Vite</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Supabase / SQL</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> API Integration</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Computer Systems Servicing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Adobe Photoshop</li>
                </ul>
              </section>
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase">BS in Information Technology</p>
                    <p className="text-[9px] text-slate-500 italic uppercase">Graduate</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase">Licensed Prof. Teacher</p>
                    <p className="text-[9px] text-slate-500 italic uppercase">PRC Licensed (LPT)</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase">TESDA Certificate Holder</p>
                    <p className="text-[9px] text-slate-500 italic uppercase">Trainers Methodology I(TM I)</p>
                    <p className="text-[9px] text-slate-500 italic uppercase">Computer Systems Servicing NC II(CSS NC II)</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Main Column */}
            <div className="col-span-2 space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-4">Professional Roadmap</h3>
              <div className="space-y-6 border-l-2 border-slate-100 pl-6">
                {[
                  { role: "ICT Teacher / IT Specialist", company: "Sangbay Integrated School", date: "2025 - PRES", desc: "Leading ICT curriculum and digital literacy for secondary students." },
                  { role: "Trainer – JDVP (CSS NC II)", company: "S Two Dolorin Training Institute", date: "2025", desc: "Specialized training for Grade 12 ICT in computer system standards." },
                  { role: "Digital Media / IT Staff", company: "Nagtipunan Tourism Office", date: "2024 - 2025", desc: "Managed digital assets and municipal IT infrastructure." },
                  { role: "ICT Teacher / Lab Manager", company: "Quirino State University", date: "2017 - 2021", desc: "Instructed Web Development and CSS NC II specialized subjects." },
                  { role: "ICT Teacher / Asst. Registrar", company: "Saint Mary's Academy", date: "2015 - 2017", desc: "Managed computer facilities and supported registrar data ops." }
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
    </section>
  );
};

export default Resume;