import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

export function loadConfig(config: ConfigService) {
    return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER,
              useFactory: loadConfig,
              deps: [ConfigService], 
              multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
