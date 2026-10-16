import './globals.css';

export const metadata = {
  title: 'Welcome ITZ Fizz | Scroll-Driven Hero',
  description: 'Scroll-driven hero section animation built with Next.js, Tailwind and GSAP.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
