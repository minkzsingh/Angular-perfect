import { Directive, ElementRef, Input, OnInit , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit{
@Input() appHighLighter;
  constructor(private el: ElementRef) { }

   ngOnInit() {
      this.el.nativeElement.style.backgroundColor = this.appHighLighter;
   }

   @HostListener('mouseenter') mouseenter() {
     this.el.nativeElement.style.backgroundColor = 'green';
     this.el.nativeElement.style.color = 'white';
   }

   @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundColor = this.appHighLighter;
    this.el.nativeElement.style.color = '';
  }
}
