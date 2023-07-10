import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exit } from 'process';
import { RepresentativeSchedule } from '../model/representative-schedule';
import { ViewSchedule } from '../model/view-schedule-form-data';
import {WebPortalService} from './web-portal.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private service: WebPortalService) { }

  represntaiveScheduleList : RepresentativeSchedule[];
  startDate: string;
  errorMsg: string;
  ngOnInit(): void {
  }

  onSubmit(date: ViewSchedule) {
    console.log("inside view-schedule-form");
    this.startDate = date.startDate;
    console.log(this.startDate);
    this.service.showSchedule(this.startDate).subscribe(response => {
      console.log(response);
      this.represntaiveScheduleList = response;
      localStorage.setItem("represntaiveScheduleList", JSON.stringify(this.represntaiveScheduleList));
      this.router.navigate(['/pharmacy/representativeSchedule']);  
    },
    error =>{
      console.log(error);
      this.router.navigate(['/pharmacy/viewSchedule']);
    })
   
  }

}
