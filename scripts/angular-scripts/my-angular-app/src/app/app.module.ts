import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { ValidateButtonComponent } from './validate-button/validate-button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ValidateButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const validateButton = createCustomElement(ValidateButtonComponent, { injector });
    customElements.define('validate-button', validateButton);
  }
  ngDoBootstrap() { }
}
