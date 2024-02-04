import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
{
    path: "",
    component: HomePageComponent,
    title: "AliMama.com"
},
{
    path: "homePage",
    component: HomePageComponent,
    title: "AliMama.com"
},
{
    path: "login",
    component: LoginComponent,
    title: "login"
},
{
    path: "register",
    component: RegisterComponent,
    title: "register"
},
{
    path: "cart",
    component: CartComponent,
    title: "cart"
},
{
    path: "homePage/:id",
    component: ProductDetailsComponent,
    title: "Product details"
},
{
    path: "**",
    component: NotFoundComponent,
    title: "Error 404 , Page not found !"
}

];
