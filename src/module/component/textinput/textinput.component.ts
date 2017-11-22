import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormInputBase} from '../formbase/form.base.class';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AmxTextComponent),
  multi: true
};

export const BASE_IMPL_TEXT_INPUT: any = {
  provide : FormInputBase,
  useExisting: forwardRef(() => AmxTextComponent)
};

@Component({
  selector: 'amx-text-component',
  templateUrl: './textinput.component.html',
  providers : [CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXT_INPUT],
  styleUrls: ['./textinput.component.scss']
})
export class AmxTextComponent implements ControlValueAccessor{


  @Input()   fieldLabel: string;

  @Input()   minLength: number;

  @Input()   maxLength: number;

  @Input()   allowBlank: string;

  helpInfoMsg: string;

  regEx : RegExp ;

  showToolTip : boolean;

  _errorMsg : string;

  get errorMsg(): string {
    return this._errorMsg;
  }

  @Input('errorMsg')
  set errorMsg(value: string) {
    this.helpInfoMsg = value + '<br/>';
  }

  _minErrorMsg : string;

  get minErrorMsg() : string{
    return this._minErrorMsg;
  }

  @Input('minErrorMsg')
  set minErrorMsg(value : string){
    this.helpInfoMsg = this.helpInfoMsg + '<b>Min Length<b/>: ' + value + '<br/>';
  }

  _maxErrorMsg : string;

  get maxErrorMsg() : string{
    return this._maxErrorMsg;
  }

  @Input('maxErrorMsg')
  set maxErrorMsg(value : string){
    this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + value;
  }


  @Input()   placeholder: string;

  @Input()   disabled: boolean;

  @Input()   iconFeedBack: boolean;

  @Input()   fontStyle: string;

  @Input()   fontFamily: string;

  @Input()   fontSize: string;

  @Input()   hasLabel: boolean = true;

  _pattern : string;

  get pattern() : string{
    return this._pattern;
  }

  @Input('pattern')
  set pattern(value : string){
    if(value!=null)
      this.regEx = new RegExp(this.pattern);
  }

  @Input()   enablePopOver : boolean;

  constructor() {
    this.showToolTip = false;
  }

  // The internal dataviews model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
    this.showToolTip = false;
  }

  onFocus(){
    this.showToolTip = true;
  }
  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}



