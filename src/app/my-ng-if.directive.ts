import { Directive , Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective  implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<object>){ 

  }

@Input() set appMyNgIf( isBool: boolean){
  if(isBool){
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }else{
    this.viewContainerRef.clear();
  }
}

  ngOnInit() {
    /*const isBool = true;
      if(isBool){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }*/
  }
}
