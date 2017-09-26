import {Directive, ElementRef, Input, HostListener, Renderer2, HostBinding, Attribute, Renderer} from '@angular/core';

@Directive({
  // 组件中是 app-root
  selector: '[myColor]'
})
export class MyColorDirective {
  color: string = '#ccc';
  // 别名
/*  @HostBinding('style.color') colors = this.color;
  @HostBinding() innerText = 'Derry';*/


  @Input()
  set myColor(myColor: string){
    console.log(myColor);
    this.el.nativeElement.style.color = myColor;
  }

  // HostListener装饰器DOM元素事件跟指令关联起来
  @HostListener('click') onClick() {
    this.el.nativeElement.style.color = '#ccc';
  }

  // @HostListener('mousemove') move() {
  //   console.log(1);
  // }

  /* 通过依赖注入的方式 */
  constructor(private el: ElementRef, private renderer: Renderer2, @Attribute('author') author: string) {
    console.log(author);
    // 这样子也可以加点击事件。
    // console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.el.nativeElement.style.color = this.color;
  }
}
