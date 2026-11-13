import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Activity,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SoftwareDevelopment() {
  const capabilities = [
    {
      icon: <Globe className="w-7 h-7 text-gold" />,
      title: 'Enterprise Web Platforms',
      desc: 'Scalable full-stack React, TypeScript, and Node.js applications engineered for operations, booking workflows, and business intelligence.'
    },
    {
      icon: <Smartphone className="w-7 h-7 text-gold" />,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform Android & iOS experiences designed for consumer engagement, field service teams, and remote telemetry control.'
    },
    {
      icon: <Activity className="w-7 h-7 text-gold" />,
      title: 'IoT & Telemetry Dashboards',
      desc: 'Real-time visualization interfaces, MQTT/REST data pipelines, and alert engines bridging physical sensors with cloud analytics.'
    },
    {
      icon: <Database className="w-7 h-7 text-gold" />,
      title: 'Custom APIs & Cloud Architecture',
      desc: 'High-availability backend services, third-party ERP/payment integrations, and secure relational or time-series database systems.'
    },
    {
      icon: <Layers className="w-7 h-7 text-gold" />,
      title: 'UI/UX Product Design',
      desc: 'User-centric interface systems, interactive prototypes, and responsive layouts built for clarity, speed, and intuitive operation.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-gold" />,
      title: 'Security & Lifecycle Maintenance',
      desc: 'Role-based access control, encrypted data transit, automated deployments, and ongoing SLA support for mission-critical software.'
    }
  ];

  const deliveryStages = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      desc: 'Mapping operational requirements, system integrations, and scalable database schemas before writing a single line of code.'
    },
    {
      step: '02',
      title: 'UI/UX & Rapid Prototyping',
      desc: 'Designing interactive wireframes and component systems validated against real operator and customer workflows.'
    },
    {
      step: '03',
      title: 'Full-Stack Engineering',
      desc: 'Iterative frontend, mobile, and backend API sprints backed by automated testing and clean TypeScript codebases.'
    },
    {
      step: '04',
      title: 'Deployment & Long-Term Support',
      desc: 'Production cloud rollouts, performance monitoring, and continuous feature evolution tailored to your growth.'
    }
  ];

  return (
    <div className="bg-[#1f1712] text-[#f5f2ed] min-h-screen pt-32 pb-24 selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <Link
          to="/engineering#software"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gold hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Engineering Pillar
        </Link>

        {/* Hero Header */}
        <header className="relative mb-24">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/50 bg-gold/10 backdrop-blur-md">
              <Code2 className="w-4 h-4 text-gold" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gold">
                Engineering Pillar • Digital Platform
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-paper/70">
              <Terminal className="w-3.5 h-3.5 text-gold" />
              Web • Mobile • Telemetry • Cloud APIs
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tight text-paper mb-6 leading-none"
          >
            Software &amp; App <span className="text-gold">Development</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#f5f2ed]/70 max-w-3xl leading-relaxed mb-8"
          >
            Grouped under our Engineering division, Inventé Network designs and builds full-stack web platforms, Android &amp; iOS mobile applications, real-time IoT telemetry dashboards, and custom enterprise APIs tailored to operational excellence.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact?pillar=Engineering"
              className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-lg shadow-gold/20"
            >
              Consult Software Team <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#capabilities"
              className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all"
            >
              Explore Capabilities
            </a>
          </div>
        </header>

        {/* Hardware + Software Integration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-gradient-to-r from-black/80 via-[#2d2017] to-black/80 border border-gold/30 p-8 md:p-12 mb-28 overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-gold" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">
                  Unified Engineering Advantage
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-paper mb-4">
                Software Engineered to Talk Directly to Physical Infrastructure
              </h2>
              <p className="text-sm text-paper/70 leading-relaxed max-w-2xl">
                Unlike generic agencies, our software engineers collaborate directly with our M&amp;E, ICT, and Smart IoT teams—ensuring seamless integration from edge controllers and sensor gateways all the way to executive mobile apps.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              {[
                'Custom React & TypeScript Web Apps',
                'Native & Cross-Platform Mobile (iOS/Android)',
                'Real-Time IoT & SCADA Telemetry UI',
                'Scalable Cloud & API Architecture'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold text-paper">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Capabilities Grid */}
        <section id="capabilities" className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">
              Core Technical Stack
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-paper">
              Full-Stack Digital Capabilities
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-gold/40 hover:bg-white/[0.07] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-paper mb-3">{cap.title}</h4>
                  <p className="text-xs text-paper/60 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-gold font-bold">
                  <span>0{i + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Production Ready →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Delivery Lifecycle */}
        <section className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-3">
                Delivery Methodology
              </h2>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-paper">
                From Concept to Production Launch
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryStages.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-black/40 border border-white/10"
              >
                <span className="text-3xl font-black text-gold/80 block mb-4">{stage.step}</span>
                <h4 className="text-base font-bold uppercase tracking-wider text-paper mb-3">{stage.title}</h4>
                <p className="text-xs text-paper/60 leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="text-center py-20 px-8 rounded-[3rem] bg-gradient-to-b from-white/5 to-black border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-[10px] uppercase tracking-widest text-gold font-bold mb-6">
              <Code2 className="w-3.5 h-3.5" /> Commission Custom Software
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-paper mb-6">
              Ready to Build Your Digital Platform?
            </h3>
            <p className="text-sm text-paper/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Share your operational goals with our engineering team to scope a tailored web application, mobile app, or IoT software system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?pillar=Engineering"
                className="px-10 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20"
              >
                Start a Software Project
              </Link>
              <Link
                to="/engineering"
                className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-white transition-all text-paper/80"
              >
                View Engineering Pillar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
