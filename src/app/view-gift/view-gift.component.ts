import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../discover.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-gift',
  templateUrl: './view-gift.component.html',
  styleUrls: ['./view-gift.component.css']
})
export class ViewGiftComponent implements OnInit {

  currentUser: any;

  constructor(private discoverService : DiscoverService, private router: Router) {
    this.currentUser = this.discoverService.getToGift();
  }

  ngOnInit() {
    if (this.currentUser === undefined)
      this.router.navigateByUrl('/ident');
  }
}
