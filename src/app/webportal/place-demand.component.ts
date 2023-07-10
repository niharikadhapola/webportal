import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlaceDemand} from '../model/place-demand-form-data';
import { WebPortalService } from './web-portal.service';
import {Medicine} from '../model/medicine';
@Component({
  selector: 'app-place-demand',
  templateUrl: './place-demand.component.html',
  styleUrls: ['./place-demand.component.css']
})
export class PlaceDemandComponent implements OnInit {


  constructor(private service: WebPortalService, private router: Router) { }

  medicine: Medicine[];
  errorMsg: string;

  ngOnInit(): void {
    
    this.service.getMedicineStockInformation().subscribe(response => {
      console.log(response);
      this.medicine = response;
    });
  }

  onSubmit(placeDemandData: PlaceDemand){

    if(placeDemandData.medicineName == null){
      this.errorMsg = "Select a medicine name";
    }
    console.log("Inside form");
    console.log(placeDemandData);
    this.service.showList(placeDemandData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/pharmacy/supplyDemand'],{
        queryParams: {data: btoa(JSON.stringify(data))}
      });
    }, error => {
      this.errorMsg = error.error;
      
    });
    

  }
}
