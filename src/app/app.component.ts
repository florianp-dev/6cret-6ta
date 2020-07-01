import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '6cret-6ta';

  constructor(private router: Router) {}

  ngOnInit() {
    // TODO check l'existence du fichier de conf
    //this.router.navigateByUrl('la route qu on veut');
  }
}
