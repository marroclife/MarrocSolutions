import { Section } from "@/components/ui/Section";

export default function ContatoPage() {
  return (
    <Section>
      <div className="container max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <form className="card p-6 mt-6" method="post" action="https://formspree.io/f/your-id">
          <label className="block text-sm">Nome
            <input name="name" className="mt-1 w-full rounded-xl bg-white/10 px-4 py-3 outline-none" required />
          </label>
          <label className="block text-sm mt-4">Email
            <input type="email" name="email" className="mt-1 w-full rounded-xl bg-white/10 px-4 py-3 outline-none" required />
          </label>
          <label className="block text-sm mt-4">Mensagem
            <textarea name="message" rows={5} className="mt-1 w-full rounded-xl bg-white/10 px-4 py-3 outline-none" required />
          </label>
          <button className="btn btn-primary mt-6" type="submit">Enviar</button>
          <a className="btn btn-outline mt-3" href="https://wa.me/5521XXXXXXXXX" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
        </form>
      </div>
    </Section>
  );
}
