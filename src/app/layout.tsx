import type { Metadata } from 'next';
import './globals.css';
import { ChatWidget } from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'ReWear — Startup de Moda Circular | Santa Cruz de la Sierra, Bolivia',
  description:
    'ReWear es una startup boliviana de moda circular nacida en Santa Cruz de la Sierra. Combinamos tecnología (IA y blockchain) con un propósito sostenible: darle una segunda vida a la ropa de forma confiable y transparente.',
  keywords: ['ReWear', 'startup', 'Bolivia', 'Santa Cruz de la Sierra', 'moda circular', 'segunda mano'],
  icons : {icon : '/icon.ico'}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased">
        {/* Anti-flash: aplica el tema guardado (o el del sistema) antes del paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rewear-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
