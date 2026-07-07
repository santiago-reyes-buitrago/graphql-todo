import {Args, Int, Query, Resolver,Mutation} from '@nestjs/graphql';
import {TodoEntity} from "./entiities/todo.entity";
import {TodoService} from "./todo.service";
import {CreateTodoInput} from "./dto/inputs/create-todo.input";

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoEntity],{name: 'todos'})
  findAllTodo(): TodoEntity[] {
    return this.todoService.findAll();
  }

  @Query(() => TodoEntity,{name: 'todo'})
  findOneTodo(@Args('id',{
    type: () => Int,
    description: '',
  }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => TodoEntity,{name: 'createTodo'})
  createTodo(
      @Args('createTodoInput')createTodoInput: CreateTodoInput
  ) {
    console.log(createTodoInput)
    return null;
  }

  updateTodo() {
    return {}
  }
}
