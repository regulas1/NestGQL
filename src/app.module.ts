import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql'
  }),
TypeOrmModule.forRoot({
  type:"postgres",
  host: "localhost",
  port: 5432,
  username: "sriregula",
  password: "",
  database: 'invoiceapp',
  entities: ['dist/**/*.model.js'],
  synchronize: false,
})
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
