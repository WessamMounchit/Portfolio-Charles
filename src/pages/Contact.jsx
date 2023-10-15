import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="h-full pt-20">
      <h1 className="font-secondary italic font-bold text-5xl text-center pt-14 text-white">
        Contactez-moi
      </h1>
      <div className="p-8 rounded-lg shadow-md max-w-md md:max-w-3xl mx-auto mt-10">
        <form name="contact" method="POST" netlify>
          <div className="mb-7">
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre Nom"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-7">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre Adresse e-mail"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-7">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre Message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white w-full py-2 px-4 rounded-md"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
