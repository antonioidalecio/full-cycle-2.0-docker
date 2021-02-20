FROM golang:1.15-alpine3.12 AS build-stage

WORKDIR /var/app

COPY . .

RUN go build -ldflags="-s -w"

FROM scratch

WORKDIR /var/app

COPY --from=build-stage /var/app/go-docker-app .

CMD ["./go-docker-app"]