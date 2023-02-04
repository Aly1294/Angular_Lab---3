import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  count:number=0;
  transform(value:number[] , data:number[]): number {
    for (let i =0; i  < data.length;i++) {
      for (let j =0; j  < value.length;j++) {
          if(data[i]==value[j]){
            this.count++ ;
          }
      }
      
    }
    return this.count ;
  }

}
