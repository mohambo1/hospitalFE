import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private sharedService:SharedService){}

changeLoginStatus(){
  this.sharedService.toggleLoginStatus();
}


}

