import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';
import {FormsModule} from "@angular/forms";
import {AmxFormsModule} from "./component/forms/forms.module";
import {HttpModule} from "@angular/http";
import {CommonDataService} from "./service/common.data.service";

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AmxFormsModule,
    HttpModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [LibService,CommonDataService]
    };
  }
}
