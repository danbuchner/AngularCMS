import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PageService } from './services/page.service';
import { UserService } from './services/user.service';
import { SidebarService } from './services/sidebar.service';
import { PagesComponent } from './components/pages/pages.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin/pages', component: AdminPagesComponent },
  { path: 'admin/add-page', component: AdminAddPageComponent },
  { path: 'admin/edit-page/:id', component: AdminEditPageComponent },
  { path: 'admin/sidebar', component: AdminSidebarComponent },
  { path: ':page', component: PagesComponent },
  { path: '', component: PagesComponent }  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminNavbarComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PageService,
    SidebarService,
    Title,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
