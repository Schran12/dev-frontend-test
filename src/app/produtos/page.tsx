import Card from '../../components/Card';

export default function Produtos() {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Produto A" description="Descrição do Produto A" />
        <Card title="Produto B" description="Descrição do Produto B" />
        <Card title="Produto C" description="Descrição do Produto C" />
      </div>
    </section>
  );
}
