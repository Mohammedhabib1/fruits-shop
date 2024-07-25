import { Routes } from '@angular/router';
import { CartComponent } from '../app/cart/cart.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { ContactComponent } from '../app/contact/contact.component';
import { HomeComponent } from '../app/home/home.component';
import { PaymentComponent } from '../app/payment/payment.component';
import { ProductComponent } from '../app/product/product.component';
import { ShopComponent } from '../app/shop/shop.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { SuccessComponent } from '../app/success/success.component';

export const homeRoutes: Routes = [
  {
    path: '', component: ProductComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'success', component: SuccessComponent
  }

]
