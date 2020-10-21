import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public title: string;
  persons: string[] = [];
  
  addItem():void{
    this.persons.push(this.title);
    this.title = '';
  }

  deletePerson(index:number):void{
    this.persons.splice(index,1);
  }

  editPerson(i:number):void{
    let person:string;
    person = this.persons.find((person,index) =>{
      return i === index;
    })
    this.title = person;
  }
  public power:number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
