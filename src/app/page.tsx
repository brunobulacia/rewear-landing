import {
  Shirt, Recycle, ArrowRight, Target, Eye, Heart, MapPin, Mail,
  Leaf, Sparkles, ShieldCheck, Handshake,
} from 'lucide-react';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://rewear-app-xi.vercel.app';

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
        <Shirt className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight">ReWear</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
            <a href="#proposito" className="hover:text-slate-900 transition-colors">Propósito</a>
            <a href="#producto" className="hover:text-slate-900 transition-colors">Producto</a>
            <a href="#equipo" className="hover:text-slate-900 transition-colors">Equipo</a>
            <a href="#contacto" className="hover:text-slate-900 transition-colors">Contáctanos</a>
          </nav>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Ir a la app <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm mb-7">
            <MapPin className="w-3.5 h-3.5" /> Startup boliviana · Santa Cruz de la Sierra
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] max-w-3xl mx-auto">
            Somos <span className="text-indigo-600">ReWear</span>, moda circular con tecnología que genera confianza
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Una startup nacida en <strong className="text-slate-700">Santa Cruz de la Sierra, Bolivia</strong>, con una misión simple:
            darle una segunda vida a la ropa de forma <strong className="text-slate-700">confiable, transparente y sostenible</strong>.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#nosotros"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
              Conocé nuestra historia <ArrowRight className="w-4 h-4" />
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors">
              Ir a la plataforma
            </a>
          </div>
        </div>
      </section>

      {/* ─── Nosotros ─── */}
      <section id="nosotros" className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Quiénes somos</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Una startup cruceña que cree en la moda con propósito</h2>
            <div className="mt-5 space-y-4 text-slate-500 leading-relaxed">
              <p>
                ReWear nació en <strong className="text-slate-700">Santa Cruz de la Sierra</strong> de la mano de un equipo de jóvenes
                emprendedores y desarrolladores que veían un mismo problema: comprar y vender ropa usada
                entre personas es desconfiado, informal e inseguro.
              </p>
              <p>
                Decidimos resolverlo combinando <strong className="text-slate-700">tecnología de punta</strong> —inteligencia artificial
                y blockchain— con una idea muy humana: que la moda circular crezca cuando las personas
                <strong className="text-slate-700"> confían</strong> en lo que compran y venden.
              </p>
              <p>
                Somos una empresa joven, local y ambiciosa, que apuesta por un consumo más responsable
                y por poner a Bolivia en el mapa de la innovación.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Recycle className="w-5 h-5" />, k: 'Moda circular', v: 'Menos descarte, más reutilización.' },
              { icon: <ShieldCheck className="w-5 h-5" />, k: 'Confianza', v: 'Tecnología que verifica y protege.' },
              { icon: <Leaf className="w-5 h-5" />, k: 'Sostenibilidad', v: 'Un impacto ambiental positivo.' },
              { icon: <MapPin className="w-5 h-5" />, k: 'Hecho en Bolivia', v: 'Orgullo cruceño, visión global.' },
            ].map((c) => (
              <div key={c.k} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">{c.icon}</div>
                <p className="font-semibold text-slate-900">{c.k}</p>
                <p className="text-sm text-slate-500 mt-1">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Propósito: Misión / Visión / Valores ─── */}
      <section id="proposito" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Nuestro propósito</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lo que nos mueve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />, title: 'Misión',
                desc: 'Hacer de la compra-venta de ropa de segunda mano una experiencia confiable, transparente y accesible para todos, eliminando el miedo a la estafa y a la falsificación.',
              },
              {
                icon: <Eye className="w-6 h-6" />, title: 'Visión',
                desc: 'Ser la plataforma de moda circular de referencia en Bolivia y la región, demostrando que la tecnología puede impulsar un consumo más responsable y sostenible.',
              },
              {
                icon: <Heart className="w-6 h-6" />, title: 'Valores',
                desc: 'Confianza, transparencia y sostenibilidad. Creemos en la economía circular, en la innovación con propósito y en construir desde Bolivia para el mundo.',
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5">{s.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Producto ─── */}
      <section id="producto" className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Nuestro producto</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Construimos una plataforma que hace realidad nuestra misión</h2>
          <p className="mt-4 text-slate-500">
            Una app donde cada prenda se verifica con inteligencia artificial, recibe un pasaporte digital en blockchain
            y se compra con pago protegido. Así llevamos la confianza a la moda circular.
          </p>
        </div>
        <ScreenshotShowcase />
      </section>

      {/* ─── Equipo ─── */}
      <section id="equipo" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Nuestro equipo</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Las personas detrás de ReWear</h2>
            <p className="mt-4 text-slate-500">Un equipo cruceño apasionado por la tecnología y la sostenibilidad.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Bruno Leandro Bulacia Paz', role: 'Cofundador · Desarrollo' },
              { name: 'Richard Junior Vargas Osinaga', role: 'Cofundador · Producto' },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold shrink-0">
                  {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{m.name}</p>
                  <p className="text-sm text-indigo-600 mt-0.5">{m.role}</p>
                  <p className="text-xs text-slate-400 mt-1 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Santa Cruz de la Sierra, Bolivia
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ubicación / Contacto ─── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Contáctanos</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Desde Santa Cruz de la Sierra, para el mundo</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Somos una startup boliviana con base en <strong className="text-slate-700">Santa Cruz de la Sierra</strong>.
              Creemos que desde Bolivia se puede construir tecnología de clase mundial con impacto social y ambiental.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <p className="inline-flex items-center gap-2.5 text-slate-600">
                <span className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><MapPin className="w-4 h-4" /></span>
                Santa Cruz de la Sierra, Bolivia
              </p>
              <p className="inline-flex items-center gap-2.5 text-slate-600">
                <span className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><Mail className="w-4 h-4" /></span>
                rewear@gmail.com
              </p>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Seguinos</p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/rewear_fashion/" target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.72a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.24-.06-1.61-.07-4.76-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36Zm5.2-.66a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@rewear.bo_fashion" target="_blank" rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 rounded-xl border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12V9.79a5.67 5.67 0 0 0-.78-.05 5.69 5.69 0 1 0 5.69 5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.25-1.48Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rewear-bo-8a3514418/" target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-14 text-center">
            <Handshake className="w-8 h-8 text-indigo-200 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Sumate a la moda circular</h3>
            <p className="mt-3 text-indigo-100">Conocé la plataforma y empezá a comprar o vender con confianza.</p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Ir a ReWear <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Logo />
              <p className="text-sm text-slate-400">Moda circular con confianza, desde Bolivia.</p>
            </div>
            <div className="text-center md:text-right text-sm text-slate-500">
              <p className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Santa Cruz de la Sierra, Bolivia</p>
              <p className="mt-1 text-slate-400">rewear@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} ReWear. Todos los derechos reservados.</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Hecho con propósito en Santa Cruz de la Sierra</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
