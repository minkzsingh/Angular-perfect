import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
public result ;
  constructor( private _fetchData: FetchDataService) { }
    
  ngOnInit() {
    this.result = this._fetchData._data;
  }

}
