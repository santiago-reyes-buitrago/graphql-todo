import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {
  @Field(() => String,{description: 'titulo de la tarea'})
  title: string;
  @Field(() => Boolean,{defaultValue: false,nullable: true})
  completed?: boolean;
}