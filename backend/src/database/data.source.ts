import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { ConfigModule, ConfigService } from '@nestjs/config';


ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env` ,
});


const configService = new ConfigService();

export const DataSourceConfig:DataSourceOptions = {

    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    synchronize: true,
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
    logging: false,
    migrationsRun: true,
    namingStrategy: new SnakeNamingStrategy(),

};


export const AppDS = new DataSource(DataSourceConfig);



