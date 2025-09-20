import { Component, signal } from '@angular/core';
import { Product } from './product/product';
import { Dashboard } from "./dashboard/dashboard";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [Product, Dashboard, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    title="Angular app"
    
}

