import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class TodoEntity {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  title: string;
  @Field(() => Boolean)
  completed: boolean = false;
}