'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORDS = ['WELCOME', 'ITZ', 'FIZZ'];

const STATS = [
  { value: '92%', label: 'Faster page loads' },
  { value: '58%', label: 'More visitor engagement' },
  { value: '27%', label: 'Higher conversions' },
  { value: '40%', label: 'Lower bounce rate' },
];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    // gsap.context scopes selectors to this component and cleans up on unmount
    const ctx = gsap.context(() => {
      /* 1. Intro: headline letters, then stats one by one, then the car */
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.hl-char', { y: 50, opacity: 0, duration: 0.9, stagger: 0.05 })
        .from('.stat', { y: 40, opacity: 0, duration: 0.8, stagger: 0.18 }, '-=0.3')
        .from('.car', { opacity: 0, duration: 1 }, '-=0.9');

      /* 2. Scroll: one timeline, driven by scroll progress (scrub), not time.
            scrub: 1 adds a one-second catch-up so motion feels smooth. */
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=2200',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .fromTo('.car', { x: '-12vw' }, { x: '58vw', scale: 1.15 }, 0)
        .to('.wheel-rear', { rotation: 1080, svgOrigin: '100 112' }, 0)
        .to('.wheel-front', { rotation: 1080, svgOrigin: '305 112' }, 0)
        .to('.road-dashes', { x: '-40vw' }, 0)
        .to('.headline', { y: -70, scale: 0.92, opacity: 0.3 }, 0)
        .to('.stat', { y: -24, stagger: 0.05 }, 0.2)
        .to('.glow', { opacity: 1, scale: 1.5 }, 0);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex h-screen flex-col items-center overflow-hidden bg-ink px-6 pt-[12vh]"
    >
      {/* soft light that grows as the car moves */}
      <div className="glow pointer-events-none absolute bottom-[10vh] left-1/2 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-fizz/10 opacity-0 blur-3xl will-change-transform" />

      <h1 className="headline z-10 flex flex-wrap justify-center gap-x-[1.4em] pl-[0.5em] text-[clamp(1.5rem,5.2vw,4.6rem)] font-bold tracking-[0.5em] will-change-transform">
        {WORDS.map((word) => (
          <span key={word} className="whitespace-nowrap">
            {[...word].map((ch, i) => (
              <span key={i} className="hl-char inline-block">
                {ch}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <ul className="z-10 mt-[7vh] grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-8 text-center md:grid-cols-4">
        {STATS.map((s) => (
          <li key={s.label} className="stat will-change-transform">
            <p className="text-4xl font-bold text-fizz md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
          </li>
        ))}
      </ul>

      {/* road */}
      <div className="absolute bottom-[18vh] left-0 w-full border-t border-zinc-700" />
      <div
        className="road-dashes absolute bottom-[calc(18vh-14px)] left-0 h-[3px] w-[260vw] will-change-transform"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #3f4652 0 60px, transparent 60px 140px)',
        }}
      />

      {/* car (inline SVG, so no image files needed) */}
      <div className="car absolute bottom-[calc(18vh-1px)] left-0 w-[min(46vw,430px)] min-w-[230px] will-change-transform">
        <svg viewBox="0 0 400 145" role="img" aria-label="Sports car" className="block w-full">
          <path
            d="M20 100 L40 72 Q50 62 70 60 L128 52 Q150 30 192 28 L250 28 Q292 30 312 58 L360 66 Q386 72 386 100 L386 112 L20 112 Z"
            fill="#c6ff3d"
          />
          <path d="M140 54 Q158 38 192 36 L206 36 L206 58 Z" fill="#0a0c10" />
          <path d="M216 36 L250 36 Q276 38 294 58 L216 58 Z" fill="#0a0c10" />
          <rect x="360" y="82" width="26" height="8" rx="3" fill="#fff6a8" />
          <rect x="20" y="82" width="16" height="8" rx="3" fill="#ff4d4d" />
          <g className="wheel-rear">
            <circle cx="100" cy="112" r="30" fill="#14171d" />
            <circle cx="100" cy="112" r="17" fill="#8a919e" />
            <path d="M100 95V129M83 112H117" stroke="#14171d" strokeWidth="5" />
          </g>
          <g className="wheel-front">
            <circle cx="305" cy="112" r="30" fill="#14171d" />
            <circle cx="305" cy="112" r="17" fill="#8a919e" />
            <path d="M305 95V129M288 112H322" stroke="#14171d" strokeWidth="5" />
          </g>
        </svg>
      </div>
    </section>
  );
}
