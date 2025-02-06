import React from 'react';

const Accueil = () => {
  return (
    <div className="min-h-screen bg-black text-gold pt-28">
      <div className="relative h-[90vh]">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Le Dôme Restaurant" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center px-4">
            <img
              src="https://i.postimg.cc/cCDqhQZq/LEDOME.png"
              alt="Le Dôme"
              className="mx-auto h-72 object-contain mix-blend-screen brightness-200 contrast-200 mb-12"
            />
            <p className="text-xl md:text-2xl font-light tracking-wide">Une expérience gastronomique exceptionnelle</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Bienvenue chez Le Dôme</h2>
          <p className="text-gold/80 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            Au cœur de Paris, Le Dôme vous invite à découvrir une cuisine française raffinée
            dans un cadre élégant et chaleureux. Notre chef étoilé crée des plats exceptionnels
            qui célèbrent les meilleurs produits de saison.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 border border-gold/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-serif">Nos Horaires</h3>
            <div className="space-y-2 text-sm md:text-base">
              <p>Lundi - Vendredi</p>
              <p className="text-gold/80">7h30 - 00h</p>
              <p className="mt-4">Samedi - Dimanche</p>
              <p className="text-gold/80">7h30 - 01h00</p>
            </div>
          </div>
          <div className="space-y-6 p-8 border border-gold/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-serif">Notre Emplacement</h3>
            <div className="space-y-2">
              <p className="text-sm md:text-base">Adresse:</p>
              <p className="text-xl md:text-2xl font-light">22 Av. Said Daoudi, Kénitra 14000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;