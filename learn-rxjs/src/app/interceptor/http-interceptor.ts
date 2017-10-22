import { Injectable } from '@angular/core';
import { Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor {

  // 请求发出前的处理逻辑
  beforeRequest(req: Request) {
    // do whatever you want
    console.log(req);
    return req;
  }

  // 请求响应后的处理逻辑
  afterResponse(res: Observable<Response>): Observable<any> {
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }
}
