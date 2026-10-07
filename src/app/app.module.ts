import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '@core/site-header/site-header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from '@catalog/catalog.module';
import { provideHttpClient } from '@angular/common/http';
import { CART_OPTIONS_TOKEN } from '@core/service/cart/cart.service';

@NgModule({
  declarations: [AppComponent, SiteHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CatalogModule],
  providers: [
    provideHttpClient(),
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: {
        persistenceType: 'local',
        persistenceKey: 'cart',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
