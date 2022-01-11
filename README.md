## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker Compose

```bash
# start docker compose
$ docker-compose --env-file .env -f docker-compose.yml up -d

# get docker db ip
$ docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' discussion_db
```

## TypeORMCli

```bash
# create a new migration file
$ npm run typeorm:cli -- migration:create -n [migration_name]

# run migrations
$ npm run typeorm:cli -- migration:run

# revert migrations
$ npm run typeorm:cli -- migration:revert
```
