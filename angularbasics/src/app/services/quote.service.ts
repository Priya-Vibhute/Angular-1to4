import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Quotes
{
   quotes:{id:number,quote:string,author:string}[]
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient:HttpClient) { }

  getQuotes()
  {
    return this.httpClient.get<Quotes>('https://dummyjson.com/quotes');
  }
}
