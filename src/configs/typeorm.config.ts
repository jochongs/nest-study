import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Root 모듈에서 import해야 사용할 수 있음
export const typeORMConfig = (): TypeOrmModuleOptions => {
    return {
        //Database Type
        type: 'postgres',
        host: process.env.PSQL_HOST,
        port: parseInt(process.env.PSQL_PORT),
        username: process.env.PSQL_USERNAME,
        password: process.env.PSQL_PASSWORD,
        database: process.env.PSQL_DATABASE,
        poolSize: 10,

        //Orm Option
        synchronize: true,
        entities: [__dirname + '/../**/*.entity.js']
    }
}
