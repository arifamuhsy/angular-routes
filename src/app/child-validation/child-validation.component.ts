import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-validation',
  templateUrl: './child-validation.component.html',
  styleUrls: ['./child-validation.component.css']
})
export class ChildValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects = [
    {
      hobi: 'Gaming',
    },
    {
      hobi: 'Musik',
    },
    {
      hobi: 'Olahraga',
    },
    {
      hobi: 'Membaca',
    },
    {
      hobi: 'Menari',
    },
  ];

  form_select_all = new FormGroup({
    project: new FormControl(this.projects),
  });



}
