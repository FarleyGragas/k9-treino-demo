import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Dashboard() {
  // Mock data for demo
  const user = { name: 'João Silva', city: 'Vitória, ES' };
  const dog = { name: 'Rex', breed: 'Pastor Alemão', age: 4, objective: 'Obediência básica' };
  const progress = 42;

  return (
    <>
      <Head>
        <title>Dashboard — K9 TÁTICO</title>
      </Head>

      <Header />
      <main className="container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold">Olá, {user.name}</h2>
              <p className="text-sm text-[var(--muted)] mt-2">Cidade: {user.city}</p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Progresso do treinamento</h3>
                <div className="mt-2 h-4 bg-gray-200 rounded overflow-hidden">
                  <div className="h-4 bg-[var(--accent)]" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-2 text-sm text-[var(--muted)]">Etapa atual: Módulo 2 • {progress}% concluído</div>

                <div className="mt-6 flex gap-3">
                  <a className="btn-primary" href="/meu-treinamento">Continuar treinamento</a>
                  <a className="px-4 py-2 border rounded-md" href="/perfil">Meu perfil</a>
                </div>
              </div>
            </div>

            <div className="card mt-6">
              <h3 className="text-lg font-semibold">Próxima aula</h3>
              <p className="mt-2 text-[var(--muted)]">Treino prático: Comando 'fica' — vídeo disponível em Videoaulas</p>
              <div className="mt-4 flex gap-2">
                <a className="px-4 py-2 border rounded-md" href="/videoaulas">Assistir aula</a>
                <a className="px-4 py-2 bg-[var(--accent)] text-[var(--brand-dark)] rounded-md" href="/minhas-atividades">Enviar vídeo</a>
              </div>
            </div>

            <div className="card mt-6">
              <h3 className="text-lg font-semibold">Últimas atividades</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>Envio de vídeo — Correção pendente</li>
                <li>Comentário do instrutor — 3 dias atrás</li>
                <li>Aula assistida — Módulo 2</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="card">
              <h4 className="font-semibold">Perfil do cachorro</h4>
              <p className="mt-2 text-sm">Nome: {dog.name}</p>
              <p className="text-sm">Raça: {dog.breed}</p>
              <p className="text-sm">Idade: {dog.age} anos</p>
              <p className="text-sm">Objetivo: {dog.objective}</p>
            </div>

            <div className="card mt-6">
              <h4 className="font-semibold">Avisos</h4>
              <ul className="mt-2 text-[var(--muted)] text-sm">
                <li>Verifique sua avaliação inicial</li>
                <li>Próxima revisão: 7 dias</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
