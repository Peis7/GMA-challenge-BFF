import { Args, Query, Resolver } from "@nestjs/graphql";
import { Client } from "../../models/clients";
import { ApigatewayService } from "../apigateway.service";

@Resolver(of => Client)
export class ClientsResolver {
    constructor(
        private apigatewayService: ApigatewayService,
    ){};

  @Query(returns => Client)
  async client(@Args('id', { type: () => String }) id: string) {
    const clientData = await this.apigatewayService.getClientData(id);
    const clientPortfolioData = await this.apigatewayService.getClientPrtfolioData(id);
    return {...clientData, portfolioData: { ...clientPortfolioData }}
  }

}
