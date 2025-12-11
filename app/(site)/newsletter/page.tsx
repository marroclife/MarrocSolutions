import { Section } from "@/components/ui/Section";
// Update the import path below to match the actual location and filename of your Heading component.
// For example, if the file is named 'headings.tsx' use:


export default function NewsletterPage() {
  return (
    <Section>
      <div className="container max-w-xl">
        <Section>Newsletter</Section>
        <p className="subtle mt-3">Receba ensaios, rituais e lançamentos. Sem spam.</p>
        <form className="card p-6 mt-6" method="post" action="/api/subscribe">
          <label className="block text-sm">Email
            <input type="email" name="email" className="mt-1 w-full rounded-xl bg-white/10 px-4 py-3 outline-none" required />
          </label>
          <button className="btn btn-primary mt-6" type="submit">Assinar</button>
        </form>
      </div>
    </Section>
  );
}
