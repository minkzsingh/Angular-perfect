import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public _data = [];
  constructor(private _http:HttpClient) {  
  _http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(result => this._data.push(result),
                err => console.log(err),
                ()  => console.log('fetching done')
          )
  }
  sendData(){
    this._http.post("https://jsonplaceholder.typicode.com/posts",{
      "title":"this is titlesas",
      "body":"this is bodysasa",
      "new":"this is new"
    })
    .subscribe(result => console.log(result), err => console.log(err),    
                () => console.log("post done"));
  }
  
  
    /*  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => this._data.push = data)
    .catch((err) => console.log(err))
  }*/
}
