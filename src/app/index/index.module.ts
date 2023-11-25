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

  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    // ErrorModule
  ]
})
export class IndexModule { }
