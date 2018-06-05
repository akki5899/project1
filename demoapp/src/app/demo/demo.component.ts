import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  x="";
  no1:number=0;
  no2:number=0;
  flag:number=0;
  constructor() { }

  ngOnInit() {
  }
onclick(value)
{
this.x+=value;
}
onadd(){
  this.no1=parseInt(this.x);
  this.flag=1;
  this.x=""
}
onmin(){
  this.no1=parseInt(this.x);
  this.flag=2;
  this.x=""
}
onmul(){
  this.no1=parseInt(this.x);
  this.flag=3;
  this.x=""
}
ondiv(){
  this.no1=parseInt(this.x);
  this.flag=4;
  this.x=""
}
oneq(){
  this.no2=parseInt(this.x)
  if(this.flag==1)
  {
   this.x=(this.no1+this.no2)+"";
  }
  if(this.flag==2)
  {
   this.x=(this.no1-this.no2)+"";
  }
  if(this.flag==3)
  {
   this.x=(this.no1*this.no2)+"";
  }
  if(this.flag==4)
  {
   this.x=(this.no1/this.no2)+"";
  }

}
once(){
  this.x=""
}
}
