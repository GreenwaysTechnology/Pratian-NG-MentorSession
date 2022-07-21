import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log('high light directive is working')
    console.log(element.nativeElement)
  }
  @HostListener('mouseenter')
  public onMouseEnter() {
    this.element.nativeElement.style.cursor = 'help'
    this.element.nativeElement.style.fontSize = "x-large";
  }
  @HostListener('mouseleave')
  public onMouseLeave() {
    this.element.nativeElement.style.fontSize = "x-small";
  }

}
