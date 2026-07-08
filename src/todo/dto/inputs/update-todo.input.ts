import {Field, InputType, Int} from "@nestjs/graphql";
import {IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  @IsInt()
  id: number;
  @Field(() => String, {description: 'titulo de la tarea',nullable: true})
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  title?: string;
  @Field(() => Boolean, {defaultValue: false, nullable: true})
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}