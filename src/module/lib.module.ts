import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';
import {AmxTextComponent} from './component/textinput/textinput.component';

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LibComponent, AmxTextComponent],
  declarations: [LibComponent, AmxTextComponent]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [LibService]
    };
  }
}
