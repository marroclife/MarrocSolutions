import React, { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";

interface PasswordModalProps {
  onSuccess: () => void;
  senha: string;
}

export const PasswordModal: React.FC<PasswordModalProps> = ({ onSuccess, senha }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simula um pequeno delay
    setTimeout(() => {
      if (password === senha) {
        // Não armazena aqui - a página responsável pelo slug armazena
        onSuccess();
      } else {
        setError(true);
        setPassword("");
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-green/20 border border-neon-green/40 mb-4">
            <Lock className="w-6 h-6 text-neon-green" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-white mb-2">
            Área Protegida
          </h2>
          <p className="text-white/60 text-sm">
            Digite a senha para acessar esta proposta
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none transition-colors ${
                error
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-neon-green/50"
              }`}
              autoFocus
              disabled={loading}
            />
          </div>

          {/* Erro */}
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-red-500 text-sm">Senha incorreta</p>
            </div>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                <span>Verificando...</span>
              </>
            ) : (
              <span>Acessar Proposta</span>
            )}
          </button>
        </form>

        {/* Dica (apenas visual, não funcional) */}
        <p className="text-center text-white/30 text-xs mt-6">
          Dica: Procure no início de tudo...
        </p>
      </div>
    </div>
  );
};
