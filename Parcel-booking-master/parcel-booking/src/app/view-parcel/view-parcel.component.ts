import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrls: ['./view-parcel.component.css']
})
export class ViewParcelComponent implements OnInit {
    parcelId: string;
    trackingStatus: string;
  
    constructor() { }
  
    ngOnInit() {
      // Simulate fetching parcel details from an API
      this.parcelId = '123456789';
      this.trackingStatus = 'In transit';
    }

}
