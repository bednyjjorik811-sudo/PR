import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Коллекция керамики',
  description: 'Тарелки, кружка и ваза из коллекции керамики.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
