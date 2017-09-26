import { Component } from '@angular/core';
import {group} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texts: string[];
  content: string = 'derry';
  contactName: string = "Bill";
  // 这个值是需要从请求或者外部获取的。
  color = 'red';
  bold = true;

  constructor() {
    this.texts = ['Derry老师：2714977534', '阳阳老师：1291718924', '小天老师：1528146396'];
  }

  setStyle() {
      // ngStyle 返回一个对象，key代表样式名称，value样式的值。
      const styles = {
        'font-size': '16px',
        'font-weight': this.bold ? 'bold' : 'normal'
      };
      return styles;
  }

  setClasses() {
    // ngClass 返回一个对象，key代表需要判断的样式名称，value：Boolean,值为true表示该样式激活
    const classes = {
      red: true,
      title : false
    };
    return classes;
  }

  trackByText(index: number, text: string) {
    return text;

  }
}
