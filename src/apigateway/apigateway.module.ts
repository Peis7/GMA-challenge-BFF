import { Module } from '@nestjs/common';
import { ApigatewayService } from './apigateway.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ClientsResolver } from './clients/clients.resolver';

@Module({
  imports: [
    ConfigModule, 
    HttpModule,
  ],
  providers: [ApigatewayService, ClientsResolver],
  controllers: []
})
export class ApigatewayModule {}
