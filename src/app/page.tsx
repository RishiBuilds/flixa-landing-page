"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/5">
        <div className="container-px py-4">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/flixa-logo.svg" alt="Flixa" width={108} height={28} priority className="transition-transform group-hover:scale-105" />
              <span className="sr-only">Flixa</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8 text-base text-muted-foreground">
              <a
                href="#features"
                className="hover:text-foreground transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-200 hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('features');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="hover:text-foreground transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-200 hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('testimonials');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="hover:text-foreground transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-200 hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('pricing');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Pricing
              </a>
              <a
                href="#security"
                className="hover:text-foreground transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-200 hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('security');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Security
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex h-11 px-5 rounded-full border border-border text-base hover:bg-white/10 transition-all duration-200 hover:scale-105 items-center justify-center">Sign in</button>
              <button className="h-11 px-6 rounded-full bg-brand text-brand-contrast text-base font-medium shadow-[0_8px_30px_-10px_rgba(108,108,255,.9)] hover:shadow-[0_12px_40px_-8px_rgba(108,108,255,.7)] hover:scale-105 transition-all duration-200">Get started</button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile">
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('features');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('testimonials');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('pricing');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  Pricing
                </a>
                <a
                  href="#security"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('security');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  Security
                </a>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                  <button className="h-10 px-4 rounded-full border border-border text-sm hover:bg-white/10 transition-colors flex items-center justify-center" suppressHydrationWarning>Sign in</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container-px pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base text-muted-foreground mb-6 animate-pulse-subtle">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Now syncing 2.4M files per minute
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Instant file sharing across devices with
              <span className="block gradient-text animate-gradient">AI-powered secure cloud sync</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Flixa keeps your files in perfect harmony—encrypted, deduplicated, and optimized in real time. Share anything instantly, from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-brand text-brand-contrast font-semibold shadow-[0_12px_50px_-12px_rgba(108,108,255,0.9)] hover:shadow-[0_16px_60px_-8px_rgba(108,108,255,0.8)] hover:scale-110 transition-all duration-300" suppressHydrationWarning>Start free trial</button>
              <button className="w-full sm:w-auto h-12 px-8 rounded-full border border-border hover:bg-white/10 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2" suppressHydrationWarning>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch demo
              </button>
            </div>
            <div className="text-base text-muted-foreground flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                End-to-end encrypted
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited devices
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-radial from-brand/12 via-transparent to-transparent blur-3xl animate-pulse-glow"></div>
            <div className="absolute -inset-4 bg-gradient-radial from-accent/8 via-transparent to-transparent blur-2xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="relative glass p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="glass p-6 aspect-square flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <Image src="/window.svg" alt="Desktop" width={48} height={48} className="opacity-90 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs text-muted-foreground">Desktop</span>
                </div>
                <div className="glass p-6 aspect-square flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <Image src="/file.svg" alt="Files" width={48} height={48} className="opacity-90 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs text-muted-foreground">Files</span>
                </div>
                <div className="glass p-6 aspect-square flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <Image src="/globe.svg" alt="Cloud" width={48} height={48} className="opacity-90 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs text-muted-foreground">Cloud</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-base text-muted-foreground">Real-time sync across Mac, Windows, iOS, Android and web</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-1 w-8 bg-accent rounded-full animate-pulse"></div>
                  <div className="h-1 w-4 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-1 w-6 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    2.4M files synced in the last minute
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently asked <span className="gradient-text">questions</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to know about Flixa. Can’t find an answer? Reach out to our team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How secure is Flixa?",
                a: "We use end-to-end encryption with zero-knowledge architecture. Your keys never leave your devices.",
              },
              {
                q: "Which platforms are supported?",
                a: "Mac, Windows, iOS, Android, and the web. Your files sync in real time across all devices.",
              },
              {
                q: "Can I collaborate with my team?",
                a: "Yes. Share with role-based permissions, link expiry, and watermarking for sensitive content.",
              },
              {
                q: "What happens if I delete a file?",
                a: "Recover any version at any time. Version history is included on all plans.",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 hover-lift">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="container-px py-16 md:py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay in sync with product updates</h3>
            <p className="text-muted-foreground mb-6">Join our newsletter for launch announcements, tips, and early access invites.</p>
            <form
              className="flex flex-col sm:flex-row gap-3 items-center justify-center"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! You're on the list."); }}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full sm:w-auto flex-1 h-12 px-4 rounded-full bg-white/5 border border-white/10 outline-none focus:border-brand"
                autoComplete="email"
                suppressHydrationWarning
              />
              <button className="h-12 px-6 rounded-full bg-brand text-brand-contrast font-medium hover:scale-110 transition-transform" suppressHydrationWarning>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container-px py-12 border-b border-white/5">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            <Image src="/vercel.svg" alt="Vercel" width={100} height={0} className="dark:invert hover:scale-110 transition-transform duration-300 h-auto" />
            <Image src="/next.svg" alt="Next.js" width={120} height={0} className="dark:invert hover:scale-110 transition-transform duration-300 h-auto" />
            <div className="flex items-center gap-3 hover:scale-110 transition-transform duration-300">
              <Image src="/globe.svg" alt="Global" width={24} height={24} />
              <span className="text-sm font-medium">GlobalTech</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-110 transition-transform duration-300">
              <Image src="/file.svg" alt="Files" width={24} height={24} />
              <span className="text-sm font-medium">FileFlow</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-110 transition-transform duration-300">
              <Image src="/window.svg" alt="Window" width={24} height={24} />
              <span className="text-sm font-medium">WindowCorp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for the way you <span className="gradient-text">work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to make file sharing effortless, secure, and lightning-fast across all your devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(108,108,255,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI-optimized sync</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Predictive prefetching and smart conflict resolution ensure your files are ready before you are.</p>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(34,211,238,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">End-to-end encryption</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Zero-knowledge architecture. Your keys never leave your devices.</p>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(168,85,247,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-2 to-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Blazing fast</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Global edge network with chunked uploads and delta sync for instant updates.</p>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(108,108,255,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Unlimited devices</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Seamless experience across desktop, mobile and web with granular permissions.</p>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(34,211,238,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Version history</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Restore any file from any point in time. Never lose work again.</p>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_80px_-20px_rgba(168,85,247,0.3)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-2 to-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 110.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 110.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart sharing</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Links with expiry, watermarks and AI-powered content scanning for safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container-px py-20 md:py-28 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Loved by <span className="gradient-text">creators</span> worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what teams and individuals are saying about their Flixa experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 group hover:scale-110 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">"Flixa transformed how our design team collaborates. Files sync instantly across all devices, and the AI optimization means we never wait for uploads."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-semibold">S</div>
                <div>
                  <p className="font-semibold text-sm">Arjun Mehta</p>
                  <p className="text-xs text-muted-foreground">Design Lead, TechFlow</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">"The security features give us peace of mind. End-to-end encryption with zero-knowledge architecture is exactly what we needed for client files."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-semibold">M</div>
                <div>
                  <p className="font-semibold text-sm">Priya Nair</p>
                  <p className="text-xs text-muted-foreground">CTO, SecureVault</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 group hover:scale-110 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">"Version history saved our project when we accidentally deleted important files. Being able to restore from any point in time is incredible."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-2 to-brand flex items-center justify-center text-white font-semibold">A</div>
                <div>
                  <p className="font-semibold text-sm">Siddharth Bansal</p>
                  <p className="text-xs text-muted-foreground">Freelance Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Security <span className="gradient-text">by design</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your data deserves the highest level of protection. That's why we built Flixa with enterprise-grade security from the ground up.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Zero-knowledge encryption</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">End-to-end encryption ensures only you can access your files. We never see your data in plaintext.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise compliance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">FIPS 140-2 validated cryptography with SOC 2 Type II and ISO 27001 alignment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-2 to-brand flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Granular access control</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Role-based permissions with device trust and multi-factor authentication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-radial from-brand/10 via-transparent to-transparent blur-3xl animate-pulse-glow"></div>
              <div className="absolute -inset-6 bg-gradient-radial from-accent/6 via-transparent to-transparent blur-2xl animate-pulse-glow" style={{ animationDelay: '0.8s' }}></div>
              <div className="relative glass p-8 lg:p-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-accent flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Your keys, your control</h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Key material is generated and stored exclusively on your devices. Flixa servers never have access to your encryption keys or data in plaintext.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <div className="w-8 h-0.5 bg-accent/60"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-8 h-0.5 bg-accent/40"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container-px py-20 md:py-28 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any time with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="glass p-8 group hover:scale-110 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for personal use</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">5 GB secure storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Up to 2 devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Basic file sharing</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">End-to-end encryption</span>
                </li>
              </ul>

              <button className="w-full h-12 rounded-full border border-border hover:bg-white/10 transition-all duration-300 hover:scale-110 font-medium" suppressHydrationWarning>
                Get started free
              </button>
            </div>

            {/* Pro Plan - Featured */}
            <div className="glass p-8 ring-2 ring-brand/50 relative group hover:scale-110 transition-all duration-300 hover:ring-brand/70">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand to-accent text-white px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">For professionals and creators</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">2 TB secure storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Unlimited devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Smart sharing & versioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>

              <button className="w-full h-12 rounded-full bg-brand text-brand-contrast font-semibold shadow-[0_12px_50px_-12px_rgba(108,108,255,0.9)] hover:shadow-[0_16px_60px_-8px_rgba(108,108,255,0.8)] hover:scale-110 transition-all duration-300" suppressHydrationWarning>
                Start 14-day trial
              </button>
            </div>

            {/* Teams Plan */}
            <div className="glass p-8 group hover:scale-110 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold mb-2">Teams</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-sm text-muted-foreground">For organizations and teams</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Unlimited storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">SSO/SAML & DLP</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Admin console & audit logs</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Dedicated support</span>
                </li>
              </ul>

              <button className="w-full h-12 rounded-full border border-border hover:bg-white/10 transition-all duration-300 hover:scale-110 font-medium" suppressHydrationWarning>
                Contact sales
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include end-to-end encryption, version history, and cross-platform sync.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-12 bg-gradient-radial from-brand/8 via-transparent to-transparent blur-3xl animate-pulse-glow"></div>
            <div className="absolute -inset-8 bg-gradient-radial from-accent/6 via-transparent to-transparent blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            <div className="relative glass p-12 md:p-16 text-center backdrop-blur-2xl bg-white/[0.03] border-white/[0.08]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to transform your <span className="gradient-text">file workflow?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of creators and teams who trust Flixa to keep their files secure, synced, and accessible from anywhere.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-brand text-brand-contrast font-semibold shadow-[0_12px_50px_-12px_rgba(108,108,255,0.9)] hover:shadow-[0_16px_60px_-8px_rgba(108,108,255,0.8)] hover:scale-110 transition-all duration-300" suppressHydrationWarning>
                  Start your free trial
                </button>
                <button className="w-full sm:w-auto h-12 px-8 rounded-full border border-border hover:bg-white/10 transition-all duration-300 hover:scale-110 font-medium" suppressHydrationWarning>
                  Schedule a demo
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-gradient-to-t from-white/[0.02] to-transparent">
        <div className="container-px py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <Image src="/flixa-logo.svg" alt="Flixa" width={108} height={28} className="opacity-90" />
                </Link>
                <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                  Secure, AI-powered file sync that keeps your data safe and accessible across all your devices.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#security" className="hover:text-foreground transition-colors">Security</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span suppressHydrationWarning>© {new Date().getFullYear()} Flixa Inc. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand text-brand-contrast shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
