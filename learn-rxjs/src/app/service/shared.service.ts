import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  list: string[] = [];

  append(str: string) {
    this.list.push(str);
  }
  constructor() { }
}
