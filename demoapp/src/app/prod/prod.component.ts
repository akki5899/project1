import { Component, OnInit } from '@angular/core';
import { prodo } from './prodd';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  constructor() { }
  flag:boolean=false;
  id1:number;
  name1:string;
  price1:number;
  pimg:string;
  mfg1:string;
sell1:string="yes";
  arr:prodo[]=[
new prodo(1,"MRF",1300,"../../assets/img/1.jpg","MRF","yes"),
new prodo(1,"MRF",1300,"../../assets/img/1.jpg","MRF","yes")
  ]
  ngOnInit() {
  }

  onadd()
  {
        this.arr.push(new prodo (this.id1,this.name1,this.price1,this.pimg,this.mfg1,this.sell1))

        this.flag=false;
      }
  onDelete(item:prodo)
  {
   this.arr.splice(this.arr.indexOf(item),1);
  }
  onEdit(item:prodo)
  {
    if (item.sell1=='yes')
    {
      item.sell1='no'
    }
    else
    {
      item.sell1='yes'
    }
  }
  onadd1()
  {
    this.flag=true;
  }
}
