import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ListMenuComponent } from './pages/list-menu/list-menu.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from "ngx-spinner";
import { AdminIndexComponent } from './pages/admin/admin-index/admin-index.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { DashboardIndexContentComponent } from './pages/admin/admin-dashboard/dashboard-index-content/dashboard-index-content.component';
import { DashboardPaymentContentComponent } from './pages/admin/admin-dashboard/dashboard-payment-content/dashboard-payment-content.component';
import { DashboardReportContentComponent } from './pages/admin/admin-dashboard/dashboard-report-content/dashboard-report-content.component';
import { AdminContentComponent } from './pages/admin/admin-dashboard/dashboard-basic-content/admin-content/admin-content.component';
import { OrganizerContentComponent } from './pages/admin/admin-dashboard/dashboard-basic-content/organizer-content/organizer-content.component';
import { MemberContentComponent } from './pages/admin/admin-dashboard/dashboard-basic-content/member-content/member-content.component';
import { LocationContentComponent } from './pages/admin/admin-dashboard/dashboard-basic-content/location-content/location-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SettingProfileComponent } from './pages/setting-profile/setting-profile.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { OrganizerDashboardComponent } from './pages/organizer/organizer-dashboard/organizer-dashboard.component';
import { OrganizerIndexComponent } from './pages/organizer/organizer-index/organizer-index.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { ApproverRunningComponent } from './pages/admin/admin-dashboard/approver-menu-content/approver-running/approver-running.component';
import { ApproverPaymentComponent } from './pages/admin/admin-dashboard/approver-menu-content/approver-payment/approver-payment.component';
import {  MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ApproverOrganizerComponent } from './pages/admin/admin-dashboard/approver-menu-content/approver-organizer/approver-organizer.component';
@NgModule({
  declarations: [
    IndexComponent,
    NavBarComponent,
    HeaderComponent,
    AuthPageComponent,
    ListMenuComponent,
    AdminIndexComponent,
    AdminDashboardComponent,
    ErrorComponent,
    DashboardIndexContentComponent,
    DashboardPaymentContentComponent,
    DashboardReportContentComponent,
    AdminContentComponent,
    OrganizerContentComponent,
    MemberContentComponent,
    LocationContentComponent,
    SettingProfileComponent,
    UserHistoryComponent,
    OrganizerDashboardComponent,
    OrganizerIndexComponent,
    ApproverRunningComponent,
    ApproverPaymentComponent,
    ApproverOrganizerComponent,


  ],
  imports: [
    FormsModule,
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    BrowserModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    // ErrorModule
  ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],

})
export class IndexModule {

}
