'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactoPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/meelalvz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contáctanos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Tienes una pregunta, sugerencia o propuesta de colaboración? Nos encantaría escucharte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Contact Form (3 cols) */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>

          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
              <p className="text-gray-600 mb-6">Te responderemos en las próximas 24-48 horas.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-indigo-600 font-medium hover:text-indigo-800"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿Sobre qué quieres escribirnos?"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">Hubo un error al enviar. Intenta de nuevo o escríbenos directamente a contacto@aldiadetodo.com.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${
                  status === "sending"
                    ? "bg-indigo-400 text-white cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario aceptas nuestra{" "}
                <a href="/privacidad" className="text-indigo-600 underline">Política de Privacidad</a>.
              </p>
            </form>
          )}
        </div>

        {/* Sidebar Info (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-lg text-indigo-900">Email directo</h3>
            </div>
            <p className="text-gray-700">
              Para consultas generales o de negocio:
            </p>
            <a href="mailto:contacto@aldiadetodo.com" className="text-indigo-600 font-medium hover:text-indigo-800 mt-2 block">
              contacto@aldiadetodo.com
            </a>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-lg text-indigo-900">Colaboraciones</h3>
            </div>
            <p className="text-gray-700">
              ¿Quieres escribir para nosotros o proponer una colaboración? Cuéntanos tu idea y te responderemos lo antes posible.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-lg text-indigo-900">Tiempo de respuesta</h3>
            </div>
            <p className="text-gray-700">
              Nos esforzamos por responder a todos los mensajes en un plazo de <strong>24 a 48 horas</strong> hábiles.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
