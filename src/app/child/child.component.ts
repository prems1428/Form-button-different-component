import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit,Output,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() getVal:any;
@Output() displayVal  = new EventEmitter<void>();

childSub(){
      this.displayVal.emit();
    }
 
  }
  



