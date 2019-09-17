import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {
    private _postsURL = "https://jsonplaceholder.typicode.com/todos";
    http: any;
  
  constructor(private httpClient : HttpClient, private service: DataService) { 
    
  }
//   getBooks(){
//     return this.httpClient.get('http://jsonplaceholder.typicode.com/todos');
//   }



//   get_books(){
//     return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
//   }
//   getBooks(): Observable<Todos[]> {
//     return this.http
//         .get(this._postsURL)
//         .map((response: Response) => {
//             return <todos[]>response.json();
//         })
//         .catch(this.handleError);
// }
//     private handleError(error: Response) {
//         return Observable.throw(error.statusText);
//     }
}