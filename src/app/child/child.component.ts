import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() model: FormControl;
  @Input() values = [];
  @Input() text = 'Select All';

  constructor() { }

  ngOnInit(): void {
  }
  toggleSelection(change: any){
    console.log(change, 'change');

    if(change.checked){
      this.model.setValue(this.values);
    }
    else {
      this.model.setValue([]);
    }
  }

}
