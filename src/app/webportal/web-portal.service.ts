import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from '../model/jwt-request';
import { PlaceDemand } from '../model/place-demand-form-data';
import {ViewSchedule} from '../model/view-schedule-form-data';
import {RepresentativeSchedule} from '../model/representative-schedule';
import { Medicine } from '../model/medicine';
import {SupplyDemand} from'../model/supplied-demand';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebPortalService {

  constructor(private http: HttpClient) { }

  getErrorHandler(errorRes: HttpErrorResponse): any {
    let errorMsg: string;
    console.log(errorRes.error);

    switch(errorRes.error) {
      case "Wrong Password":
        errorMsg = "Please Enter Correct Password";
        localStorage.setItem("error", errorMsg);
        break;
      case "User Id not found":
        errorMsg = "Please Enter Correct User ID";
        localStorage.setItem("error", errorMsg);
        break;

    }
  }

  generateToken(userCredentials: JwtRequest) {
    return this.http.post("http://localhost:9095/login", userCredentials).pipe(
      catchError(this.getErrorHandler));
  }

  //for login user
  loginUser(authToken) {
    localStorage.setItem("authToken",authToken);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("authToken");

    if(token == undefined || token==='' || token==null) {
      return false;
    }
    else { 
      return true;
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    return true;
  }

  getToken() {
    return localStorage.getItem("authToken");
  }



  postLogin(user: JwtRequest): Observable<JwtRequest> {
    console.log("Inside service method");
    console.log(user);
    return this.http.post<JwtRequest>("http://localhost:8080/pharmacy/postLogin", user);
  }

  getMedicineStockInformation(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>("http://localhost:8080/MedicineStockInformation");
  }


  showSchedule(startDate: string): Observable<RepresentativeSchedule[]> {
    console.log("Inside service");
    console.log(startDate);
    return this.http.get<RepresentativeSchedule[]>("http://localhost:8080/RepSchedule/" + startDate);
  }

  showList(placeDemandData: PlaceDemand): Observable<SupplyDemand[]> {
   console.log("Inside Service");
   console.log(placeDemandData);
   let medicineName: string = placeDemandData.medicineName;
   let demand: number = placeDemandData.demand;
   return this.http.get<SupplyDemand[]>("http://localhost:8080/SupplyAvailed/" + medicineName + "/" + demand);
 }
}
