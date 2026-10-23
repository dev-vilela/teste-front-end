# Econverse | Teste Técnico Front-End Júnior

Aplicação de e-commerce desenvolvida como parte de um desafio técnico para a vaga de **Front-End Júnior**. O projeto reproduz uma página de vitrine da Econverse com foco em organização de componentes, consumo de API, tipagem com TypeScript e experiência responsiva.


## Sumário

- [Objetivo](#objetivo)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Como executar](#como-executar)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Integração com a API](#integração-com-a-api)
- [Organização e decisões técnicas](#organização-e-decisões-técnicas)
- [Pontos a validar antes da entrega](#pontos-a-validar-antes-da-entrega)
- [Autor](#autor)

## Objetivo

Construir uma interface de vitrine de produtos inspirada no layout disponibilizado para o teste, mantendo o código dividido por responsabilidade e facilitando a manutenção e a evolução da aplicação.

## Funcionalidades

- Cabeçalho com identidade visual, busca e navegação.
- Navegação por categorias.
- Banner principal de destaque.
- Vitrine de produtos carregada por meio de uma API externa.
- Cards de produto e visualização de detalhes em modal.
- Seções de parceiros e marcas.
- Formulário de inscrição na newsletter com validação no cliente.
- Rodapé com links institucionais e formas de pagamento.
- Formatação de valores monetários para apresentação em reais (BRL).
- Estado de carregamento e tratamento de falhas no carregamento dos produtos.

> Algumas ações são demonstrativas: a inscrição na newsletter não está conectada a um serviço de envio e o projeto não possui backend ou carrinho de compras persistente.

## Tecnologias

- **React** — construção da interface por componentes.
- **TypeScript** — tipagem de componentes e dados.
- **Vite** — servidor de desenvolvimento e build.
- **Sass/SCSS** — suporte a estilos Sass no projeto.
- **Tailwind CSS** — classes utilitárias utilizadas na versão atual da interface.
- **Lucide React** — ícones.

## Pré-requisitos

Instale uma versão LTS recente do [Node.js](https://nodejs.org/), que inclui o npm.

Para conferir as versões instaladas:

```bash
node --version
npm --version
```

## Como executar

1. Clone o repositório ou extraia os arquivos do projeto.
2. Abra o terminal na pasta raiz, onde está o `package.json`.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor local:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço informado pelo Vite no terminal (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Executa a verificação TypeScript e gera a versão de produção. |
| `npm run preview` | Disponibiliza localmente a versão gerada pelo build. |

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
src/
├── components/
│   ├── Header/                 # Cabeçalho e navegação superior
│   ├── HeroBanner/             # Banner principal
│   ├── CategoryNavigation/     # Categorias de produtos
│   ├── ProductCard/            # Card individual de produto
│   ├── ProductSection/         # Vitrine/listagem de produtos
│   ├── PartnersSection/        # Banners de parceiros
│   ├── BrandsSection/          # Seção de marcas
│   ├── Newsletter/              # Formulário de inscrição
│   ├── ProductModal/           # Detalhes do produto selecionado
│   └── Footer/                 # Rodapé
├── data/
│   └── mockProducts.ts         # Produtos de demonstração para fallback
├── hooks/
│   └── useProducts.ts          # Estado e carregamento dos produtos
├── services/
│   └── productService.ts       # Comunicação com a API
├── styles/
│   ├── _variables.scss         # Variáveis Sass
│   └── index.scss              # Estilos globais
├── types/
│   └── Product.ts              # Tipos dos dados de produto
├── utils/
│   └── formatCurrency.ts       # Formatação de valores monetários
├── App.tsx                     # Composição principal da página
└── main.tsx                    # Ponto de entrada da aplicação
```

## Integração com a API

A aplicação consulta a lista de produtos no seguinte endpoint:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

A chamada está isolada em `src/services/productService.ts`. O hook `src/hooks/useProducts.ts` controla o carregamento, armazena os produtos e trata erros. Se a API falhar, a implementação atual utiliza produtos de demonstração de `src/data/mockProducts.ts`.


## Organização e decisões técnicas

- **Componentes separados por responsabilidade:** facilita manutenção e reutilização.
- **Serviço de API isolado:** mantém a lógica de comunicação fora da interface.
- **Hook personalizado:** centraliza o estado de carregamento e os dados dos produtos.
- **Tipos explícitos:** melhora a previsibilidade dos dados recebidos.
- **Utilitário de moeda:** evita repetir a lógica de formatação de preços.
- **Componentes visuais separados:** facilita ajustar cada seção ao layout de referência.



## Autor

Desenvolvido por **Paulo Vilela** como exercício técnico de Front-End.

---

Projeto criado para fins de avaliação técnica. Marca e materiais visuais da Econverse pertencem aos respectivos titulares.
