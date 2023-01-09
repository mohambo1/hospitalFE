import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

     login = true;

     constructor(private sharedService:SharedService){}


  ngOnInit(): void {
    this.sharedService.currentLoginStatus$.subscribe(login=>{
      this.login=login;
    })
  }
    remove(){
      this.login = false
    }


}


