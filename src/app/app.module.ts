import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
