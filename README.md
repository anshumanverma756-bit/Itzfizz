# Scroll-Driven Hero Animation

Hero section with an intro animation and a scroll-scrubbed car, built with
**Next.js (React), Tailwind CSS, GSAP + ScrollTrigger**.

## How it works
- **Intro:** headline letters stagger in, then stats appear one by one (GSAP timeline).
- **Scroll:** the section is pinned and a single timeline is scrubbed by scroll progress
  (`scrub: 1` gives smooth catch-up). The car travels across, wheels spin, road moves.
- **Performance:** only `transform` and `opacity` are animated; no layout reads on scroll.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
Push to `main`. In the repo go to **Settings > Pages > Source: GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds the static export and publishes it.
