import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
   
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';    
const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'About',
      component: AboutComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
}
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }