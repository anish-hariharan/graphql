import { InputType, Field } from "type-graphql";

@InputType()
export class Update {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  age?: string;

  @Field({ nullable: true })
  reg?: string;

  @Field({ nullable: true })
  isinUse?: boolean;
}