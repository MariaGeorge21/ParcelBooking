import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parcel } from '../model/parcel';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {

  

sendername: string;
recievername: string;
senderaddress: string;
recieveraddress: string;
recieverPhno: number;
parcel1: Parcel;
parcel2: Parcel;
submitted = false;
submits = false;
successMessage: string;id: number;


constructor(private parcelservice: ParcelService, private router: Router) { }
addParcel() {
this.submitted = true;
 this.parcel1 = { sendername: this.sendername, recievername: this.recievername, senderaddress: this.senderaddress, recieveraddress: this.recieveraddress, recieverPhno: this.recieverPhno };
console.log(this.parcel1);
this.parcelservice.addParcel(this.parcel1).subscribe(data => {
 this.successMessage = 'Parcel added successfully';
alert(this.successMessage);
this.router.navigate(['/viewparcel']);},
 error => {
console.log('error');
});




  }}
  // name!: string;
  // email!: string;
  // senderAddress!: string;
  // receiverAddress!: string;
  // weight!: number;
  // price!: number;

//   submitForm() {
//     // Handle form submission logic here
//     const formData = {
//       name: this.name,
//       email: this.email,
//       senderAddress: this.senderAddress,
//       receiverAddress: this.receiverAddress,
//       weight: this.weight,
//       price: this.price
//     };
//     console.log(formData);
//     // You can perform additional actions such as sending data to a server
//   }
// }
