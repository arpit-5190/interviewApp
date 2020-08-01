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
import { MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

const modules = [
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatStepperModule,
  MatIconModule,
  MatExpansionModule,
  MatRippleModule,
  MatSliderModule,
  MatTooltipModule,
  MatSnackBarModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModuleModule { }
