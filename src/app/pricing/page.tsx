"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const pricing = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "Essential digital presence and foundational AI tooling for early-stage businesses.",
    features: [
      "SEO Optimization (5 pages)",
      "Basic AI Chatbot Setup",
      "Monthly Performance Report",
      "2 Social Media Channels",
      "Email Support (48h SLA)",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/mo",
    desc: "Comprehensive AI-powered growth engine designed for scaling brands.",
    features: [
      "Full-funnel Paid Ad Management",
      "Custom AI Automation Agents",
      "CRM Integration & Automation",
      "Trade Consulting (2 sessions/mo)",
      "Priority Slack Support",
      "Weekly Growth Reports",
      "Up to 5 Team Seats",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-scale global domination architecture — built exclusively for your operations.",
    features: [
      "Custom AI Model Development",
      "Global Supply Chain Technology",
      "Dedicated Account Manager",
      "24/7 Phone & WhatsApp Support",
      "White-glove Onboarding",
      "Unlimited Team Seats",
      "Quarterly Business Reviews",
    ],
    popular: false,
    cta: "Contact Us",
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

export default function PricingPage() {
  const [scrolled, setScrolled] = useState(false);
  const pricingRef = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Pricing — TohasProTrade";
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
        <section id="pricing" className="py-16 px-6" ref={pricingRef.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-700 ${pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Transparent Investment</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Scalable solutions tailored to your operational velocity. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
              {pricing.map((tier, i) => (
                <Card
                  key={i}
                  className={`relative bg-white/[0.025] backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                    tier.popular
                      ? "border-primary shadow-[0_0_40px_rgba(0,212,255,0.15)] md:-translate-y-4"
                      : "border-white/10 hover:border-white/25"
                  } ${pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {tier.popular && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />
                  )}
                  <CardContent className="p-8 flex flex-col">
                    {tier.popular && (
                      <Badge className="w-fit mb-4 bg-primary/20 text-primary hover:bg-primary/20 border-none text-xs">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                    <div className="mb-8">
                      <span className="text-5xl font-extrabold text-white tracking-tight">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>}
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-start text-sm text-gray-300 gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact">
                      <Button
                        className={`w-full font-semibold h-12 border-none transition-all duration-300 ${
                          tier.popular
                            ? "bg-primary hover:bg-primary/90 text-background shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                      >
                        {tier.cta}
                      </Button>
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