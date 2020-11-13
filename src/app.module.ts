import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { getMetadataArgsStorage } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
imports: [

TypeOrmModule.forRoot({
...typeOrmConfig,
autoLoadEntities: true,
// entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
}),
TasksModule,
AuthModule,
]
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/typeorm.config';
// import { AuthModule } from './auth/auth.module';

// @Module({
//     imports: [
//         TypeOrmModule.forRoot(typeOrmConfig),
//         TasksModule,
//         AuthModule,
//     ],
// })
// export class AppModule {}