import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'data1234',
    database: 'taskmanagement',
    // entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
};