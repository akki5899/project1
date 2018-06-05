import { Component, OnInit } from '@angular/core';
import { employee } from "./employee";
@Component({
  selector: 'app-empdemo',
  templateUrl: './empdemo.component.html',
  styleUrls: ['./empdemo.component.css']
})
export class EmpdemoComponent implements OnInit {
 eid:number;
 ename:string;
 esalary:number;
 egender1:string='male';
 edesignation1:string='clerk';
 estatus:string='yes';

 arr:employee[]=[]
 edesignation:string[]=[
   'clerk','manager','ceo'
 ]
  constructor() { }
onAdd()
{
  this.arr.push(new employee(this.eid,this.ename,this.esalary,this.egender1,this.edesignation1,this.estatus))
}
onDelete(item:employee){
  this.arr.splice(this.arr.indexOf(item),1);
}
onUpdate(item:employee){
  if(item.e_status=='yes')
  {
    item.e_status='no';
  }
  else
  {
    item.e_status='yes';
  }
}
  ngOnInit() {
  }

}
