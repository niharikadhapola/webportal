import { Component, OnInit } from '@angular/core';
import { RepresentativeSchedule } from '../model/representative-schedule';

@Component({
  selector: 'app-representative-schedule',
  templateUrl: './representative-schedule.component.html',
  styleUrls: ['./representative-schedule.component.css']
})
export class RepresentativeScheduleComponent implements OnInit {

  constructor() { }

  representativeScheduleDisplay: RepresentativeSchedule[];

  ngOnInit(): void {
    var represntaiveScheduleList = JSON.parse(localStorage.getItem("represntaiveScheduleList"));
    console.log("In representative-schedule page");
    console.log(represntaiveScheduleList);
    this.representativeScheduleDisplay = represntaiveScheduleList;
  }

}
