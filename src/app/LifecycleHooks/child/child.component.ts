import { Component, OnInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
    selector: 'child-component',
    template: '<h2>Child Component</h2> current count is {{count}}. '
})

export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {
    count = 0;
    order = 1;
    increment(){
        this.count++;
    }
    decrement(){
        this.count--;
    }
    constructor() {
        console.log('Child constructor()::::' + this.order);
        this.order++;
     }

     ngOnChanges(changes: SimpleChanges) {
        console.log('Child ngOnChanges()::::' + this.order);
        this.order++;
      }
    
      ngOnInit() {
        console.log('Child ngOnInit()::::' + this.order);
        this.order++;
      }
    
      ngDoCheck() {
        console.log('Child ngDoCheck()::::' + this.order);
        this.order++;
      }
    
      ngAfterContentInit() {
        console.log('Child ngAfterContentInit()::::' + this.order);
        this.order++;
      }
    
      ngAfterContentChecked() {
        console.log('Child ngAfterContentChecked()::::' + this.order);
        this.order++;
      }
    
      ngAfterViewInit() {
        console.log('Child ngAfterViewInit()::::' + this.order);
        this.order++;
      }
    
      ngAfterViewChecked() {
        console.log('Child ngAfterViewChecked()::::' + this.order);
        this.order++;
      }
    
      ngOnDestroy() {
        console.log('Child ngOnDestroy()::::' + this.order);
        this.order++;
      }
}