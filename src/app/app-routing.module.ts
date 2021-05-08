import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './appLayout/app-layout/app-layout.component';
import { AuthenticationGuard } from './authentication.guard';
import { ItemComponent } from './item/item/item.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { RoleComponent } from './role/role/role.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'items', component: ItemComponent },
      { path: 'users', component: UserComponent },
      { path: 'roles', component: RoleComponent }
    ], canActivate: [AuthenticationGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
