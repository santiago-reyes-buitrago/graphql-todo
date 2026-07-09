import {Args, Int, Query, Resolver, Mutation} from '@nestjs/graphql';
import {TodoEntity} from "./entiities/todo.entity";
import {TodoService} from "./todo.service";
import {CreateTodoInput, FilterTodoArgs, UpdateTodoInput} from "./dto";
import {AggregationsType} from "./types/aggregations.type";

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {
  }

  @Query(() => [TodoEntity], {name: 'todos'})
  findAllTodo(@Args() filter: FilterTodoArgs): TodoEntity[] {
    return this.todoService.findAll(filter);
  }

  @Query(() => TodoEntity, {name: 'todo'})
  findOneTodo(@Args('id', {type: () => Int, description: '',}) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => TodoEntity, {name: 'createTodo'})
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    console.log(createTodoInput)
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => TodoEntity, {name: 'updateTodo'})
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput)
  }

  @Mutation(() => TodoEntity, {name: 'deleteTodo'})
  deleteTodo(@Args('id', {type: () => Int, description: '',}) id: number) {
    return this.todoService.remove(id)
  }

  @Query(() => Int,{name: 'totalTodos'})
  totalTodos(): number {
    return this.todoService.totalTodos
  }

  @Query(() => Int,{name: 'completedTodos'})
  completedTodos(): number {
    return this.todoService.completedTodos
  }

  @Query(() => Int,{name: 'pendingTodos'})
  pendingTodos(): number {
    return this.todoService.pendingTodos
  }

  @Query(() => AggregationsType, {name: 'aggregations'})
  aggregations(): AggregationsType {
    return {
      total: this.todoService.completedTodos,
      completed: this.todoService.completedTodos,
      pending: this.todoService.pendingTodos
    }
  }


}
