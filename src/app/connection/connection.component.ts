import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    this.form = this.formBuilder.group({
      login : this.formBuilder.control('', [Validators.required]),
      pwd : this.formBuilder.control('', [Validators.required])
    });
  }

  submitForm() {
    // TODO vérifier la connexion de l'utilisateur & set session
  }
}
