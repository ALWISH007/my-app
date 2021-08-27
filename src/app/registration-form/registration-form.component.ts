import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostalserviceService } from '../postalservice.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {



  firstName: any;
  lastName: any;
  gender: any;
  dob: any;
  age: any;
  addressLine1: any;
  addressLine2: any;
  phoneNumber: any;
  pincode: any;
  state: any;
  district: any;
  photo: any;




  result: any;


  selectedFiles: any;
  data: any;

  //

  @ViewChild('focus')
  focusfirst!: ElementRef;
  ngAfterViewInit() {
    this.focusfirst.nativeElement.focus();
  }



  constructor(private _postalservice: PostalserviceService) {

  }


  nativeElement: any;
  getStateAndDistrict() {
    this._postalservice.getpostaldetails(this.pincode).subscribe(data => {
      this.data = data;
      this.state = this.data[0].PostOffice[0].State;
      this.district = this.data[0].PostOffice[0].District;

    })
  }

  ngOnInit(): void {
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmit(value: any) {
    this.result = JSON.stringify(value.value);
    console.log(this.result);
    localStorage.setItem('userdata', this.result);

  }


  agecalculator(dob: any): void {
    let age;
    dob = this.dob;
    let valyear = new Date(dob).getFullYear();
    let valmonth = new Date(dob).getMonth();
    let valday = new Date(dob).getUTCDate();
    let todayyear = new Date().getFullYear();
    let todaymonth = new Date().getMonth();
    let todayday = new Date().getUTCDate();


    if (todayday < valday && todaymonth < valmonth)
      age = (todayyear - valyear) - 1;
    else
      age = (todayyear - valyear);

    this.age = age;
  }
}
