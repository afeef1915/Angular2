import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';


let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  
  selector: 'app-material-theme',
  templateUrl: './material-theme.component.html',
  styleUrls: ['./material-theme.component.css']
})
export class MaterialThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
