import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  RegisterForm!:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  submitted=false


  ngOnInit() {
    this.RegisterForm=this.formbuilder.group({
      name:['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      location: ['', [Validators.required]],
      Confirmpassword: [Validators.required],
      terms:[false, Validators.required]

    });
  }
   get f(){
    return this.RegisterForm.controls;
  }
  onSubmit(){
  this.submitted=true;
  if(this.RegisterForm.invalid)
  return;
  }

}
