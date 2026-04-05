"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Bot,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Star,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  MapPin,
} from "lucide-react";

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

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

const stats = [
  { icon: Users, label: "Active Clients", value: "150+" },
  { icon: Shield, label: "Client Retention", value: "98%" },
  { icon: MapPin, label: "Countries Served", value: "50+" },
  { icon: DollarSign, label: "Revenue Generated", value: "$10M+" },
];

const services = [
  {
    icon: BarChart2,
    title: "Digital Marketing",
    desc: "Hyper-targeted campaigns powered by predictive AI. SEO, Paid Ads, and Social Media strategies that convert at scale.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(0,212,255,0.15)",
    tags: ["SEO Optimization", "Paid Advertising", "Social Media"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Custom AI agents, intelligent workflow automation, and CRM integrations that operate 24/7 without human intervention.",
    gradient: "from-violet-500 to-fuchsia-400",
    glow: "rgba(124,58,237,0.15)",
    tags: ["AI Agents", "Workflow Automation", "CRM Integration"],
  },
  {
    icon: Globe,
    title: "Foreign Trade",
    desc: "Global sourcing, export/import logistics, and market penetration consulting with data-driven trade intelligence.",
    gradient: "from-emerald-400 to-cyan-400",
    glow: "rgba(52,211,153,0.15)",
    tags: ["Import / Export", "Global Sourcing", "Trade Consulting"],
  },
];

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

const testimonials = [
  {
    initials: "AM",
    name: "Ahmed Malik",
    company: "Horizon Logistics",
    quote:
      "TohasProTrade transformed our import operations. Their AI-powered trade consulting cut our sourcing costs by 40% and opened three new supplier channels we never knew existed.",
    rating: 5,
    color: "from-blue-500 to-cyan-400",
  },
  {
    initials: "SL",
    name: "Sarah Lin",
    company: "Elevate Digital",
    quote:
      "Within 90 days, our organic search traffic had tripled. The AI content pipeline they built runs autonomously and produces better content than our internal team ever could alone.",
    rating: 5,
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    initials: "RT",
    name: "Ravi Thangaraj",
    company: "Nexus Ventures",
    quote:
      "The AI automation system they deployed for our sales team is nothing short of extraordinary. Our lead-to-close cycle dropped from 45 days to 11. Absolutely game-changing.",
    rating: 5,
    color: "from-emerald-400 to-cyan-400",
  },
];

const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "n8n",
  "OpenAI GPT-4",
  "Zapier",
  "Make.com",
  "Langchain",
  "Pinecone",
  "Stripe",
];

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

export default function Home() {
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
    document.title = "TohasProTrade — AI-Powered Digital Marketing & Global Trade Solutions";
  }, []);

  const heroRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const servicesRef = useInView(0.1);
  const portfolioRef = useInView(0.1);
  const processRef = useInView(0.1);
  const testimonialsRef = useInView(0.1);
  const techRef = useInView(0.1);
  const pricingRef = useInView(0.1);
  const contactRef = useInView(0.1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">

      {/* === BACKGROUND ORBS === */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[160px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)]" />
      </div>

      {/* === NAVBAR === */}
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

      <main className="relative z-10">

        {/* === HERO === */}
        <section
          className="pt-36 pb-24 md:pt-52 md:pb-36 px-6 flex flex-col items-center text-center overflow-hidden"
          ref={heroRef.ref}
        >
          <div className={`transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge
              variant="outline"
              className="mb-8 py-1.5 px-5 border-primary/30 bg-primary/10 text-primary uppercase tracking-widest text-xs backdrop-blur-sm"
            >
              <SparklesIcon className="w-3.5 h-3.5 mr-2 inline shrink-0" />
              The Future of Global Business
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl leading-[1.08]">
              AI-Powered Digital
              <br />
              Marketing &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
                Global Trade
              </span>{" "}
              Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed mx-auto">
              We merge cutting-edge AI automation with elite global trade expertise to scale
              your business across borders. Precision-engineered growth with measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-background text-base font-semibold shadow-[0_0_40px_rgba(0,212,255,0.45)] hover:shadow-[0_0_60px_rgba(0,212,255,0.65)] hover:scale-105 transition-all duration-300 border-none"
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base font-medium border-white/15 hover:bg-white/5 hover:border-white/25 backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                </Button>
              </a>
            </div>
          </div>

          {/* Floating orb decoration */}
          <div className="mt-24 relative w-full max-w-3xl mx-auto h-32 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-primary/50 shadow-[0_0_20px_rgba(0,212,255,0.8)] animate-pulse" />
          </div>
        </section>

        {/* === STATS / ABOUT === */}
        <section className="py-20 px-6 border-y border-white/6 bg-black/30" ref={aboutRef.ref}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.025] border border-white/8 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group cursor-default ${
                    aboutRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all" />
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-20 grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 delay-200 ${aboutRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <Badge variant="outline" className="mb-4 border-secondary/30 bg-secondary/10 text-secondary text-xs uppercase tracking-wider">
                  About Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Precision-engineered for the new era of global commerce
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TohasProTrade was founded on a single conviction: that AI and global trade, combined intelligently, represent the greatest business leverage of our generation. We bring both under one roof.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to help businesses — from growth-stage startups to multinational corporations — scale their operations across borders using proprietary AI systems, trade intelligence, and performance marketing mastery.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "AI-First Approach", desc: "Every strategy is powered by machine learning and real-time data intelligence." },
                  { title: "Global Reach", desc: "Vetted supplier and partner networks across 50+ countries and 6 continents." },
                  { title: "Proven ROI", desc: "Average client sees 3-8x return on their investment within the first 6 months." },
                  { title: "End-to-End", desc: "From strategy to execution to optimization — we own the entire journey." },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-primary/30 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === SERVICES === */}
        <section id="services" className="py-28 px-6" ref={servicesRef.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-700 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
                  className={`bg-white/[0.025] border-white/10 overflow-hidden group hover:border-primary/50 hover:-translate-y-3 transition-all duration-500 cursor-default ${
                    servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* === PORTFOLIO === */}
        <section id="portfolio" className="py-28 px-6 bg-black/25 border-y border-white/5" ref={portfolioRef.ref}>
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
        </section>

        {/* === PROCESS === */}
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
              {/* Connector line */}
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

        {/* === TESTIMONIALS === */}
        <section className="py-28 px-6 bg-black/30 border-y border-white/5" ref={testimonialsRef.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-700 ${testimonialsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Badge variant="outline" className="mb-4 border-secondary/30 bg-secondary/10 text-secondary text-xs uppercase tracking-wider">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Trusted Worldwide</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Hear directly from the business leaders who scaled their operations with TohasProTrade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${
                    testimonialsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-muted-foreground text-xs">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === TECH STACK === */}
        <section className="py-24 px-6 border-b border-white/5" ref={techRef.ref}>
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10 font-medium">
              Powered by Elite Technology
            </p>
            <div
              className={`flex flex-wrap justify-center gap-3 md:gap-4 transition-all duration-700 ${techRef.inView ? "opacity-100" : "opacity-0"}`}
            >
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-sm font-medium text-muted-foreground hover:border-primary/60 hover:bg-primary/8 hover:text-white hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING === */}
        <section id="pricing" className="py-28 px-6" ref={pricingRef.ref}>
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

        {/* === CONTACT === */}
        <section id="contact" className="py-28 px-6 bg-black/40 border-t border-white/5 relative overflow-hidden" ref={contactRef.ref}>
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
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

      {/* === FOOTER === */}
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