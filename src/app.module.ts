import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
imports: [

TypeOrmModule.forRoot({
...typeOrmConfig,
entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
})
]
})
export class AppModule {}