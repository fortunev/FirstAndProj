import { Component, OnInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-LifecycleHooks',
  template: '  <h1>{{title}}</h1>  <p> current count is {{child.count}} </p>  <button (click)="child.increment()">Increment</button> <button (click)="add()">ADD</button> <button (click)="child.decrement()">Decrement</button>  <child-component #child></child-component> ',
  //templateUrl: './LH.component.html',
  styleUrls: ['./LH.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {
    title = 'Parent Component';
    order = 1;
    num = 1;
    add(){
        console.log('CLICKED')
        this.num = this.num * 2;
    }
     constructor() {
        console.log('Parent constructor()::::' + this.order);
        this.order++;
     }

     ngOnChanges(changes: SimpleChanges) {
        console.log('Parent ngOnChanges()::::' + this.order);
        this.order++;
      }
    
      ngOnInit() {
        console.log('Parent ngOnInit()::::' + this.order);
        this.order++;
      }
    
      ngDoCheck() {
        console.log('Parent ngDoCheck()::::' + this.order);
        this.order++;
      }
    
      ngAfterContentInit() {
        console.log('Parent ngAfterContentInit()::::' + this.order);
        this.order++;
      }
    
      ngAfterContentChecked() {
        console.log('Parent ngAfterContentChecked()::::' + this.order);
        this.order++;
      }
    
      ngAfterViewInit() {
        console.log('Parent ngAfterViewInit()::::' + this.order);
        this.order++;
      }
    
      ngAfterViewChecked() {
        console.log('Parent ngAfterViewChecked()::::' + this.order);
        this.order++;
      }
    
      ngOnDestroy() {
        console.log('Parent ngOnDestroy()::::' + this.order);
        this.order++;
      }

}