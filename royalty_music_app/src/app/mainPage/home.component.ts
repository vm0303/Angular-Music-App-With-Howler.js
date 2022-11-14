
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string ="Vishal Madhav";
  test: boolean=false;
  classes = {blue: false, red: true, yellow: false, underline: true};



  constructor() { }

  toggleTest = () => {
    this.test = !this.test;
  }

  ngOnInit(): void {
  }
}
