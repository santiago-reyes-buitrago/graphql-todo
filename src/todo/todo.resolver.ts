import {Args, Int, Query, Resolver, Mutation} from '@nestjs/graphql';
import {TodoEntity} from "./entiities/todo.entity";
import {TodoService} from "./todo.service";
import {CreateTodoInput, FilterTodoInput, UpdateTodoInput} from "./dto/inputs";

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {
  }

  @Query(() => [TodoEntity], {name: 'todos'})
  findAllTodo(@Args() filter: FilterTodoInput): TodoEntity[] {
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
}
