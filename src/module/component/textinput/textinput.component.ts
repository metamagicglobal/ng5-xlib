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
export class AmxTextComponent extends FormInputBase implements OnInit, ControlValueAccessor, AfterViewInit {
  constructor() {
    super();
    this.elementId = 'input-text-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngOnInit() {
    if (this.errorMsg) {
      this.helpInfoMsg = this.errorMsg + '<br/>';
    }

    if (this.minErrorMsg) {
      this.helpInfoMsg = this.helpInfoMsg + '<b>Min Length<b/>: ' + this.minErrorMsg + '<br/>';
    }


    if (this.maxErrorMsg) {
      this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
    }

    if (this.pattern != null) {
      this.regEx = new RegExp(this.pattern);
    }


  }

  ngAfterViewInit(){

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
    this.validate();
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


  isValidInput() : any {
    let hasError = false;
    let valueLength = 0;

    if(this.value != null) {
      valueLength = this.value.length;
    }

    if((this.allowBlank && (!this.value || valueLength==0))){
      hasError = true;
    }else if(this.pattern != null && !this.regEx.test(this.value)){
      hasError = true;
    }
    else if(this.minLength > valueLength){
      hasError = true;
    }else if(this.maxLength < valueLength){
      hasError = true;
    }

    this.error = hasError;
    this.success = !hasError;

    return hasError;
  }
}


