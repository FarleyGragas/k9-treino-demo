import React from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative h-[68vh] min-h-[420px] flex items-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,35,64,0.85)] via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.6)]" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl text-center mx-auto text-white">
          <div className="inline-flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full mb-6">
            <span className="text-[var(--accent)] font-bold">K9</span>
            <span className="text-sm text-[var(--muted)]">Treinamento profissional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Treinamento, disciplina e evolução</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">Método tático e progressivo para transformar comportamento com acompanhamento profissional — aulas, práticas e feedbacks contínuos.</p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="/cadastro" className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-[var(--brand-dark)] rounded-md font-semibold shadow-lg hover:brightness-95">Criar minha conta</a>
            <a href="#como-funciona" className="inline-flex items-center px-5 py-3 border border-white/20 rounded-md text-white/90 hover:bg-white/5">Como funciona</a>
          </div>

          <div className="mt-6 text-sm text-[var(--muted)]">Para tutores, instrutores e equipes K9 — privacidade e segurança garantidas.</div>
        </div>
      </div>
    </section>
  );
}
