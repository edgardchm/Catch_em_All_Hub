import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register',component: RegisterComponent, loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  // ...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'login', component: LoginComponent },
//{ path: 'register', component: RegisterComponent },