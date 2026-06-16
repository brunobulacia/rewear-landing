'use client';

import { useEffect, useState } from 'react';

const SHOTS = [
  { src: '/screenshots/catalogo.png', title: 'Catálogo verificado', desc: 'Prendas que pasaron la IA, con favoritos.' },
  { src: '/screenshots/ia-verification-1.png', title: 'Verificación con IA', desc: 'La IA de visión analiza cada prenda al publicarla.' },
  { src: '/screenshots/ia-verification-2.png', title: 'Dictamen de autenticidad', desc: 'Aprueba ropa real, rechaza lo que no lo es.' },
  { src: '/screenshots/prenda-nft.png', title: 'Pasaporte NFT', desc: 'Cada prenda con su NFT e historial on-chain.' },
  { src: '/screenshots/checkout-scrow-1.png', title: 'Pago con custodia', desc: 'Los fondos quedan retenidos en el contrato escrow.' },
  { src: '/screenshots/checkout-scrow-2.png', title: 'Firma segura', desc: 'La transacción se confirma desde MetaMask.' },
  { src: '/screenshots/verificador.png', title: 'Verificador de autenticidad', desc: 'Subí una foto y comprobá si está registrada.' },
  { src: '/screenshots/disputas.png', title: 'Resolución de disputas', desc: 'La plataforma media y mueve los fondos on-chain.' },
];

const INTERVAL = 4500;

export function ScreenshotShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % SHOTS.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, active]);

  return (
    <div
      className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tabs */}
      <div className="order-2 lg:order-1 space-y-1.5">
        {SHOTS.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.src}
              onClick={() => setActive(i)}
              className={`relative w-full text-left rounded-xl px-4 py-3 transition-colors overflow-hidden ${
                on ? 'bg-white border border-indigo-200 shadow-sm' : 'border border-transparent hover:bg-white/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                  on ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>{i + 1}</span>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold truncate ${on ? 'text-slate-900' : 'text-slate-600'}`}>{s.title}</p>
                  {on && <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>}
                </div>
              </div>
              {on && !paused && (
                <span
                  key={active}
                  className="absolute bottom-0 left-0 h-0.5 bg-indigo-500"
                  style={{ animation: `shotProgress ${INTERVAL}ms linear` }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Browser mockup */}
      <div className="order-1 lg:order-2">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="ml-3 flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 truncate">
              rewear.app — {SHOTS[active].title}
            </div>
          </div>
          {/* Image area (crossfade) */}
          <div className="relative bg-slate-100 aspect-[16/10]">
            {SHOTS.map((s, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={s.src}
                src={s.src}
                alt={s.title}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {SHOTS.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setActive(i)}
              aria-label={`Ver ${s.title}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-indigo-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
