"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Hi, I'm ${name} (${email}).\n${message}`;
    const whatsappURL = `https://wa.me/918086996655?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
    setStatus("Redirecting to WhatsApp...");
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Let's Build Something <span className="text-teal-400">Amazing</span>
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Send me a WhatsApp
          message directly!
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="group flex items-center justify-center mx-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send via WhatsApp
              <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </form>
        {status && (
          <p className="text-center text-gray-300 mt-6">{status}</p>
        )}
      </div>
    </section>
  );
};
