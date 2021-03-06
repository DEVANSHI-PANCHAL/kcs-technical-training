import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { HeaderComponent } from './header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{
  path:'',
  children: [{
    path: 'signIn',
    component: SignInComponent
  },{
    path:'signUp',
    component: SignUpComponent
  },{
    path:'products',
    component: ProductsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
