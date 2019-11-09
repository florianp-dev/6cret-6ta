import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../discover.service';

@Component({
  selector: 'app-view-gift',
  templateUrl: './view-gift.component.html',
  styleUrls: ['./view-gift.component.css']
})
export class ViewGiftComponent implements OnInit {

  togift : String;

  constructor(private discoverService : DiscoverService) { }

  ngOnInit() {
    this.togift = this.discoverService.getToGift();
  }
}
