import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#fffaf2] px-6 py-20 text-foreground dark:bg-[#1b1713] sm:px-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-orange-200 bg-orange-50 p-8 dark:border-orange-900/80 dark:bg-[#2b2119] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-400">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Let&apos;s talk about food.
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Have a recipe suggestion or feedback for FeastBud? We&apos;d love to
          hear what you want to see on the table next.
        </p>
        <a
          className="mt-8 inline-flex rounded-lg bg-orange-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-800 dark:bg-orange-500 dark:text-black dark:hover:bg-orange-400"
          href="mailto:hello@feastbud.com"
        >
          Email FeastBud
        </a>
        <Link
          className="ml-3 inline-flex rounded-lg border border-orange-300 px-5 py-3 font-semibold text-orange-800 transition-colors hover:bg-orange-100 dark:border-orange-700 dark:text-orange-100 dark:hover:bg-orange-900/50"
          href="/"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
