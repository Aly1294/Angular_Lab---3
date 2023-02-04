import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImgURL'
})
export class DefaultImgURLPipe implements PipeTransform {

  defaultImg:string="https://fakeimg.pl/250x100/"
  transform(val:string): string {
    
    if(val !=""){
      return val
    }
    else{
      return this.defaultImg
    }
    
  }

}
function nput() {
  throw new Error('Function not implemented.');
}

