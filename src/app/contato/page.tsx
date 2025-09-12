export default function Contato() {
  return (
    <section className="pt-24 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contato</h2>
      <form className="grid gap-6 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input type="text" placeholder="Nome" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="email" placeholder="Email" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="text" placeholder="CEP" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <textarea placeholder="Mensagem" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={5}></textarea>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Enviar Mensagem</button>
      </form>
    </section>
  );
}
