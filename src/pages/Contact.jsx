
function ContactForm() {

  return (
    <section className="h-full pt-20">
      <h1 className="font-secondary italic font-bold text-5xl text-center pt-14 text-white">
        Contactez-moi
      </h1>
      <div className="p-8 rounded-lg shadow-md max-w-md md:max-w-3xl mx-auto mt-10">
        <form name="contact" action="/contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-7">
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Votre Nom"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-7">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre Adresse e-mail"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-7">
            <textarea
              id="message"
              name="message"
              placeholder="Votre Message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primary"
              required
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
