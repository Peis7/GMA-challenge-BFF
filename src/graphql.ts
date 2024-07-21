
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Portfolio {
    channel: string;
}

export class Client {
    id: string;
    address: string;
    blocked: string;
    cellPhone: string;
    channel: string;
    country: string;
    portfolioData?: Nullable<Portfolio>;
}

export abstract class IQuery {
    abstract client(id: string): Client | Promise<Client>;
}

type Nullable<T> = T | null;
