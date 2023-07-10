import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from '../model/jwt-request';
import {WebPortalService} from './web-portal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: WebPortalService, private router: Router) { }

  errorMsg:any;
  ngOnInit(): void {
    
  }

  onSubmit(user: JwtRequest) {

    this.service.generateToken(user).subscribe(
      (response: any) => {
        console.log(response.authToken);
        this.service.loginUser(response.authToken);
        this.router.navigate(['/pharmacy/home']);
      },
      error => {
        console.log(error);
        this.errorMsg = localStorage.getItem("error");
        localStorage.removeItem("error");
        this.router.navigate(['/pharmacy/login']);
      }
    )

    
    // this.service.postLogin(user).subscribe(data => {
      
    //   this.router.navigate(['/pharmacy/home']);
    // })
    
  }

}
