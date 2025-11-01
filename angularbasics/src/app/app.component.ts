import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularbasics';

 

  constructor(private authService:AuthService)
  {

  }

  toggleLogin()
  {
    this.authService.toggleLogin()
  }

  isLoggedIn()
  {
    return this.authService.isAuthenticated()
  }
}
