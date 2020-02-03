import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',component:HomePageComponent, canActivate:[AuthGuard] ,
  loadChildren:()=>import('../app/pages/dashboard/dashboard.module')
  .then(e=>e.DashboardModule)},
  {path:'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
