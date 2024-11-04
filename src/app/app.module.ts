import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { TesteBindingComponent } from './teste-binding/teste-binding.component';
import { TesteTabelaComponent } from './teste-tabela/teste-tabela.component';
import { ZeCoisasModuleModule } from './zeCoisas/ze-coisas-module.module';

@NgModule({
  declarations: [AppComponent, TesteTabelaComponent, TesteBindingComponent],
  imports: [
    BrowserModule,
    CardModule,
    AppRoutingModule,
    ZeCoisasModuleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
