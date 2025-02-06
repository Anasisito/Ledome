import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-gold pt-20 px-4">
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-20">Notre Blog</h1>

        <div className="grid gap-12">
          <article className="border border-gold/20 p-8 rounded-lg backdrop-blur-sm hover:border-gold/30 transition">
            <h2 className="text-xl md:text-2xl font-serif mb-6">Notre Histoire</h2>
            <p className="text-gold/80 mb-8 text-sm md:text-base leading-relaxed">
              Situé au cœur de Kenitra, Le Dôme est une institution gastronomique.
              Notre restaurant étoilé propose une cuisine  raffinée dans un cadre élégant
              alliant tradition et modernité.
            </p>
            <div className="text-gold/60 text-sm md:text-base">
              <p className="font-serif mb-2">Adresse:</p>
              <p>22 Av. Said Daoudi</p>
              <p>Kénitra 14000</p>
            </div>
          </article>

          <article className="border border-gold/20 p-8 rounded-lg backdrop-blur-sm hover:border-gold/30 transition">
            <h2 className="text-xl md:text-2xl font-serif mb-6">Notre Chef</h2>
            <p className="text-gold/80 text-sm md:text-base leading-relaxed">
              Le Chef "x" avec ses 25 années d'expérience dans la haute
              gastronomie, apporte sa touche unique à chaque plat. Sa passion pour les produits
              de saison et son expertise technique se reflètent dans chaque création.
            </p>
          </article>

          <article className="border border-gold/20 p-8 rounded-lg backdrop-blur-sm hover:border-gold/30 transition">
            <h2 className="text-xl md:text-2xl font-serif mb-6">Événements Spéciaux</h2>
            <p className="text-gold/80 text-sm md:text-base leading-relaxed">
              Nous organisons régulièrement des soirées dégustation et des événements spéciaux.
              Suivez-nous sur nos réseaux sociaux pour rester informé de nos actualités.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;