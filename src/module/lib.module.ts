import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';
import {AmxTextComponent} from './component/forms/textinput/textinput.component';
import {FormsModule} from "@angular/forms";
import {CheckBoxComponent} from "./component/forms/checkbox/checkbox.component";

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LibComponent, AmxTextComponent,CheckBoxComponent],
  declarations: [LibComponent, AmxTextComponent,CheckBoxComponent]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [LibService]
    };
  }
}
