import {Field, InputType} from "@nestjs/graphql";
import {IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

@InputType()
export class CreateTodoInput {
  @Field(() => String,{description: 'titulo de la tarea'})
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  title: string;
  @Field(() => Boolean,{defaultValue: false,nullable: true})
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}