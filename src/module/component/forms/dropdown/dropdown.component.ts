/**
 * Created by pratik on 23/11/17.
 */
/**
 * Created by ketangote on 11/21/17.
 */

import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const noop = () => {
};


@Component({
  selector : 'amexio-dropdown',
  template : `

    <div class="inputgroup" [attr.id]="elementId">

      <label [attr.for]="elementId" [style.font-style]="fontStyle" [style.font-family]="fontFamily" [style.font-size]="fontSize">
        {{fieldLabel}}
      </label>


      <input type="text" class="input-control "
             [(ngModel)]="value"
             #inp="ngModel"
             [ngClass]="{'input-control-error' : inp.invalid && (inp.dirty || inp.touched),'input-control-success' : inp.valid && (inp.dirty || inp.touched)}"
             (blur)="onBlur()"
             (focus)="onFocus()"
             [attr.placeholder]="placeholder"
             [attr.disabled] = "disabled ? true: null"
             [required]="allowBlank ? true: null"/>


      <span class="drodown-caret-down">
        <span> &#9660;</span>
      </span>

      <span *ngIf="showToolTip" class="dropdown">
        <ul class="dropdown-list">
          <li class="list-items" *ngFor="let item of data" (click)="value = item[valueField"><div>{{item[displayField]}}</div></li>
        </ul>
      </span>

    </div>


  ` ,



})
export class DropDownComponent{

  @Input()   fieldLabel: string;

  @Input()   minLength: number;

  @Input()   maxLength: number;

  @Input()   allowBlank: string;

  @Input()   placeholder: string;

  @Input()   disabled: boolean;

  @Input()   iconFeedBack: boolean;

  @Input()   fontStyle: string;

  @Input()   fontFamily: string;

  @Input()   fontSize: string;

  @Input()   hasLabel: boolean = true;

  @Input()    displayField : string;

  @Input()    valueField : string;

  @Input()    data : any;




  constructor() {
  }


}
