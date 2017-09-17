import { Component, OnInit, ViewChild} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  @ViewChild(OrderComponent) order: OrderComponent;
  stock = "";

  priceQuote: PriceQuote = new PriceQuote("", 0);

  constructor() {
  }

  ngOnInit() {
    console.log("我是在父组件来打印这句话的：" + this.order.names);
  }

  buyHandler(event: PriceQuote) {
    this.priceQuote = event ;
  }

}
