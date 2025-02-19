import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentInformationComponent } from './components/payment-information/payment-information.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:ProductsPageComponent},
  {path:"register",component:RegisterComponent},
  {path:"paymentinformation/:productId",component:PaymentInformationComponent},
  {path:'products/detail/:productId', component: ProductDetailComponent },
  {path:'products/category/:categoryId', component: ProductsPageComponent },
  {path:'products/brand/:brandId', component: ProductsPageComponent },

  {path:"profil",component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
