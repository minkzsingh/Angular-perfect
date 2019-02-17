import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public _data = [];
  constructor() { 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => this._data.push = data)
    .catch((err) => console.log(err))
  }
}
