import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReWear — Startup de Moda Circular | Santa Cruz de la Sierra, Bolivia',
  description:
    'ReWear es una startup boliviana de moda circular nacida en Santa Cruz de la Sierra. Combinamos tecnología (IA y blockchain) con un propósito sostenible: darle una segunda vida a la ropa de forma confiable y transparente.',
  keywords: ['ReWear', 'startup', 'Bolivia', 'Santa Cruz de la Sierra', 'moda circular', 'sostenibilidad', 'segunda mano'],
  icons : {icon : '/icon.ico'}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
