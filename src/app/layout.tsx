
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Superwomen - Natural Period Pain Relief',
  description: 'Your guide to a comfortable period. Natural relief for menstrual cramps, bloating, and fatigue.',
  icons: {
    icon: 'https://res.cloudinary.com/dmwghrxqt/image/upload/v1767710641/Red_and_Beige_Vintage_Bold_Typographic_Beauty_Salon_Logo_kp45ai.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-secondary">
        <div className="max-w-screen-2xl mx-auto bg-background border-x border-border p-4">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
