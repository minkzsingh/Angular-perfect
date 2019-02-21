import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _fetchData:FetchDataService){
      this.result = _fetchData._data;
  }
saveData(){
  this._fetchData.sendData();
}

  result: any;
  title = 'Angular Developer';
  color = 'yellow';
  show = 0;
  price = 10000;
  date = new Date();
}

