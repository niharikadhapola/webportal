import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './webportal/login.component';
import {HomeComponent} from './webportal/home.component';
import {ViewScheduleComponent} from './webportal/view-schedule.component';
import {RepresentativeScheduleComponent} from './webportal/representative-schedule.component';
import {PlaceDemandComponent} from './webportal/place-demand.component';
import {SupplyDemandComponent} from './webportal/supply-demand.component';
import { AuthGuard } from './oauthguard/auth.guard';

const routes: Routes = [
  {path:"pharmacy/login", component: LoginComponent},
  {path:"", redirectTo: "pharmacy/login", pathMatch: "full"},
  {path:"pharmacy/home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "pharmacy/viewSchedule", component: ViewScheduleComponent, canActivate: [AuthGuard]},
  {path: "pharmacy/representativeSchedule", component: RepresentativeScheduleComponent, canActivate: [AuthGuard]},
  {path: "pharmacy/placeDemand", component: PlaceDemandComponent, canActivate: [AuthGuard]},
  {path: "pharmacy/supplyDemand", component: SupplyDemandComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
