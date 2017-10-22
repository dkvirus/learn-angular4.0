import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllTypeComponent } from './all-type/all-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormWithBootstrapComponent } from './reactive-form-with-bootstrap/reactive-form-with-bootstrap.component';
import { MyValidatorDirective } from './diractive/my-validator.directive';
import { EqualValidatorDirective } from './diractive/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllTypeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormWithBootstrapComponent,
    MyValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
