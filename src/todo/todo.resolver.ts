import {Args, Int, Query, Resolver} from '@nestjs/graphql';
import {TodoEntity} from "./entiities/todo.entity";
import {TodoService} from "./todo.service";

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
    return {}
  }

  createTodo() {
    return {}
  }

  updateTodo() {
    return {}
  }
}
