# Projeto Alura Geek

Bem-vindo ao Projeto Alura Geek! Este é um projeto de desenvolvimento web criado como parte do curso da Alura juntamente com a Oracle Next Education, voltado para iniciantes em programação. O objetivo deste projeto é proporcionar uma experiência prática no desenvolvimento de uma aplicação web simples.

## 📖 Descrição

O Projeto Alura Geek é uma aplicação que permite aos usuários visualizar e interagir com uma coleção de produtos. A aplicação foi desenvolvida utilizando tecnologias modernas e é uma excelente oportunidade para aprender sobre desenvolvimento front-end.

## 🌐 Link da Aplicação

Você pode acessar a aplicação ao vivo aqui: [Projeto Alura Geek](https://projeto-alura-geek-kohl.vercel.app/).

## 🚀 Tecnologias Utilizadas

Neste projeto, utilizamos as seguintes tecnologias:

- **HTML**: Para a estruturação do conteúdo da página.
- **CSS**: Para o estilo e layout da aplicação.
- **JavaScript**: Para a interação e dinamismo da aplicação.
- **Git**: Para controle de versão do projeto.
- **JSON Server**: Para simular uma API REST e fornecer dados dos produtos.

## 🌐 API

A aplicação utiliza uma API simulada com JSON Server, disponível em: [https://json-server-alura-geek.glitch.me](https://json-server-alura-geek.glitch.me). A API retorna os dados dos produtos no seguinte formato:

```json
{
  "produtos": [
    {
      "id": 1,
      "categoria": "Star Wars",
      "produto": "Produto xyz",
      "preco": "R$ 60.00",
      "imagem": "img/caneca.png",
      "alt": "Caneca",
      "descricao": "#1111111"
    },
    {
      "id": 2,
      "categoria": "Star Wars",
      "produto": "Produto abc",
      "preco": "R$ 50.00",
      "imagem": "img/camiseta.png",
      "alt": "Camiseta",
      "descricao": "#222222"
    }
    // Adicione mais produtos conforme necessário
  ]
}

```

## 🛠️ Funcionalidades
As principais funcionalidades da aplicação incluem:

- Visualização de produtos listados por categoria.
- Filtro de produtos: A busca só funciona na página produtos.html. Para filtrar a lista de produtos, é necessário digitar o nome completo do produto no campo de busca e, em seguida, clicar em algum lugar da tela para remover o foco do input. Isso atualiza a lista com os produtos que correspondem ao nome digitado.
- Administração de Produtos: O usuário administrador pode fazer login para adicionar, editar ou excluir dados dos produtos.
- Detalhes dos produtos ao serem clicados.
- Um layout responsivo que se adapta a diferentes tamanhos de tela.

## 📦 Como Executar o Projeto
Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash

git clone https://github.com/livia070303/projeto_alura_geek.git
```

2. Navegue até a pasta do projeto:

```bash
cd projeto_alura_geek
```

Abra o arquivo index.html em seu navegador.
