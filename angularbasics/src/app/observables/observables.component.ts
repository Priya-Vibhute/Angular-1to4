import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'console';
import { catchError, delay, filter, from, interval, map, mergeAll, Observable, of, retry, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [NgFor],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

   data:any[]=[];

    observable=new Observable((observer)=>{
        setTimeout(()=>{observer.next(1);},1000) 
        setTimeout(()=>{ observer.next(2);},2000)
        setTimeout(()=>{observer.next(3);},3000) 
        setTimeout(()=>{observer.next(4);},4000) 
        setTimeout(()=>{observer.error("Something went wrong")},7500)
        setTimeout(()=>{observer.complete()},5000)
    });

    getData1()
    {
      this.observable.subscribe({
        next:(v)=>{
         this.data.push(v)
        },
        complete:()=>{alert("Data retrieved successfully")},
        error:(err)=>{ console.log(err);
        }
      })
    }

    getData2()
    {
     let observable= of(4,9,"A","B",12)
     observable.subscribe({
      next:(v)=>{this.data.push(v)},
      complete:()=>{console.log("Data retrieved successfully");
      }
     })
    }
    
    getData3()
    {
      from("Hello")
      .subscribe({
        next:(v)=>this.data.push(v)
      })
    }

    getData4()
    {
      let subscribtion_obj=interval(500)
      .subscribe({
        next:(v)=>this.data.push(v)
      })

      setTimeout(()=>{subscribtion_obj.unsubscribe()},10000)
      
    }

    getData5()
    {
      of(1,5,8,12,89)
      .pipe(
        map(n=>n*n),
        filter(n=>n>100)

      )
      .subscribe({
        next:(v)=>{this.data.push(v)}
      })


    }


    getData6()
    {
       of(12,56,45,100)
       .pipe(
          map(x=>of(x)),
          mergeAll()
       )
       .subscribe({
        next:(v)=>{
          this.data.push(v)
          
        }
       })
    }


    getData7()
    {
      of(12,56,23)
      .pipe(
      switchMap(x=>of(x).pipe(delay(2000))),
      )
      .subscribe({
        next:(v)=>{
          this.data.push(v);
          console.log(v); 
        }
      })
    }


    getData8()
    {
        interval(2000)
        .pipe(
          map(x=>{
            if(x==3)
            {
              throw new Error("Something went wrong");
            }
            return x+1
          }),
          retry(2),
          catchError(error=>{
            console.log(error.message);
            return of(23,67,34)
          })
        ).subscribe({
          next:(v)=>this.data.push(v)
        })
    }
}
