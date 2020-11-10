import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  // set Dynamic Classes
  // tslint:disable-next-line:typedef
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  // onToggle
  // tslint:disable-next-line:typedef
  onToggle(todo){
    todo.completed = !todo.completed;
  }

  // onDelete
  // tslint:disable-next-line:typedef
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
