import { useState } from 'react'
import { Github, BookOpen, Download, Shield, Boxes, ScanLine, FileText, ChevronRight, Copy } from 'lucide-react'

export default function ExtractPDF4JLanding(){
  const [copied, setCopied] = useState(false)
  const maven = `<dependency>
  <groupId>com.extractpdf4j</groupId>
  <artifactId>extractpdf4j</artifactId>
  <version>1.0.0</version>
</dependency>`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(maven)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch (err) {
      console.error('Failed to copy to clipboard', err)
      alert('Failed to copy to clipboard')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-lg" />
            <span className="font-semibold tracking-tight">ExtractPDF4J</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#install" className="hover:text-white transition">Install</a>
            <a href={import.meta.env.BASE_URL + 'docs/index.html'} className="hover:text-white transition">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/yourusername/ExtractPDF4J" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 transition px-3 py-2 text-sm">
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              JVM-native • Stream + Lattice + OCR <ChevronRight className="size-3" />
              <a href="#features" className="underline underline-offset-2 hover:text-white">See what’s inside</a>
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Extract tables from PDFs — <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">text or scanned</span> — in Java
            </h1>
            <p className="mt-5 text-neutral-300 text-lg md:text-xl">
              A modern, open-source library inspired by Camelot & Tabula, built for the JVM. Robust parsing, multi-page detection, and OCR for tough scans.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://github.com/yourusername/ExtractPDF4J" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-medium text-neutral-900 shadow-lg hover:shadow-xl active:scale-[.99]">
                <Github className="size-5" /> Star on GitHub
              </a>
              <a href={import.meta.env.BASE_URL + 'docs/index.html'} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium hover:bg-white/10">
                <BookOpen className="size-5" /> Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-neutral-400">
          JVM • Apache 2.0 • Works with pdfbox • tess4j • opencv
        </div>
      </div>

      <section id="features" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={<Boxes className="size-5" />} title="Stream & Lattice">
            Camelot-style parsing modes replicated for the JVM. Handles both digitally tagged PDFs and line-based table layouts.
          </FeatureCard>
          <FeatureCard icon={<ScanLine className="size-5" />} title="OCR for Scans">
            Integrated OCR layer for image-based PDFs and noisy scans so your extraction doesn’t stop at vectors.
          </FeatureCard>
          <FeatureCard icon={<Shield className="size-5" />} title="Production-ready">
            Multi-page detection, complex layouts, and a clean API under the Apache 2.0 license.
          </FeatureCard>
        </div>
      </section>

      <section id="install" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl font-semibold">Install (Maven)</h3>
            <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10">
              <Copy className="size-4" /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-neutral-900 p-4 text-sm text-neutral-200">{maven}</pre>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-300">
            <a href="https://github.com/yourusername/ExtractPDF4J/releases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"><Download className="size-4"/> Releases</a>
            <a href={import.meta.env.BASE_URL + 'docs/index.html'} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"><BookOpen className="size-4"/> Read the docs</a>
          </div>
        </div>
      </section>

      <section id="docs" className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-center gap-2"><FileText className="size-5 text-sky-400" /><h3 className="text-xl font-semibold">Documentation</h3></div>
          <p className="mt-3 text-neutral-300">Get started quickly with examples for Stream, Lattice, and OCR modes. Learn how to handle multi-page tables and complex layouts.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <DocLink title="Quick Start" href={import.meta.env.BASE_URL + 'docs/index.html'} />
            <DocLink title="Stream vs Lattice" href={import.meta.env.BASE_URL + 'docs/index.html#stream-vs-lattice'} />
            <DocLink title="OCR / Scanned PDFs" href={import.meta.env.BASE_URL + 'docs/index.html#ocr'} />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ExtractPDF4J • Apache-2.0</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/yourusername/ExtractPDF4J" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github className="size-4"/> GitHub</a>
            <a href={import.meta.env.BASE_URL + 'docs/index.html'} className="inline-flex items-center gap-2 hover:text-white"><BookOpen className="size-4"/> Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, children}){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2 text-sky-400">{icon}<span className="font-semibold text-white">{title}</span></div>
      <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function DocLink({ title, href }){
  return (
    <a href={href} className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 hover:bg-neutral-800">
      <span>{title}</span>
      <ChevronRight className="size-4 text-neutral-400 group-hover:text-white transition" />
    </a>
  )
}
