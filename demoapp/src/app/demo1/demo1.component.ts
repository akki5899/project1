import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  no1:number=10;
  str:string="hello";
  ans:number;
  add(m,n){
    this.ans=parseInt(m) + parseInt(n);
    alert(this.ans)
  }
  sub(m,n){
    this.ans=parseInt(m) - parseInt(n);
    alert(this.ans)
  }
  div(m,n){
    this.ans=parseInt(m) / parseInt(n);
    alert(this.ans)
  }
  mul(m,n){
    this.ans=parseInt(m) * parseInt(n);
    alert(this.ans)
  }
}
