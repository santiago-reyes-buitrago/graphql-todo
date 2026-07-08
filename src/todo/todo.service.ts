import {Injectable, NotFoundException} from '@nestjs/common';
import {TodoEntity} from "./entiities/todo.entity";
import {CreateTodoInput, FilterTodoInput, UpdateTodoInput} from "./dto/inputs";

@Injectable()
export class TodoService {
  private todos: TodoEntity[] = [
    {id: 1, title: 'Piedra del alma', completed: true},
    {id: 2, title: 'Piedra del espacio', completed: false},
    {id: 3, title: 'Piedra del Poder', completed: false},
  ];

  findAll(filters: FilterTodoInput): TodoEntity[] {
    const entries = Object.entries(filters).filter(([key, value]) => value !== undefined);
    if (entries.length > 0) {
      return this.todos.filter(todo => {
        let isCorrect: boolean = false;
        entries.forEach(([key, value]) => {
          isCorrect = todo[key] === value
        })
        return isCorrect;
      })

    }
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) throw new NotFoundException()
    return todo;
  }

  create(createTodoInput: CreateTodoInput): TodoEntity {
    const todo = new TodoEntity();
    todo.id = this.todos.length + 1;
    todo.title = createTodoInput.title;
    todo.completed = createTodoInput.completed ?? false;
    this.todos.push(todo)
    return todo;
  }

  update(updateTodoInput: UpdateTodoInput){
    const todo = this.findOne(updateTodoInput.id);
    todo.title = updateTodoInput.title ?? todo.title;
    todo.completed = updateTodoInput.completed ?? todo.completed;
    return todo
  }

  remove(id: number) {
    const todoRemove = this.findOne(id);
    this.todos = this.todos.filter(todo => todo.id !== todoRemove.id);
    return todoRemove;
  }
}
