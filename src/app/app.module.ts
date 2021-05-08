import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { ItemComponent } from './item/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthguardService } from './services/authguard.service';
import { AppLayoutComponent } from './appLayout/app-layout/app-layout.component';
import { UserComponent } from './user/user/user.component';
import { RoleComponent } from './role/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    AppLayoutComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
