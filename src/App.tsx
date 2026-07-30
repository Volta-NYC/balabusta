function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-rose-700">
            Balabusta
          </p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            A clean front-end foundation is ready.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            React, Tailwind CSS, and TypeScript are wired through Vite with room
            for the product to take shape.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tool) => (
            <span
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
