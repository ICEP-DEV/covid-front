import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {
  userModal = new User();
  staffDetails: any;
  token: any;
  editForm: any;
  email: any;
  address: any;
  fname: any;
  lname: any;
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  namePattern = "[a-zA-Z ]*";
  addressPattern = "(?i)^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$";

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    this.appService.adminProfile(this.token).subscribe( 
      response => {
        this.staffDetails = response;
        // old values to be editted
        this.email = response.email;
        this.address = response.address;
        this.fname = response.fname;
        this.lname = response.lname;
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });
  }
  
  onSubmit(editForm : NgForm) {
    console.table(this.userModal);
    let new_data = {
      fname: editForm.value.firstName,
      lname: editForm.value.lastName,
      email: editForm.value.email,
      address: editForm.value.address
    }
    
    console.log(new_data)
    this.appService.editAdminProfile(new_data).subscribe( 
      (data: any) => {
        console.log(this.address)
        console.log(data)

      }, (error: any) => {
        console.log(error, 'edit admin error!!!')
    });

    this.appService.refrash_token().subscribe( 
      (userData: any) => {
        localStorage.removeItem('token')
        location.reload();
        localStorage.setItem('token', userData.token)
        //console.log(userData.token)
      }, (error: any) => {
        console.log(error, 'refrash token error!!!')
    });
  }


  openEditForm(){
    this.editForm = !this.editForm;
  }
}
