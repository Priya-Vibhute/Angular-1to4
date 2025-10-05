import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[
    {id:101,name:"Laptop"},
    {id:102,name:"Mobile"},
    {id:103,name:"Tablet"}
  ]


  getProducts()
  {
    return this.products;
  }

  getProductById(id:number)
  {
   return this.products.filter(p=>(p.id==id))
  }

  addProduct(product:any)
  {
   this.products=[...this.products,product]
  }
}
