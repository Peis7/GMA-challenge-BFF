import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom  } from 'rxjs';
import { Client } from '../models/clients';

@Injectable()
export class ApigatewayService {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService,
    ){};

    async getClientData(clientId): Promise<Client>{
        const baseURL = this.configService.get<string>('CLIENT_API_BASE_URL');
        
        const { data } = await firstValueFrom(
            this.httpService.get<Client>(`http://${baseURL}/v1/client/${clientId}`).pipe(
                catchError((error: AxiosError) => {
                throw error;
                }),
            ),
        );
        return data;
    }

    async getClientPrtfolioData(clientId): Promise<Client>{
        const baseURL = this.configService.get<string>('CLIENT_PORTAFOLIO_API_BASE_URL');
        
        const { data } = await firstValueFrom(
            this.httpService.get<Client>(`http://${baseURL}/v1/portfolio/client/${clientId}`).pipe(
                catchError((error: AxiosError) => {
                throw error;
                }),
            ),
        );
        return data;
    }
}
