import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-student-statistict',
  templateUrl: './student-statistict.component.html',
  styleUrls: ['./student-statistict.component.css']
})
export class StudentStatistictComponent implements OnInit {
  dailyData: any;
  dailyStud: any;
  dailyStaff: any;
  dailyConst: any;
  dailyVis: any;
  dailySymp: any;
  total_hotspot: any[] = [];

  // total_soshn: any; total_soshs: any; total_rank: any; total_arc: any; total_art: any; 
  // total_emal: any; total_main: any; total_pol: any;

  campus: String[] = ["soshn", "soshs", "rank", "arc", "art", "emal", "main", "pol"];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    // this.appService.getDaily().subscribe( 
    //   (      response: any) => {
    //     this.dailyData = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });

    // this.appService.getDailyStud().subscribe( 
    //   (      response: any) => {
    //     this.dailyStud = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });

    // this.appService.getDailyStaff().subscribe( 
    //   (      response: any) => {
    //     this.dailyStaff = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });

    // this.appService.getDailyVis().subscribe( 
    //   (      response: any) => {
    //     this.dailyVis = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });

    // this.appService.getDailySymp().subscribe( 
    //   (      response: any) => {
    //     this.dailySymp = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });
  }

}