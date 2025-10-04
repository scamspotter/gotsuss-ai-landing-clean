export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center bg-neutral-950 text-neutral-200 p-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-neutral-400">Try the homepage or submit something suss.</p>
        <a href="/" className="mt-6 inline-flex rounded-xl bg-white text-neutral-900 px-4 py-2 font-semibold">Back home</a>
      </div>
    </main>
  );
}
