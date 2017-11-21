import {Input} from '@angular/core';
/**
 * Base class Used to Inject into all Form Fields Components.
 */
export class FormInputBase {

  @Input()   fieldLabel: string;

  @Input()   fieldName: string;

  @Input()   minLength: number;

  @Input()   minErrorMsg: string;

  @Input()   maxLength: number;

  @Input()   maxErrorMsg: string;

  @Input()   allowBlank: string;

  @Input()   errorMsg: string;

  @Input()   placeholder: string;

  @Input()   disabled: boolean;

  @Input()   iconFeedBack: boolean;

  @Input()   fontStyle: string;

  @Input()   fontFamily: string;

  @Input()   fontSize: string;

  @Input()   hasLabel: boolean;

  @Input()   pattern: string;

  @Input()   enablePopOver: boolean;

  elementId: string;

  helpInfoMsg: string;

  isValid: boolean;

  regEx: RegExp;

  error: boolean;

  success: boolean;

  showToolTip: boolean;

  constructor() {
    this.error = false;
    this.success = false;
    this.showToolTip = false;
    this.hasLabel = true;
  }

  validate() {
    this.isValid = this.isValidInput();
  }

  isValidInput(): any {
    return null;
  }

}
