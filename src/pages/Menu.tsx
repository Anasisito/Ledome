import React from 'react';
import { FileDown } from 'lucide-react';

const Menu = () => {
  const downloadMenu = () => {
    // Replace this URL with your actual hosted PDF menu file
    const pdfUrl = '/menu.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Le-Dome-Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-gold pt-24 px-4">
      <div className="max-w-4xl mx-auto py-16">
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-3xl md:text-4xl font-serif">Notre Menu</h1>
          <button
            onClick={downloadMenu}
            className="flex items-center space-x-2 bg-gold/10 hover:bg-gold/20 text-gold px-4 py-2 rounded-md transition"
          >
            <FileDown size={20} />
            <span>Télécharger le Menu</span>
          </button>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-xl md:text-2xl font-serif mb-12 text-center">Entrées</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Foie Gras Maison</h3>
                  <p className="text-gold/80 text-sm md:text-base">Chutney de figues et pain brioché toasté</p>
                </div>
                <span className="text-lg md:text-xl">50 DH</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Huîtres Spéciales</h3>
                  <p className="text-gold/80 text-sm md:text-base">Les 6 huîtres servies sur glace</p>
                </div>
                <span className="text-lg md:text-xl">54 DH</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif mb-12 text-center">Plats Principaux</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Filet de Bœuf Rossini</h3>
                  <p className="text-gold/80 text-sm md:text-base">Foie gras poêlé, sauce truffe</p>
                </div>
                <span className="text-lg md:text-xl">60 DH</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Homard Bleu</h3>
                  <p className="text-gold/80 text-sm md:text-base">Risotto aux champignons sauvages</p>
                </div>
                <span className="text-lg md:text-xl">75 DH</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif mb-12 text-center">Desserts</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Soufflé au Chocolat</h3>
                  <p className="text-gold/80 text-sm md:text-base">Glace vanille de Madagascar</p>
                </div>
                <span className="text-lg md:text-xl">80 DH</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gold/20 pb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl mb-2">Crème Brûlée</h3>
                  <p className="text-gold/80 text-sm md:text-base">À la vanille bourbon</p>
                </div>
                <span className="text-lg md:text-xl">85 DH</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Menu;