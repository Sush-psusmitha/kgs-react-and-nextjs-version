import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center pt-17 text-center">
      <h1 className="mb-3 font-heading text-4xl font-bold text-neutral-900">404 — Page Not Found</h1>
      <p className="mb-6 font-body text-neutral-500">The page you're looking for doesn't exist yet.</p>
      <Link href="/" className="font-heading text-sm font-semibold text-kgs-primary hover:underline">
        &larr; Back to Home
      </Link>
    </section>
  )
}
