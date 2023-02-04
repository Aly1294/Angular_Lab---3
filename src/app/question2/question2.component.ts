import { Component } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  arr_of_products:number[]=[1,2,3];
  arr_of_wanted_products:number[]=[2,3,2,2,2,3];
date:Date=new Date
price:number=500
img:string="https://picsum.photos/200"
}
