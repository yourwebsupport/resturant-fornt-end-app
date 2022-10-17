import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import {FullLoginComponent} from "./components/login/full-login/full-login.component";
import {SingleLoginComponent} from "./components/login/single-login/single-login.component";
import {SsoLoginComponent} from "./components/login/sso-login/sso-login.component";


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'full-login',
        component: FullLoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: 'single-login',
        component: SingleLoginComponent,
        data: { layout: 'light-header' },
      },
      {
        path: 'sso-login',
        component: SsoLoginComponent,
        data: { layout: 'light-header' },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: 'registration',
        component: RegistrationComponent,

      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
