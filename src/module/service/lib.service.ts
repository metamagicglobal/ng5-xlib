import { Injectable } from '@angular/core';

@Injectable()
export class LibService {
  isMaterial : boolean;
  constructor() {
    this.isMaterial = false;
  }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }

  setMaterial(){
    this.isMaterial = true
  }
}
