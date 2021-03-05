import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() {
  }
  // model={
  //   username:'/',
  //   email:'/',
  //   password:'/',
  //   terms:false
  // }
  model:any=[];

  ngOnInit(): void {
  }

onSubmit(f:NgForm)
{
  console.log(f.value)
}
}
