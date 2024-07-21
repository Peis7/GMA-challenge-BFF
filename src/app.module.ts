import { Module } from '@nestjs/common';
import { ApigatewayModule } from './apigateway/apigateway.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ApigatewayModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      include:[ApigatewayModule]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
