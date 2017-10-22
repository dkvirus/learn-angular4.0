import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http, Headers, Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dataSouce: Observable<any>;

  contacts: Array<any> = [];

  constructor(private _http: Http, private _jsonp: Jsonp) {

    // HTTP GET请求
    this.dataSouce = this._http.get('/contacts').map((res) => res.json());

    // HTTP POST请求
    // const data = {id : 3};
    // const headers = new Headers({'Content-Type': 'application/json'});
    // this.dataSouce = this._http.post('/getContactById', JSON.stringify(data), {headers: headers}).map((res) => [res.json()]);


    // HTTP JSONP请求
    // const params = new URLSearchParams();
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    // this.dataSouce = this._jsonp.get('http://localhost:8000/contactsByJsonp', {search: params}).map((res) => res['_body']);
  }

  ngOnInit() {
   this.dataSouce.subscribe(data => this.contacts = data, error =>  console.log('有错误!'));
    // subscription.unsubscribe();
  }

}
