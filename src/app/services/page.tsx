"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Bot,
  BarChart2,
  ArrowRight,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Shirt,
  RefreshCw,
  Palette,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate your business operations with intelligent AI systems. Custom AI agents, intelligent workflow automation, and CRM integrations that operate without human intervention. From lead generation to workflow automation—we build systems that work 24/7 for you.",
    gradient: "from-violet-500 to-fuchsia-400",
    glow: "rgba(124,58,237,0.15)",
    tags: ["AI Agents", "Workflow Automation", "CRM Integration"],
  },
  {
    icon: Palette,
    title: "Design & Development",
    desc: "We are providing micro-services from concept to production. Transform your ideas into market-ready products. We provide complete development solutions including tech packs, sampling, and full-scale production support.",
    gradient: "from-purple-500 to-violet-400",
    glow: "rgba(168,85,247,0.15)",
    tags: ["Tech Packs", "Pattern Making", "Sampling"],
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    desc: "Hyper-targeted campaigns powered by predictive AI. SEO, Paid Ads, and Social Media strategies that convert at scale.Drive traffic, leads, and sales with data-driven digital strategies. We specialize in performance marketing, branding, and growth-focused campaigns.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(0,212,255,0.15)",
    tags: ["SEO Optimization", "Paid Advertising", "Social Media"],
  },
  {
    icon: Users,
    title: "On-Demand Remote Talent",
    desc: "Boost your team instantly with skilled remote professionals. Whether you need temporary support for a project or dedicated remote staff for your office, we provide carefully selected experts to fit your requirements—efficient, reliable, and ready to integrate seamlessly into your workflow.",
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.15)",
    tags: ["Remote Employees", "On-Demand Talent", "Flexible Staffing"],
  },
  {
    icon: Shirt,
    title: "Apparel Sourceing",
    desc: "Access premium-quality garments from trusted global manufacturers. We ensure strict quality control, sustainable sourcing, and cost-efficient production tailored to your brand and competitive pricing for fashion brands of all sizes.",
    gradient: "from-pink-500 to-rose-400",
    glow: "rgba(244,63,94,0.15)",
    tags: ["Fabric Sourcing", "Quality Control", "Sustainable Materials"],
  },
  {
    icon: Globe,
    title: "Buying & Trading",
    desc: "Global sourcing, export/import logistics, and market penetration consulting with data-driven trade intelligence.Expand globally with confidence. We handle compliance, documentation, and international market strategy to ensure smooth cross-border business operations.",
    gradient: "from-emerald-400 to-cyan-400",
    glow: "rgba(52,211,153,0.15)",
    tags: ["Import / Export", "Global Sourcing", "Trade Consulting"],
  },
];

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

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Services — TohasProTrade";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[160px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)]" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
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
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Process", href: "/process" },
              { name: "Pricing", href: "/pricing" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
              >
                {link.name}
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

      <main className="relative z-10 pt-32 pb-16">
        <section id="services" className="py-16 px-6" ref={servicesRef.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider">
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Command Your Market</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                End-to-end solutions designed to dominate. We leverage proprietary AI systems to give your business an unfair competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <Card
                  key={i}
                  className={`bg-white/[0.025] border-white/10 overflow-hidden group hover:border-primary/50 hover:-translate-y-3 transition-all duration-500 cursor-default ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <CardContent className="p-8 relative">
                    <div
                      className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: service.glow }}
                    />
                    <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-[0_0_20px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="/contact" className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 transition-all duration-200 group/link">
                      Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
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