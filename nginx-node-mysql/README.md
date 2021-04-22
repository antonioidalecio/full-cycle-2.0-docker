# Nginx, Node e MySQL

Esta é uma aplicação simples utilizando `nginx`, `node`, `mysql`, `docker` e `docker-compose`. 

Essa aplicação, inicialmente, cria e popula o banco MySQL com uma tabela `people` com alguns nomes. A aplicação `node` por sua vez se conecta à essa base de dados e disponbiliza um endpoint, que retorna a mensagem **Full Cycle Rocks!**, seguida de uma lista contendo os nomes previamente cadastrados no banco de dados. O Nginx faz o papel de proxy reverso, e redireciona qualquer requisição chegando em sua porta `80` para a aplicação `node`, que está rodando na porta `3000`.

Para executar a aplicação basta ter instalado em sua máquina o `docker` e `docker-compose`, e executar o comando abaixo:

```sh
docker-compose up --build
```

Após a execução, se tudo ocorrer bem, você poderá acessar a url http://localhost:8080 em seu navegador, e visualizar a mensagem **Full Cycle Rocks!**, juntamente com uma lista de nomes pré cadastradas no banco de dados.