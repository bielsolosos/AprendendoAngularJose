import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { TesteBindingComponent } from './teste-binding/teste-binding.component';
import { TesteTabelaComponent } from './teste-tabela/teste-tabela.component';
import { ZeComponent } from './ze/ze.component';

@NgModule({
  declarations: [AppComponent, TesteTabelaComponent, TesteBindingComponent, ZeComponent],
  imports: [BrowserModule, CardModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
