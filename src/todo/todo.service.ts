import {Injectable} from '@nestjs/common';
import {TodoEntity} from "./entiities/todo.entity";

@Injectable()
export class TodoService {
  private todos: TodoEntity[] = [
    {id: 1, title: 'Piedra del alma', completed: true},
    {id: 2, title: 'Piedra del espacio', completed: false},
    {id: 3, title: 'Piedra del Poder', completed: false},
  ];

  findAll(): TodoEntity[] {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find(todo => todo.id === id);
  }
}
