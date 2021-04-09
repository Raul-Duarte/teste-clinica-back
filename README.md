# React Teste Clínica


## Instructions

First clone this repository.
```bash
$ git clone https://github.com/Raul-Duarte/teste-clinica-back.git
```
https://github.com/Raul-Duarte/teste-clinica-back.git

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
$ cd teste-clinica-back/testeClinica
```

```bash
$ npm install # or yarn
```

Run it
```bash
$ npm run dev # or yarn run dev
```
Precisa ter o [`Docker`](https://www.docker.com/products/docker-desktop) instalado na maquina
```bash
$ docker pull postgres
```
```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
```
```bash
$ docker start postgres
```
```bash
$ npx sequelize db:migrate
```
