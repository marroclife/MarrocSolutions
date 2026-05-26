import React from 'react';
import { Button } from './Button';
import { Input } from './input';

export const NewsletterForm = () => {
  return (
    <div className="mt-12 p-8 border border-neutral-800 bg-neutral-950 rounded-2xl text-center flex flex-col items-center gap-6">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">Receba Insights de Performance e IA</h4>
        <p className="text-neutral-400">Análises profundas enviadas diretamente para o seu email.</p>
      </div>
      <form className="w-full max-w-md flex flex-col md:flex-row gap-3">
        <Input 
          type="email" 
          placeholder="Seu melhor e-mail" 
          className="bg-neutral-900 border-neutral-800 text-white"
        />
        <Button className="bg-[#00FF94] text-black hover:bg-[#00dd85] font-bold px-8">
          Inscrever
        </Button>
      </form>
    </div>
  );
};
