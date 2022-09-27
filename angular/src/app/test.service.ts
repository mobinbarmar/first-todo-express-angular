import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  sumbitForm(title:string){

    const body = {
      title
    }

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    console.log(JSON.stringify(body));
    return this.http.post('http://localhost:3000/add-todo', JSON.stringify(body), {headers})
  }

  fetchTodos(){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/todos', {headers})
  }

  checkTodo(id:number){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/check-todo', JSON.stringify({id}), {headers})
  }

  deleteTodo(id:string){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/delete-todo', JSON.stringify({id}), {headers})
  }

  todoCheckData(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/check-data-todo')
  }
}
