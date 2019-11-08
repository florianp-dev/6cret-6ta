import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    this.form = this.formBuilder.group({
      token : this.formBuilder.control('', [Validators.required])
    });
  }

  submitForm() {
    const value = this.form.get('token').value;
    alert(value);
  }
}
