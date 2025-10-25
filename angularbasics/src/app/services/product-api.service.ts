import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Products
{
  products:{
    id:number,
    title:string,
    category:string,
    price:number,
    tags:string[],
    images:string[]
    }[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private httpClient:HttpClient) { }

  getProducts()
  {
     return this.httpClient.get<Products>('https://dummyjson.com/products');
  }
}
