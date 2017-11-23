/**
 * Created by ketangote on 11/21/17.
 */

import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const noop = () => {
};

export const CUSTOM_TYPEAHEAD_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TypeAheadComponent),
  multi: true
};

@Component({
  selector : 'amexio-typeahead',
  template : `

    <div class="inputgroup" [attr.id]="elementId">

      <label [attr.for]="elementId" [style.font-style]="fontStyle" [style.font-family]="fontFamily" [style.font-size]="fontSize">
        {{fieldLabel}}
      </label>

      <input type="text" class="input-control "
             (blur)="onBlur()"
             [(ngModel)]="value"
             (blur)="onBlur()"
             (focus)="onFocus()"
             #inp="ngModel"
             [ngClass]="{'input-control-error' : inp.invalid && (inp.dirty || inp.touched),'input-control-success' : inp.valid && (inp.dirty || inp.touched)}"
             [attr.placeholder]="placeholder"
             [attr.disabled] = "disabled ? true: null"
             [attr.required]="!allowBlank"/>

      <span *ngIf="iconFeedBack && (inp.invalid && (inp.dirty || inp.touched) || inp.valid)" class="input-control-feedback">
        <span *ngIf="inp.invalid && (inp.dirty || inp.touched)">&#9888;</span>
        <span *ngIf="inp.valid && (inp.dirty || inp.touched)"> &#10004;</span>

      </span>

      <span *ngIf="showToolTip && enablePopOver" class="tooltiptext">
        <div  [innerHTML]="helpInfoMsg"></div>
      </span>



      <span *ngIf="showToolTip" class="dropdown">
        <ul class="dropdown-list">
          <li class="list-items" *ngFor="let item of filteredResult" (click)="setValue(item[key],inp)"><div>{{item[key]}}</div></li>
        </ul>
      </span>

    </div>


  `,
  providers : [CUSTOM_TYPEAHEAD_CONTROL_VALUE_ACCESSOR],



})
export class TypeAheadComponent implements ControlValueAccessor{

  @Input()   fieldLabel: string;

  @Input()   triggerChar: string;

  @Input()   minLength: number;

  @Input()   maxLength: number;

  @Input()   allowBlank: string;

  @Input()   data: any;

  @Input()   key: any;

  filteredResult: any[] = [];

  helpInfoMsg: string;

  regEx : RegExp ;

  showToolTip : boolean;

  _errorMsg : string;

  get errorMsg(): string {
    return this._errorMsg;
  }

  @Input()   placeholder: string;

  @Input()   disabled: boolean;

  @Input()   iconFeedBack: boolean;

  @Input()   fontStyle: string;

  @Input()   fontFamily: string;

  @Input()   fontSize: string;

  @Input()   hasLabel: boolean = true;

  @Input()   enablePopOver : boolean;

  constructor() {
    this.showToolTip = false;
  }


  setValue(value : any, ref : any){
    this.value = value;
  }

  onKeyUp(event : any){
    this.filteredResult = [];
    let keyword : any = event.target.value;
    if(keyword != null && keyword != ' ' && keyword.length >= this.triggerChar){

      let search_term  = keyword.toLowerCase();
      this.data.forEach(item => {
        if(item != null){
          if(item[this.key].toLowerCase().startsWith(search_term) ){
            this.filteredResult.push( item );
          }
        }
      });
    }

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
