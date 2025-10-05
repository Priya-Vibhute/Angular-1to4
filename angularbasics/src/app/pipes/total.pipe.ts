import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: unknown, ...args:number[]): unknown {
    let sum=args[0]+args[1]+args[2];
    return `${value} has got ${sum}`;
  }

}
