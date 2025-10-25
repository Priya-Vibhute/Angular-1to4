import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  providers:[CategoryService]
})
export class ServiceComponent {

  products:any[]=[]
  categories:any[]=[]

  categoryService=inject(CategoryService)

  constructor(private productService:ProductService)
  {
    this.products=productService.getProducts()
  }
  
  getProductById(id:number)
  {
    this.products=this.productService.getProductById(id)
  }

  getCategories()
  {
    this.categories=this.categoryService.getCategories()
  }
   





  
}
