import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReWear — Moda Circular Verificada con Blockchain',
  description:
    'ReWear es una plataforma descentralizada de compra-venta de ropa de segunda mano que combina inteligencia artificial, NFTs y pago con custodia (escrow) para garantizar autenticidad y confianza sin intermediarios.',
  keywords: ['moda circular', 'segunda mano', 'blockchain', 'NFT', 'IA', 'escrow', 'ReWear'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
