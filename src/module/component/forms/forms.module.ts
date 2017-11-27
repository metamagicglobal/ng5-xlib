/**
 * Created by pratik on 27/11/17.
 */
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AmxTextComponent} from "./textinput/textinput.component";
import {CheckBoxComponent} from "./checkbox/checkbox.component";
import {CommonDataService} from "../../service/common.data.service";
import {RadioGroupComponent} from "./radiogroup/radiogroup.component";

// Export module's public API

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AmxTextComponent,CheckBoxComponent,RadioGroupComponent],
  declarations: [AmxTextComponent,CheckBoxComponent,RadioGroupComponent]
})
export class AmxFormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmxFormsModule,
      providers: [CommonDataService]
    };
  }
}
