"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { motion, Variants, Easing } from "framer-motion";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export default function ContactForm() {
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<IFormInput>();

  const handleCepSearch = async () => {
    const cep = getValues("cep").replace(/\D/g, '');
    if (cep.length !== 8) {
      alert("CEP inválido. Por favor, digite 8 dígitos.");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      } else {
        alert("CEP não encontrado.");
        setValue("street", "");
        setValue("neighborhood", "");
        setValue("city", "");
        setValue("state", "");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar o CEP.");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as Easing,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: "easeOut" as Easing,
      },
    },
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 font-sans">
      <motion.div
        className="max-w-6xl mx-auto -mt-48 relative z-20 bg-white rounded-xl shadow-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-center mb-6 flex-col md:flex-row gap-4 md:gap-0">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">Vamos Conversar?</h1>
              <p className="mt-1 text-gray-600">Agende um bate-papo com nossa equipe.</p>
            </div>
            <svg className="w-10 h-10 text-red-700 transform -rotate-45" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.6 12.1L3.8 2.2c-.7-.4-1.5.1-1.5.9.1.5.4.8.8 1l.5.3L19 12l-15.4 7.6c-.4.2-.7.5-.8 1-.1.7.6 1.3 1.2.9L21.6 12.9c.5-.3.5-.8 0-1.2z"/>
            </svg>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register("name", { required: "Nome é obrigatório" })} type="text" placeholder="Nome Completo" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition" />
              <select {...register("department", { required: "Selecione um departamento" })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition bg-white text-gray-700">
                <option value="">Departamento</option>
                <option value="vendas">Vendas</option>
                <option value="suporte">Suporte Técnico</option>
                <option value="financeiro">Financeiro</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register("email", { required: "E-mail é obrigatório", pattern: /^\S+@\S+$/i })} type="email" placeholder="E-mail" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition" />
              <input {...register("phone", { required: "Telefone é obrigatório" })} type="tel" placeholder="Telefone" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition" />
            </div>

            <div className="flex items-center gap-4">
              <input {...register("cep", { required: "CEP é obrigatório" })} type="text" placeholder="CEP" className="w-full md:w-2/3 border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition" />
              <button type="button" onClick={handleCepSearch} className="bg-red-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-800 transition-colors text-sm">Buscar</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register("street")} type="text" placeholder="Endereço" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition bg-gray-50" readOnly />
              <input {...register("neighborhood")} type="text" placeholder="Bairro" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition bg-gray-50" readOnly />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register("city")} type="text" placeholder="Cidade" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition bg-gray-50" readOnly />
              <input {...register("state")} type="text" placeholder="Estado" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 transition bg-gray-50" readOnly />
            </div>

            <textarea {...register("message")} rows={4} placeholder="Mensagem" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-600 transition resize-none" />

            <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4 md:gap-0">
              <p className="text-gray-500 text-sm text-center md:text-left">Sabemos o quão importante é a informação, seus dados sempre estarão seguros conosco.</p>
              <motion.button
                type="submit"
                className="bg-red-700 text-white px-6 py-3 rounded-full font-bold hover:bg-red-800 transition-colors shadow-lg"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                ENVIAR
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
