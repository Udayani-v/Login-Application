import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
  MatDialogModule, MatIconModule, MatToolbarModule, MatMenuModule, MatListModule,
  MatSidenavModule, MatTableModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
