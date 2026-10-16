import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>K9 TÁTICO — Treinamento Canino Profissional</title>
        <meta name="description" content="Programa profissional de adestramento canino — método tático com acompanhamento." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <HowItWorks />
          <Benefits />
        </main>
        <Footer />
      </div>
    </>
  );
}
