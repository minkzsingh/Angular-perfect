import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  red = "colorRed";
  green = "colorGreen";
  show: boolean = true;
  inlineColor = {
    'color': 'blue',
    'font-size':'30px',
    'position':'center'
  }
  showView:number = 0;
  fcolor = '';
  colorChnge(val){
    this.fcolor = val;
  }
  size:number = 10;
  constructor() { }

  ngOnInit() {
  }

  changeClick(){
    this.show = !this.show;
  }

}
