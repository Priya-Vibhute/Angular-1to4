import { Component } from '@angular/core';
import { Quotes, QuoteService } from '../../services/quote.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

  quotes!:Quotes;
  queryParams!:any;
  constructor(private quoteService:QuoteService
    ,private activateRoute:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.quoteService.getQuotes()
    .subscribe({
      next:(data)=>{
        this.quotes=data;
      }
    })

    this.activateRoute.queryParams
    .subscribe(
      {
        next:(params)=>this.queryParams=params
        
      }
    )
  }

}
