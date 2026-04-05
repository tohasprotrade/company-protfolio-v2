"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Twitter,
  Linkedin,
  Instagram,
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

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Contact Us — TohasProTrade";
  }, []);

  const contactRef = useInView(0.1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            {["Services", "Portfolio", "Process", "Pricing", "Contact"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className={`hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] ${
                  link === "Contact" ? "text-primary" : ""
                }`}
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

      <main className="relative z-10 pt-32 pb-20">
        <section id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className={`transition-all duration-700 ${contactRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider">
                  Contact
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Ready to Scale?
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Let's Talk.
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-md">
                  Our team of AI engineers and global trade specialists is ready to build your growth engine. Book a free discovery call — no commitment required.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Mail, label: "Email", value: "hello@tohasprotrade.com", href: "mailto:hello@tohasprotrade.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/8 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mr-4 group-hover:bg-primary/25 transition-all">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                        <div className="text-white font-medium text-sm">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-700 delay-200 ${contactRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <Card className="bg-white/[0.03] border-white/12 backdrop-blur-xl">
                  <CardContent className="p-8">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          Thank you for reaching out. Our team will be in touch within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white">First Name</label>
                            <Input
                              placeholder="John"
                              value={formState.firstName}
                              onChange={(e) => setFormState((s) => ({ ...s, firstName: e.target.value }))}
                              className="bg-black/50 border-white/12 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-muted-foreground/50"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Last Name</label>
                            <Input
                              placeholder="Doe"
                              value={formState.lastName}
                              onChange={(e) => setFormState((s) => ({ ...s, lastName: e.target.value }))}
                              className="bg-black/50 border-white/12 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-muted-foreground/50"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Business Email</label>
                          <Input
                            type="email"
                            placeholder="john@yourcompany.com"
                            value={formState.email}
                            onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                            className="bg-black/50 border-white/12 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-muted-foreground/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Project Details</label>
                          <Textarea
                            placeholder="Tell us about your business goals and how we can help scale your operations..."
                            value={formState.message}
                            onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                            className="min-h-[130px] bg-black/50 border-white/12 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-muted-foreground/50 resize-none"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full h-12 bg-primary hover:bg-primary/90 text-background font-semibold shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.55)] transition-all duration-300 border-none"
                        >
                          Send Message
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          We respond within 24 hours. No spam, ever.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
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
