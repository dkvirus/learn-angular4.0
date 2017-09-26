import {forwardRef, Inject, Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }
}


@Injectable()
class Socket {
  constructor(@Inject(forwardRef(() => Buffer))
              private buffer) { }
}

class Buffer {
  constructor(private size: Number) { }
}

