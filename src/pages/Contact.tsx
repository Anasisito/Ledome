import React, { FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:ledome.caferestaurant@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-black text-gold pt-20 px-4">
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-20">Nous Contacter</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="hover-card border border-gold/20 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-serif mb-8">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:text-gold/80 transition-colors duration-300">
                  <Phone className="text-gold" size={18} />
                  <p className="text-sm md:text-base">05 37 37 30 03</p>
                </div>
                <div className="flex items-center space-x-4 hover:text-gold/80 transition-colors duration-300">
                  <Mail className="text-gold" size={18} />
                  <p className="text-sm md:text-base">ledome.caferestaurant@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 hover:text-gold/80 transition-colors duration-300">
                  <MapPin className="text-gold" size={18} />
                  <div className="text-sm md:text-base">
                    <p>22 Av. Said Daoudi</p>
                    <p>Kénitra 14000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover-card border border-gold/20 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-serif mb-8">Horaires</h2>
              <div className="space-y-4 text-sm md:text-base">
                <div className="hover:text-gold/80 transition-colors duration-300">
                  <p className="mb-1">Lundi - Vendredi</p>
                  <p className="text-gold/80">7h30 - 00h</p>
                </div>
                <div className="hover:text-gold/80 transition-colors duration-300">
                  <p className="mb-1">Samedi - Dimanche</p>
                  <p className="text-gold/80">7h30 - 01h00</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="hover-card border border-gold/20 p-8 rounded-lg backdrop-blur-sm space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-focus w-full bg-black/50 border border-gold/30 p-3 text-gold rounded-md text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-focus w-full bg-black/50 border border-gold/30 p-3 text-gold rounded-md text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input-focus w-full bg-black/50 border border-gold/30 p-3 text-gold rounded-md text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="button-hover w-full bg-gold text-black py-3 px-4 rounded-md hover:bg-gold/90 transition text-sm uppercase tracking-wider font-medium"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;