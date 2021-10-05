import {Component, OnInit} from '@angular/core';
import {Todo} from './../../models/Todo';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  'todos': Todo[];
  'inputTodo': string = "";
  // 'showValidationErrors': boolean ;


  constructor() {
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true
      }
    ]

  }

  addTodo(form: NgForm) {
    console.log(form);
    if (form.invalid || null) return alert("Form is Invalid")
    // {
    //   return this.inputTodo = true
    // }

    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    console.log(form);
    this.inputTodo = ''
    //
    // this.showValidationErrors = false
    // form.reset()
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
