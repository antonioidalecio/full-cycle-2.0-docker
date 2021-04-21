# Golang e Docker

Esta é uma aplicação simples utilizando golang e docker que apenas imprime uma mensagem no terminal! Ela utiliza o recurso de `multi-stage build` do docker e também, utiliza algumas flags de compilação para reduzir o tamanho do binário executável gerado pelo go.

Para executar a aplicação basta instalar o docker e executar os seguintes comandos:

```sh
# Faz o build da imagem docker
docker build -t antonioidalecio/codeeducation .

# Cria e executa um container a partir da imagem criada
docker run --rm antonioidalecio/codeeducation
```

Após a execução, se tudo ocorrer bem, você deverá ver a mensagem `Code.education Rocks!` em seu terminal.