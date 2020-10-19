import { Component, OnInit, Input } from '@angular/core';
import {Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }
  // set Dynamic Classes
  // tslint:disable-next-line:typedef
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  //onToggle
  onToggle(todo){
    //console.log('togggle');
    todo.completed = !todo.completed;
  }

  //onDelete
  onDelete(todo){

  }
}
