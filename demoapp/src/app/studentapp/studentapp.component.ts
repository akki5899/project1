import { Component, OnInit } from '@angular/core';
import { vidhyarthi } from './stapp';
import { task } from '../todo/task';
@Component({
  selector: 'app-studentapp',
  templateUrl: './studentapp.component.html',
  styleUrls: ['./studentapp.component.css']
})
export class StudentappComponent implements OnInit {

  constructor() { }
  rno:number;
  name:string;
  gender:string='Male';
  mno:string;
  active:string='Yes';
  city1:string='Ahmedabad';
  city:string[]=[
    'Ahmedabad',
    'Delhi',
    'pune'
  ]

  ngOnInit() {
  }
  arr:vidhyarthi[]=[];
 onadd(){
  console.log('hello');
   this.arr.push(new vidhyarthi(this.rno,this.name,this.gender,this.mno,this.city1,this.active));
 }
 onDelete(item:vidhyarthi)
{
 this.arr.splice(this.arr.indexOf(item),1);
}
onEdit(item:vidhyarthi)
{
  if (item.active=='Yes')
  {
    item.active='no'
  }
  else
  {
    item.active='yes'
  }
}

}
