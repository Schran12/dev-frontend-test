# Induxmax - Site Institucional

Bem-vindo ao repositório do **Induxmax**, um site institucional moderno desenvolvido com **Next.js** e **Tailwind CSS**, projetado para representar uma indústria de forma profissional e funcional.

---

## 💡 Sobre o Projeto

O **Induxmax** é um site institucional com foco em apresentar a empresa, seus serviços e facilitar o contato com clientes. Ele é construído com boas práticas de SEO técnico, interface responsiva e usabilidade aprimorada.

Principais objetivos:

- Criar uma presença digital profissional para a indústria.
- Facilitar a navegação e o acesso às informações da empresa.
- Implementar funcionalidades práticas, como o auto preenchimento de endereço pelo CEP.

---

## 🌐 Funcionalidades

- **4 páginas principais:**
  - **Home**: Apresentação geral da empresa.
  - **Empresa**: História, missão e valores.
  - **Serviços**: Lista de serviços oferecidos.
  - **Contato**: Formulário de contato com integração de **auto preenchimento de endereço pelo CEP**.
  
- **SEO Técnico:**
  - Tags meta para título, descrição e keywords.
  - Estrutura semântica de HTML.
  - URLs amigáveis.
  - Otimização de velocidade e performance.

- **Design Responsivo:** Compatível com desktop, tablet e mobile.

---

## 🛠 Tecnologias e Ferramentas

- **Next.js** – React com renderização híbrida e rotas dinâmicas.  
- **Tailwind CSS** – Estilização moderna e responsiva.  
- **React Hook Form** – Validação e envio de formulários (opcional, se implementado).  
- **Axios / Fetch API** – Para integração com API de CEP.  
- **SEO** – Configuração de meta tags e otimização de desempenho.

---

## Porque escolhi esta stack❓

Optei por utilizar **Next.js** e **Tailwind CSS** neste projeto porque juntos eles oferecem um equilíbrio ideal entre **performance, produtividade e boas práticas de mercado**.

- **Next.js**  
  - Permite **renderização no servidor (SSR)** e **geração de páginas estáticas (SSG)**, o que melhora bastante o SEO.  
  - Traz **performance otimizada**, com carregamento rápido e suporte nativo a otimização de imagens.  
  - Possui **roteamento baseado em arquivos**, o que simplifica muito a estrutura do projeto.  
  - É um framework consolidado e amplamente utilizado em aplicações reais, garantindo escalabilidade e maturidade.

- **Tailwind CSS**  
  - Proporciona **agilidade no desenvolvimento**, permitindo criar interfaces responsivas diretamente através de classes utilitárias.  
  - Facilita a **manutenção** e garante consistência visual ao longo do projeto.  
  - Oferece **personalização fácil** no `tailwind.config.js`, permitindo adaptar o design system da aplicação.  
  - Gera um **CSS final enxuto**, já que só inclui as classes realmente utilizadas no projeto.

Essa combinação garante um site **rápido, responsivo, otimizado para SEO** e, ao mesmo tempo, de **fácil manutenção e evolução**.

---

## Como foi implementada a API❓

  - Utiliza a API pública ViaCEP para buscar endereço pelo CEP.
  - Validação: aceita apenas 8 dígitos numéricos.
  - Requisição com Axios:
     - Preenche automaticamente os campos do formulário: rua, bairro, cidade, estado.
     - Tratamento de erros:
     - CEP inválido → alerta e limpa campos.
     - Erro na requisição → alerta de erro.

---

## 🚀 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash

Instale as dependências:
npm install
# ou
yarn install

Vá até a pasta:
git clone https://github.com/seu-usuario/induxmax.git
cd induxmax

Execute o projeto em modo de desenvolvimento:
npm run dev
# ou
yarn dev

Acesse no navegador:
http://localhost:3000


Para build de produção:
npm run build
npm run start