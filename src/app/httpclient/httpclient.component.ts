import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Book } from './book';
import { Todo } from './todo';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.html',
  styleUrls: ['./httpclient.css']
})
export class HttpClientComponent implements OnInit {
  book ={};
  todos;
  title = 'http get';
  books: Observable<any>;
  constructor (private http: HttpClient){}
  //constructor (private serv: DataService, private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe(data => {
        console.log(data);
      });
  }
  // loadBooks(){
  //   this.serv.getBooks().subscribe(response => { this.todos = response; });
  //   //this.books = this.http.get('http://jsonplaceholder.typicode.com/todos');
  // }
}