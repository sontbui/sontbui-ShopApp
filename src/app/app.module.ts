import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewGUIComponent } from './new-gui/new-gui.component';


@NgModule({
  declarations: [
    
    HomeComponent,
         FooterComponent,
         HeaderComponent,
         OrderComponent,
         OrderConfirmComponent,
         LoginComponent,
         RegisterComponent,
         NewGUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // HomeComponent,
    OrderComponent,
    OrderConfirmComponent,
    //LoginComponent,
    // RegisterComponent,
    // NewGUIComponent


  ]

})
export class AppModule { }
