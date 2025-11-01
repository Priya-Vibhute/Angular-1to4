import { Component } from '@angular/core';
import {ProductAPIService, Products } from '../../services/product-api.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-product-api',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductAPIComponent {

  products!:Products;
 
  constructor(private productService:ProductAPIService)
  {
      
  }

  ngOnInit()
  {
    this.productService.getProducts()
    .subscribe({
      next:(data)=>{
        this.products=data;
      }
    })
  }


}
