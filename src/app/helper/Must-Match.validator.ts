import {FormGroup} from '@angular/forms';

export function MustMatch(controlName:string,matchingControlName:string){
  return (formgroup:FormGroup) =>{
    const control= formgroup.controls[controlName];
    const matchingcontrol=formgroup.controls[matchingControlName];

    if(matchingcontrol.errors && !matchingcontrol.errors.mustMatch)
  }
}

