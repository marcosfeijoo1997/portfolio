"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {TextCustomColor} from '@/components/StylesPredeterm'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "",email:"",  message: ""});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const customText=TextCustomColor()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        "service_rgslv7a", // Reemplaza con el ID de tu servicio en EmailJS
        "template_fazobwd", // Reemplaza con el ID de tu plantilla en EmailJS
        {
          from_name: formData.name,
          message: formData.message,
          email:formData.email,
          to_email: "marcosfeijoo97@gmail.com", 
        },
        "-JsIbe4clxkKwZFSm" // Reemplaza con tu clave pública de EmailJS
      );

      setSuccess(true);
      setFormData({ name: "", message: "", email:"" });
    } catch (err) {
      setError(`${err}:No se pudo enviar el mensaje. Inténtalo más tarde.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4  text-black">
       
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
         <input
        type="text"
        name="email"
        placeholder="Tu email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" disabled={loading} className={`w-full bg-blue-500 hover:bg-blue-700 p-2 rounded ${customText}`}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {success && <p className="text-green-500">Mensaje enviado con éxito</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}