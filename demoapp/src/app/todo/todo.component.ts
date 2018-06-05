import { Component, OnInit } from '@angular/core';
import { task } from './task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  i1:number;
  t1:string;
  s1:string ;

  status:string[]=[
    'done',
    'pending'
  ]
arr:task[]=[
  new task(1,'abc','done'),
  new task(2,'xyz','pending'),
  new task(3,'xzz','pending')
]
onDelete(item:task)
{
 this.arr.splice(this.arr.indexOf(item),1);
}
onEdit(item:task)
{
  if (item.status=='done')
  {
    item.status='pending'
  }
  else
  {
    item.status='done'
  }
}
onAdd(){
  this.arr.push(new task(this.i1,this.t1,this.s1))
}
}
