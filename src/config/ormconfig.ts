import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [
        'dist/entity/*.js',
    ],
    migrations: [
        'dist/migration/*.js',
    ],
    migrationsTableName: '__migrations',
    cli: {
        migrationsDir: 'src/migration',
    },
    synchronize: true,
}

export default typeOrmConfig;
