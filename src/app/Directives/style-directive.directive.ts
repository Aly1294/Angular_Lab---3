import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[StyleDirective]'
})
export class StyleDirectiveDirective {

  constructor(private elemRef:ElementRef) { 
    elemRef.nativeElement.style.padding="1rem"
    elemRef.nativeElement.style.color="darkblue"
    elemRef.nativeElement.style.fontWeight="bold"
    elemRef.nativeElement.style.border="2px solid darkblue"
    elemRef.nativeElement.style.borderRadius="0.5rem"
    elemRef.nativeElement.style.backgroundColor="Orange"

  }
  @HostListener("mouseenter") onMouseEnter(){
    this.elemRef.nativeElement.style.backgroundColor="lightYellow"
  } 
  @HostListener("mouseout") onMouseOut(){
    this.elemRef.nativeElement.style.backgroundColor="Orange"
  } 

}
