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
  Menu,
  X,
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

const portfolio = [
  {
    category: "Digital Marketing",
    title: "E-commerce Revenue Scale",
    desc: "Redesigned full-funnel ad strategy for a fashion retailer, combining AI-powered audience segmentation with dynamic creative optimization.",
    result: "+320% ROAS",
    badge: "6-month engagement",
  },
  {
    category: "AI Automation",
    title: "Automated B2B Lead Engine",
    desc: "Deployed a multi-agent AI system to automate outreach, qualification, and CRM population for a SaaS company entering 3 new markets.",
    result: "8x Lead Velocity",
    badge: "Ongoing",
  },
  {
    category: "Foreign Trade",
    title: "Southeast Asia Market Entry",
    desc: "End-to-end sourcing, compliance, and logistics orchestration for a US-based consumer goods company expanding into Vietnam and Thailand.",
    result: "40% Cost Reduction",
    badge: "4-month project",
  },
  {
    category: "AI + Marketing",
    title: "AI Content & SEO Pipeline",
    desc: "Built a fully automated content production and SEO deployment system, publishing 200+ optimized articles per month at zero marginal cost.",
    result: "+580% Organic Traffic",
    badge: "Completed",
  },
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.title = "Portfolio — TohasProTrade";
  }, []);

  const portfolioRef = useInView(0.1);

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

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["Services", "Portfolio", "Process", "Pricing", "Contact"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
              >
                {link}
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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 w-[280px] h-full bg-[#0a0a0a] border-r border-white/10 p-6 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <a href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg text-background">
                  T
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  TohasProTrade
                </span>
              </a>
              <button
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {["Services", "Portfolio", "Process", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
                >
                  {link}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary hover:bg-primary/90 text-background font-semibold px-6 py-3 rounded-lg text-center shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all duration-300"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}

      <main className="relative z-10 pt-32 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-700 ${portfolioRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge variant="outline" className="mb-4 border-secondary/30 bg-secondary/10 text-secondary text-xs uppercase tracking-wider">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Results That Speak</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real outcomes from real engagements. No vanity metrics — only the numbers that move businesses forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 group ${
                  portfolioRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">{item.category}</span>
                  <span className="text-xs text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/8">{item.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Key Result</div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{item.result}</div>
                  </div>
                  <a href="/contact" className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors group/link">
                    View details <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
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
