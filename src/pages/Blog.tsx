import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-gold pt-20 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4 animate-fade-in font-light tracking-wide">
          Notre Blog
        </h1>
        <p className="text-gold/80 text-center mb-20 max-w-2xl mx-auto animate-fade-in-delay text-lg">
          Découvrez les dernières actualités, événements et histoires de Le Dôme
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  alt="Notre Histoire" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                  Notre Histoire
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                  Découvrez l'histoire fascinante de Le Dôme, depuis ses débuts modestes jusqu'à
                  son statut actuel d'institution gastronomique à Kenitra.
                </p>
              </div>
            </div>
          </article>

          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  alt="Notre Chef" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                  Notre Chef
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                  Rencontrez notre chef étoilé et découvrez sa philosophie culinaire unique
                  qui fait la renommée de Le Dôme.
                </p>
              </div>
            </div>
          </article>

          <article className="group hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="border border-gold/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470243518585-56e504dfa6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  alt="Événements" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors font-light tracking-wide">
                  Soirées Dégustation
                </h2>
                <p className="text-gold/80 text-base leading-relaxed">
                  Participez à nos soirées dégustation exclusives et découvrez
                  des accords mets-vins exceptionnels.
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