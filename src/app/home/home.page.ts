import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm()
  }
createForm(){
  this.form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]]
  });
}
salvar(){
  console.log(this.form.value);
  this.createForm();
}
}
