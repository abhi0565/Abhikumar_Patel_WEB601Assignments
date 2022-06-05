import {Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  @Input() defaultColor:string="";  
  @Input() highlightColor:string="";  
   
@HostBinding('style.border') border:string=this.defaultColor;  
 
  constructor( private eleRef:ElementRef){}  
  
  @HostListener('mouseover') mouseover(eventData:Event){  
      this.border=this.highlightColor;  
     // this.eleRef.nativeElement.style.color="White";  
  }  
 
  @HostListener('mouseleave') mouseleave(eventData:Event){  
      this.border=this.defaultColor;  
      //this.eleRef.nativeElement.style.color="Black";  
  } 
}

  

