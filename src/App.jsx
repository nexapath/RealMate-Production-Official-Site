import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { messages, getLang, setLang } from './i18n.jsx'
import { getSeo } from './seo.jsx'
import { FORM_ENDPOINT } from './config.jsx'
import clsx from 'classnames'

export default function App() {
  const [lang, setLangState] = useState(getLang())
  const t = useMemo(() => messages[lang], [lang])
  const seo = useMemo(() => getSeo(lang), [lang])

  useEffect(() => {
    const onChange = (e) => setLangState(e.detail?.lang || getLang())
    window.addEventListener('langchange', onChange)
    return () => window.removeEventListener('langchange', onChange)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 scroll-smooth">
      <Helmet>
        <html lang={lang === 'zh-TW' ? 'zh-Hant' : 'en'} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.jpg" />
        <meta name="theme-color" content="#0a0a0a" />
      </Helmet>

      <SiteHeader lang={lang} t={t} />

      <main>
        <Hero t={t} />
        <Intro t={t} />
        <Director t={t} />
        <BTSGallery t={t} />
        <Portfolio t={t} />
        <Contact t={t} />
      </main>

      <SiteFooter t={t} />
    </div>
  )
}

function LanguageSwitcher({ lang }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        onClick={() => setLang('zh-TW')}
        className={clsx('px-2 py-1 rounded-lg border', lang==='zh-TW' ? 'border-white/40' : 'border-white/10 hover:border-white/30')}
      >繁中</button>
      <button
        onClick={() => setLang('en')}
        className={clsx('px-2 py-1 rounded-lg border', lang==='en' ? 'border-white/40' : 'border-white/10 hover:border-white/30')}
      >EN</button>
    </div>
  )
}

function SiteHeader({ lang, t }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-900/70 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <span className="font-semibold tracking-wide">Realmate Production</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#intro" className="hover:text-white">{t.nav_about}</a>
          <a href="#director" className="hover:text-white">{t.nav_director}</a>
          <a href="#bts" className="hover:text-white">{t.nav_bts}</a>
          <a href="#work" className="hover:text-white">{t.nav_work}</a>
          <a href="#contact" className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20">{t.nav_contact}</a>
          <LanguageSwitcher lang={lang} />
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.75 6.75h16.5v1.5H3.75v-1.5zm0 4.5h16.5v1.5H3.75v-1.5zm0 4.5h16.5v1.5H3.75v-1.5z"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-900/80">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#intro" className="py-2">{t.nav_about}</a>
            <a onClick={() => setOpen(false)} href="#director" className="py-2">{t.nav_director}</a>
            <a onClick={() => setOpen(false)} href="#bts" className="py-2">{t.nav_bts}</a>
            <a onClick={() => setOpen(false)} href="#work" className="py-2">{t.nav_work}</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">{t.nav_contact}</a>
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(72rem_72rem_at_50%_-10%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(56rem_56rem_at_80%_30%,rgba(217,70,239,0.25),transparent_55%)]"/>
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            {t.hero_title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium">{t.hero_cta_watch}</a>
            <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10">{t.hero_cta_quote}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Intro({ t }) {
  return (
    <section id="intro" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.position_title}</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            {t.position_desc}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-neutral-300">
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400"/>{t.bullets_1}</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400"/>{t.bullets_2}</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400"/>{t.bullets_3}</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400"/>{t.bullets_4}</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <p className="text-sm uppercase tracking-widest text-neutral-400">Slogan</p>
          <p className="mt-2 text-xl font-medium">Real stories. Real impact.</p>
          <p className="mt-4 text-neutral-300 text-sm">LA / Taipei</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <Stat n={120} label="Projects" />
            <Stat n={48} label="Brands" />
            <Stat n={12} label="Awards" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, label }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="text-2xl font-semibold">{n}+</div>
      <div className="text-neutral-400 text-xs mt-1">{label}</div>
    </div>
  );
}

function Director({ t }) {
  return (
    <section id="director" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1640&auto=format&fit=crop"
            alt="Director portrait"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{t.director_title}</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            {t.director_desc}
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
            <li>・Commercials / Brand films / Social</li>
            <li>・Music videos / Shorts / Documentary segments</li>
            <li>・Tech, CPG, Fashion and Startups</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function BTSGallery({ t }) {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop', alt: 'BTS 1' },
    { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop', alt: 'BTS 2' },
    { src: 'https://images.unsplash.com/photo-1542332213-9b5a5a87e611?q=80&w=1200&auto=format&fit=crop', alt: 'BTS 3' },
  ];

  return (
    <section id="bts" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.bts_title}</h2>
        <p className="text-sm text-neutral-400">{t.bts_note}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {photos.map((p, i) => (
          <ZoomableImage key={i} src={p.src} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}

function ZoomableImage({ src, alt }) {
  const [zoom, setZoom] = useState(false);
  return (
    <>
      <button onClick={() => setZoom(true)} className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800">
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </button>
      {zoom && (
        <div className="fixed inset-0 z-50 bg-black/70 p-6 backdrop-blur flex items-center justify-center" onClick={() => setZoom(false)}>
          <img src={src} alt={alt} className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-white/20" />
        </div>
      )}
    </>
  );
}

function Portfolio({ t }) {
  const works = [
    { title: 'Brand Film — MIRAI', img: 'https://images.unsplash.com/photo-1620138546348-3a2ad21aab05?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-1' },
    { title: 'Product Ad — VERVE Bottle', img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-2' },
    { title: 'Short — Midnight Locker', img: 'https://images.unsplash.com/photo-1499229694635-fc626e0d9c00?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-3' },
    { title: 'MV — Night Drive', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-4' },
    { title: 'Social — Pop-up Event', img: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-5' },
    { title: 'Doc Clip — Homecoming', img: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1200&auto=format&fit=crop', href: 'https://example.com/work-6' },
  ];

  return (
    <section id="work" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.works_title}</h2>
        <p className="text-sm text-neutral-400">{t.works_note}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {works.map((w, i) => (
          <article key={i} className="group rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900/40">
            <a href={w.href} target="_blank" rel="noopener noreferrer" aria-label={`${w.title} external`}>
              <div className="aspect-video overflow-hidden">
                <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </a>
            <div className="p-4">
              <h3 className="font-medium leading-snug">{w.title}</h3>
              <div className="mt-3 flex items-center justify-between">
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20">View</a>
                <span className="text-xs text-neutral-400">{t.ext_newtab}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
      if (res.ok) { setStatus('success'); form.reset(); }
      else {
        const payload = await res.json().catch(() => ({}))
        setError(payload?.error || (t.form_error_generic))
        setStatus('error')
      }
    } catch (err) { setError(t.form_error_network); setStatus('error') }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{t.contact_title}</h2>
          <p className="mt-4 text-neutral-300">{t.contact_desc}</p>
          <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
            <li>・Email：contact@realmate.pro</li>
            <li>・LA / Taipei</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <form onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-note">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label={t.form_name} name="name" required placeholder="Your name" />
              <Field label={t.form_email} type="email" name="email" required placeholder="you@example.com" />
            </div>
            <Field label={t.form_company} name="company" placeholder="Optional" />
            <Field label={t.form_timeline} name="timeline" placeholder="e.g. 2025/09 or Q4" />
            <div>
              <label className="block text-sm mb-1" htmlFor="message">{t.form_message}</label>
              <textarea id="message" name="message" required placeholder={t.form_message_ph} className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <input type="hidden" name="_subject" value="Realmate Production – New Inquiry" />
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
            <div className="flex items-center justify-between gap-3">
              <button disabled={status==='submitting'} type="submit" className="px-5 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed font-medium">
                {status === 'submitting' ? t.form_sending : t.form_submit}
              </button>
              <p id="contact-note" className="text-xs text-neutral-400">No page redirect on submit.</p>
            </div>
            {status === 'success' && (
              <div className="rounded-xl border border-emerald-700 bg-emerald-900/30 text-emerald-200 p-3">{t.form_success}</div>
            )}
            {status === 'error' && (
              <div className="rounded-xl border border-rose-700 bg-rose-900/30 text-rose-200 p-3">{error}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-1" htmlFor={name}>{label}{required && <span className="text-rose-400"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  )
}

function SiteFooter({ t }) {
  const now = new Date().getFullYear()
  return (
    <footer className="border-top border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400">© {now} Realmate Production. All rights reserved.</p>
        <div className="flex items-center gap-4 text-neutral-400">
          <a href="#top" className="hover:text-white">{t.footer_top}</a>
        </div>
      </div>
    </footer>
  )
}
