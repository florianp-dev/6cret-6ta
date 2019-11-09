import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscoverService } from '../discover.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  form : FormGroup;

  constructor(private formBuilder: FormBuilder, private discoverService: DiscoverService) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    this.form = this.formBuilder.group({
      token : this.formBuilder.control('', [Validators.required, Validators.minLength(24), Validators.maxLength(24)])
    });
  }

  submitForm() {
    const value = this.form.get('token').value;
    this.discoverService.setToken(value);
    // TODO redirect route to view gift
  }
}
