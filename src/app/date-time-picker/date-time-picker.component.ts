import { Component, OnInit,  Input,  forwardRef,  ViewChild, AfterViewInit,  Injector } from '@angular/core';
import {
  NgbTimeStruct,
  NgbDateStruct,
  NgbPopoverConfig,
  NgbPopover,
  NgbDatepicker
} from "@ng-bootstrap/ng-bootstrap";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NgControl
} from "@angular/forms";
import { DatePipe } from "@angular/common";
import { DateTimeModel } from "src/app/date-time.model";
import { noop } from "rxjs";

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
