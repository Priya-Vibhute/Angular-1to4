import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';


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
  id:any;

  categoryService=inject(CategoryService)

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute)
  {
    this.products=productService.getProducts()
  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe({
      next:(value)=>this.id=value["id"]
    })
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
