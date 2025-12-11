import React from "react";
import { Section } from "@/components/ui/Section";
import { Mail, MessageSquare, Send, ArrowRight, Instagram } from "lucide-react";
// import { prisma } from "@/lib/prisma"; // Descomente quando configurar o banco
// import { redirect } from "next/navigation";

// --- SERVER ACTION (Lógica do Backend) ---
async function submitContact(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("Sinal recebido:", { name, email, message });

  // ⚠️ PRISMA: Descomente as linhas abaixo quando tiver sua tabela criada
  /*
  await prisma.contact.create({
    data: {
      name,
      email,
      message,
      createdAt: new Date(),
    },
  });
  */

  // Opcional: Redirecionar após sucesso
  // redirect("/contato?success=true");
}

export default function ContatoPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper min-h-screen">
      
      {/* Cabeçalho / Hero */}
      <Section
        title="Canal Aberto"
        subtitle="Envie seu sinal. Seja para projetos, rituais ou colaborações."
        headingLevel="h1"
        className="pt-16 pb-8 md:pt-20 md:pb-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* COLUNA 1: INFORMAÇÕES E REDES (Mobile First) */}
          <div className="space-y-8">
            
            {/* Box de Texto */}
            <div className="prose prose-invert">
              <p className="text-lg text-white/80 leading-relaxed">
                O ecossistema Marroc opera em múltiplas frequências. 
                Se você busca a tecnologia da <strong>Solutions</strong>, a cura do <strong>Reiki</strong> ou 
                a sonoridade do <strong>Higher Hz</strong>, este é o ponto de convergência.
              </p>
            </div>

            {/* Cards de Contato Rápido */}
            <div className="grid gap-4">
              
              {/* WhatsApp (Destaque Principal - Verde) */}
              <a 
                href="https://wa.me/5521992669980" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 p-3 rounded-full text-green-500 group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">WhatsApp</h3>
                    <p className="text-sm text-white/50">Resposta rápida e direta</p>
                  </div>
                </div>
                <ArrowRight className="text-white/30 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Instagram (Atualizado para @marroc.life) */}
              <a 
                href="https://instagram.com/marroc.life" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-amber-200/30 transition-all"
              >
                <div className="bg-white/5 p-3 rounded-full text-white/70 group-hover:text-amber-200 transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">Instagram</h3>
                  <p className="text-sm text-amber-200 font-bold">@marroc.life</p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#121212] border border-white/10">
                <div className="bg-white/5 p-3 rounded-full text-white/70">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">Email</h3>
                  <p className="text-sm text-white/50">contato@marroc.com.br</p>
                </div>
              </div>

            </div>
          </div>

          {/* COLUNA 2: FORMULÁRIO (Server Action) */}
          <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Efeito de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/5 rounded-full blur-[80px] pointer-events-none"></div>

            <h3 className="font-display text-2xl text-white mb-6 relative z-10">
              Transmissão de Mensagem
            </h3>

            <form action={submitContact} className="space-y-5 relative z-10">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-amber-200/70 font-bold ml-1">
                  Identificação (Nome)
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required
                  placeholder="Como devo te chamar?"
                  className="w-full bg-[#0b0b0b] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/50 transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-amber-200/70 font-bold ml-1">
                  Frequência de Retorno (Email)
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-[#0b0b0b] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/50 transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-amber-200/70 font-bold ml-1">
                  O Código (Mensagem)
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full bg-[#0b0b0b] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/50 transition-all placeholder:text-white/20 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn bg-amber-200 text-black font-bold hover:bg-amber-100 py-4 rounded-xl flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(253,230,138,0.1)]"
              >
                Enviar Transmissão <Send size={18} />
              </button>
              
              <p className="text-xs text-center text-white/30 pt-2">
                * Seus dados estão protegidos pelo Guardião.
              </p>

            </form>
          </div>

        </div>
      </Section>
    </main>
  );
}