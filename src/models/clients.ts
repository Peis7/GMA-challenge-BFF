
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Items {
    @Field(type => String, { nullable: true })
    sku: string

    @Field(type => String)
    title: string

    @Field(type => String)
    categoryId: string
}

@ObjectType()
class Portfolio {
    @Field(type => String)
    channel: string

    @Field(type => String)
    country: string

    @Field(type => String)
    customerCode: string

    @Field(type => [Items])
    items: [Items]
}

@ObjectType()
export class Client {
  @Field(type => ID)
  id: string;

  @Field()
  address: string;

  @Field()
  blocked: string;

  @Field()
  cellPhone?: string;

  @Field()
  channel: string;

  @Field()
  country: string;

  @Field(type => Portfolio, { nullable: true })
  portfolioData?: Portfolio

}
