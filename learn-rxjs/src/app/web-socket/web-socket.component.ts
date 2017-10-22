import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../service/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css'],
  providers: [WebSocketService]
})
export class WebSocketComponent implements OnInit {

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8085').subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('流已经结束')
    );
  }

  sendMessageToService() {
    this.wsService.sendMessage('你好服务器');
  }
}
