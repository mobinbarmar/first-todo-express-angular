import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private testSer:TestService) {
    
  }

  todos$!: Observable<any>
  todosData$!: Observable<any>

  ngOnInit(): void {
    this.todos$ = this.testSer.fetchTodos()

    this.todosData$ = this.testSer.todoCheckData()
    
  }

  myFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })

  submitForm(){
    this.todos$ = this.testSer.sumbitForm(this.myFormGroup.value.title)
  }

  checkTodo(id:string){
    this.testSer.checkTodo(+id).subscribe((todos) => {
      this.todos$ = this.testSer.fetchTodos()
      this.todosData$ = this.testSer.todoCheckData()
    })
  }

  deleteTodo(id:string){
    this.testSer.deleteTodo(id).subscribe()
    this.todos$ = this.testSer.fetchTodos()
  }
}
