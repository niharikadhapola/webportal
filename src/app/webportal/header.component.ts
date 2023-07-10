import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebPortalService } from './web-portal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: WebPortalService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(): void {

    this.service.logout();
    this.route.navigate(['/pharmacy/login']);  

  }
}
