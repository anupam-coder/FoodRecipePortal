import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { LocalStoreComponent } from './local-store/local-store.component';
import { LocalStoreList } from './local-store/localStore-list/localStore-list.component';
import { LocalStoreItem } from './local-store/localStore-item/localStore-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LocalStoreComponent, LocalStoreList, LocalStoreItem],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
