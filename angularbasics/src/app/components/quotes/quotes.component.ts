import { Component } from '@angular/core';
import { Quotes, QuoteService } from '../../services/quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

  quotes!:Quotes;
  constructor(private quoteService:QuoteService)
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
  }

}
