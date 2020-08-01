import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import components
import { BodyContentComponent } from './body-content/body-content.component';
import { AutocompleteElementComponent } from './autocomplete-element/autocomplete-element.component';
import { CheckboxElementComponent } from './checkbox-element/checkbox-element.component';
import { DatepickerElementComponent } from './datepicker-element/datepicker-element.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { InputElementComponent } from './input-element/input-element.component';
import { RadioElementComponent } from './radio-element/radio-element.component';
import { SelectElementComponent } from './select-element/select-element.component';
import { TextareaElementComponent } from './textarea-element/textarea-element.component';
import { SliderElmentComponent } from './slider-elment/slider-elment.component';
import { MaterialModuleModule} from './material-module/material-module.module';

//Import httpclient module
import { HttpClientModule } from '@angular/common/http';
import { CustomerCodeEntryComponent } from './customer-code-entry/customer-code-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyContentComponent,
    AutocompleteElementComponent,
    CheckboxElementComponent,
    DatepickerElementComponent,
    MiddleContentComponent,
    InputElementComponent,
    RadioElementComponent,
    SelectElementComponent,
    TextareaElementComponent,
    SliderElmentComponent,
    CustomerCodeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
