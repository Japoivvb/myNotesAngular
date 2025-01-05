import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template: '<h1>{{title}}</h1>',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "My First Angular"

  constructor(private loginService:LoginService){

  }

  isLogged(){
    return this.loginService.islogged();
  }

  logout(){
    this.loginService.logout();
  }

}
