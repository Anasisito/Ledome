import React from 'react';
import { FileDown } from 'lucide-react';

const Menu = () => {
  const downloadMenu = () => {
    window.open('https://drive.google.com/file/d/1lAqlD7ULWpnjAWBf118p0MJFoIPJznc5/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-gold pt-24 px-4">
      <div className="max-w-4xl mx-auto py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-light tracking-wide mb-6">Notre Menu</h1>
          <p className="text-gold/80 text-lg max-w-2xl mx-auto">
            Scannez le code QR ci-dessous pour accéder à notre menu directement sur votre appareil
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          {/* QR Code Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/30 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative border-2 border-gold/30 p-8 rounded-3xl bg-black/80 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-500">
              <img
                src="https://i.postimg.cc/j5Tr2Zvs/qr-code.png"
                alt="Menu QR Code"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto"
              />
            </div>
          </div>

          {/* Divider with text */}
          <div className="flex items-center w-full max-w-md">
            <div className="flex-1 border-t border-gold/30"></div>
            <p className="px-4 text-gold/80 text-lg">ou téléchargez-le ici</p>
            <div className="flex-1 border-t border-gold/30"></div>
          </div>

          {/* Download Button */}
          <button
            onClick={downloadMenu}
            className="group flex items-center space-x-3 bg-gold/10 hover:bg-gold/20 text-gold px-6 py-4 rounded-lg transition-all duration-300 border border-gold/30 hover:-translate-y-1"
          >
            <FileDown size={24} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg tracking-wide">Télécharger le Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;