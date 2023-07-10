import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SupplyDemand} from '../model/supplied-demand';

@Component({
  selector: 'app-supply-demand',
  templateUrl: './supply-demand.component.html',
  styleUrls: ['./supply-demand.component.css']
})
export class SupplyDemandComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  data: SupplyDemand[];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data = JSON.parse(atob(params.data));
      console.log(this.data);
    })    
  }

}
