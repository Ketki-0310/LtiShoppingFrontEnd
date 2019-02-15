import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RetailerLoginComponent } from './retailerLogin/retailer-login.component';
import { RegistrationComponent } from 'src/Registration/registration-form.component';
import { LoginComponent } from 'src/Registration/Login-module/login-module.component';
import { ProductComponent } from 'src/Registration/Login-module/product-component/product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { RetailerHomepage } from './retailer-homepage/retailer-homepage.component';
import { Footwear } from './categories/footwear/footwear.component';
import { Electronics } from './categories/electronics/electronics.component';
import { Mobile } from './categories/mobile/mobile.component';
import { Clothing } from './categories/clothing/clothing.component';
import { HomePage } from './Home/home';
import { HomePageComponent } from './Home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    RetailerLoginComponent,
    RegistrationComponent,
    LoginComponent,
    ProductComponent,
    AdminLoginComponent,
    AdminHomepageComponent,
    RetailerHomepage,
    Clothing,
    Footwear,
    Electronics,
    Mobile,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'retailer-homepage', component:RetailerHomepage}
      , {path: 'admin-homepage', component:AdminHomepageComponent}
      , {path: 'admin-login', component:AdminLoginComponent}
      , {path: 'product', component: ProductComponent}
      , {path: 'customer-login', component: CustomerLoginComponent}
      , {path: 'retailer-login', component: RetailerLoginComponent}
      , {path: 'registration-form', component: RegistrationComponent}
      , {path: 'login', component: LoginComponent}
      , {path: 'clothing', component: Clothing}
      , {path: 'footwear', component: Footwear}
      , {path: 'electronics', component: Electronics}
      , {path: 'mobile', component: Mobile}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
