API de Listagem de Jogos

Esta é uma pequena API desenvolvida em Node.js com o framework Express que fornece uma lista de jogos. Ela é projetada para fins de demonstração e aprendizado.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) instalado.

## Instalação

1. Clone este repositório em sua máquina:
    ```bash
    git clone https://github.com/seu-usuario/api-de-listagem-de-jogos.git
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd apigames
    ```
3. Instale as dependências usando npm:
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    npm start
    ```

A API estará disponível em http://localhost:8080.

## Rotas da API

- GET /games: Retorna uma lista de jogos.
- GET /games/:id: Retorna detalhes de um jogo específico com o ID fornecido.

## Uso

Você pode usar uma ferramenta como Postman ou curl para testar as rotas da API.
Exemplo de solicitação GET para listar todos os jogos:

```bash
curl http://localhost:3000/jogos
```

## Autor

Fellipe M Dino

## Contato
- **Email:** [fellioemiguel@gmail.com](mailto:fellioemiguel@gmail.com)
- **GitHub:** [FellipeMiguel](https://github.com/FellipeMiguel)
- **Linkedin:** [Fellipe M Dino](https://www.linkedin.com/in/fellipe-m-dino/)