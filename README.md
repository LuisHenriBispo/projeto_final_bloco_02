# 🩺 Projeto API - Gerenciador de Medicamentos

Este é um projeto de backend desenvolvido com NestJS e TypeScript, para o gerenciamento de medicamentos em uma farmácia. A aplicação permite o cadastro, listagem, atualização e remoção de produtos e suas respectivas categorias.

## 📚 Tecnologias utilizadas
NestJS - Framework Node.js para construção de APIs escaláveis

TypeScript - Superset do JavaScript com tipagem

TypeORM - ORM para integração com banco de dados relacional

Insomnia - Testes de requisição

## 🔗 Relacionamentos
Categoria possui muitos Produtos

Produto pertence a uma Categoria

## 📬 Endpoints principais
## Categorias
- **GET /categorias → Listar todas**

- **GET /categorias/:id → Buscar por ID**

- **GET /categorias/busca/:nome_categoria → Buscar por nome**

- **POST /categorias → Criar**

- **PUT /categorias → Atualizar**

- **DELETE /categorias/:id → Deletar**

## Produtos
- **GET /produtos → Listar todos (com categoria)**

- **GET /produtos/:id → Buscar por ID**

- **GET /produtos/busca/:nome → Buscar por nome**

- **POST /produtos → Criar**

- **PUT /produtos → Atualizar**

- **DELETE /produtos/:id → Deletar**

## 🚀 Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/LuisHenriBispo/projeto_final_bloco_02.git
```
Instale as dependências:
```bash
npm install
```
Inicie a aplicação:
```bash
npm run start:dev
```

## 🧑‍💻 Autor
Desenvolvido por: **Luis Henrique**