"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  TrendingUp,
  Zap,
  ChevronRight,
  BarChart2,
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep audit of your current systems, competitive landscape, and market positioning to identify leverage points.",
    icon: TrendingUp,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Architecting a bespoke roadmap that integrates AI capabilities with global trade data and growth channels.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Execution",
    desc: "Deploying automation systems, campaigns, and global outreach with military-grade precision and speed.",
    icon: ChevronRight,
  },
  {
    step: "04",
    title: "Optimization",
    desc: "Continuous data-driven iteration using machine learning feedback loops to compound your results over time.",
    icon: BarChart2,
  },
];

export default function ProcessPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Our Process — TohasProTrade";
  }, []);

  const processRef = useInView(0.1);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[160px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)]" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/8 shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg text-background shadow-[0_0_20px_rgba(0,212,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.7)] transition-all duration-300 group-hover:scale-105">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              TohasProTrade
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {[
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Process", href: "/process" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="/contact">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-background font-semibold px-6 shadow-[0_0_20px_rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300 border-none">
              Get Started
            </Button>
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-32">
        <section id="process" className="py-28 px-6 relative overflow-hidden" ref={processRef.ref}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`mb-20 transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider">
                Our Method
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Engine</h2>
              <p className="text-muted-foreground max-w-xl">
                Our methodology is systematic, rigorous, and proven across dozens of industries and markets worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              {process.map((p, i) => (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 130}ms` }}
                >
                  <div className="mb-8 relative">
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shadow-[0_0_20px_rgba(0,212,255,0.5)] relative z-10 mx-auto md:mx-0">
                      {p.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black/60 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg text-background shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  T
                </div>
                <span className="font-bold text-xl tracking-tight text-white">TohasProTrade</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The premier AI-powered digital marketing and global trade agency. Precision-engineered for international growth.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Services", "Portfolio", "Process", "Pricing", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`/${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
              <div className="flex gap-3 mb-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: MessageCircle, href: "#", label: "WhatsApp" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                hello@tohasprotrade.com
              </p>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>© 2025 TohasProTrade. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}