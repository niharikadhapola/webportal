import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './webportal/login.component';
import { HomeComponent } from './webportal/home.component';
import { ViewScheduleComponent } from './webportal/view-schedule.component';
import { RepresentativeScheduleComponent } from './webportal/representative-schedule.component';
import { PlaceDemandComponent } from './webportal/place-demand.component';
import { HeaderComponent } from './webportal/header.component';
import { SupplyDemandComponent } from './webportal/supply-demand.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { WebPortalService } from './webportal/web-portal.service';
import { AuthGuard } from './oauthguard/auth.guard';
import { AuthInterceptor } from './oauthguard/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewScheduleComponent,
    RepresentativeScheduleComponent,
    PlaceDemandComponent,
    HeaderComponent,
    SupplyDemandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WebPortalService, AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
