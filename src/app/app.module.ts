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

//Import Angular Material Element Modules
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';

//Import httpclient module
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatExpansionModule,
    MatRippleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
