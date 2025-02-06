import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-gold pt-20 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4 animate-fade-in font-light tracking-wide">
          Notre Blog
        </h1>
        <p className="text-gold/80 text-center mb-20 max-w-2xl mx-auto animate-fade-in-delay text-lg">
          
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/43zrDpGj/Snapinst-app-468099060-18001067942697695-1268457547128740460-n-1080.jpg"
                  alt="Notre Histoire" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                L’Atmosphère Unique du Dôme
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                Plongez dans une ambiance chaleureuse où chaque détail, de la décoration à la musique, est pensé pour vous faire vivre un moment d’exception. Le Dôme, plus qu’un restaurant, une expérience !
                </p>
              </div>
            </div>
          </article>

          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/G2dZd9ht/Snapinst-app-468098358-18001065221697695-5839894859924354104-n-1080.jpg"
                  alt="Notre Chef" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                Pourquoi Nos Ingrédients Font la Différence
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                Au Dôme, chaque ingrédient est soigneusement sélectionné pour garantir fraîcheur et qualité. Du marché à votre assiette, l’authenticité est notre priorité.
                </p>
              </div>
            </div>
          </article>

          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/MT5gTxvD/Snapinst-app-467983632-18001055216697695-6567517780528888347-n-1080.jpg"
                  alt="Événements" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                L’Art du Service au Dôme : Une Expérience Unique
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                Derrière chaque plat, une équipe passionnée veille à offrir un accueil chaleureux et une expérience mémorable. Chez nous, chaque client est un invité d’honneur !
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;