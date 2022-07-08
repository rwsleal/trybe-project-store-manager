### Termos e acordos

A publicação deste código está de acordo com o Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao meu repositório do projeto Store Manager!

## O que foi desenvolvido

Foi desenvolvido uma API de gerenciamento de vendas no formato dropshipping onde é possível criar, visualizar, deletar e atualizar produtos e vendas. Pude colocar em prática o conhecimento sobre padrões arquiteturais que adquiri, usando a arquitetura MSC (model-service-controller). Além disso, exercitei meus conhecimentos sobre REST, criando uma API completamente RESTful.

Também foram desenvolvidos testes unitários com o intuito de cobrir pelo menos 60% das camadas MSC (models, services, controllers) da aplicação.

**:warning: Este foi um projeto feito como forma avaliativa do curso de Desenvolvimento Web Full-Stack, durante o módulo de Back-End. Os arquivos do docker e todos os relacionados ao banco (.sql), além de algumas linhas iniciais do app.js foram todas desenvolvidas pela Trybe.**

---

# Técnologias usadas

Desenvolvido usando: JavaScript ES6, Node.Js, ExpressJS, ESLint, MySQL, conceitos RESTful e bibliotecas auxiliares. Para os testes unitários, foram utilizadas as bibliotecas mocha, chai e sinon.

---

# Instalando Dependências e executando a aplicação

## 👉 Com Docker

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
  - A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

  >  :information_source: Use o comando `docker exec -it store_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install`

  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

 <br />

  ## 👉 Sem Docker

  > :information_source: Instale as dependências com `npm install`

  - **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
  - **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
  - **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`

  <br/>
</details>
