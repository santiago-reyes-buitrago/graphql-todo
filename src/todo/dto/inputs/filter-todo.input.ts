import {ArgsType, Field} from "@nestjs/graphql";
import {IsBoolean, IsOptional} from "class-validator";

@ArgsType()
export class FilterTodoInput {
  @Field(() => Boolean,{nullable: true})
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}