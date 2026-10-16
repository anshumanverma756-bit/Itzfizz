import Hero from '../components/Hero';

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <p className="max-w-xl text-lg text-zinc-400">
          The hero unpins here. Scroll back up to watch the car drive in reverse.
        </p>
      </section>
    </main>
  );
}
