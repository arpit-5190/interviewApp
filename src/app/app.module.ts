import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    SliderElmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
