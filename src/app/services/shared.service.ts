import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loginStatus = new BehaviorSubject(false);
  currentLoginStatus$:Observable<boolean>= this.loginStatus.asObservable();


  constructor() { }

  toggleLoginStatus(){
    this.loginStatus.next(!this.loginStatus.value);

  }

}
