import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const button = document.querySelector('button');
    Observable.fromEvent(button, 'click')
      .subscribe(() => console.log('click!'));


    // const obs = new Observable(observer => {
    //   // console.log('Observable start');
    //   observer.next(Date.now());
    // }).publish();
    //
    //
    // obs.subscribe(v => console.log("1st subscriber: " + v));
    // obs.subscribe(v => console.log("2nd subscriber: " + v));
    //
    // obs.connect();
  }

}
