import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 @Input() product;
  constructor() { }

  ngOnInit() {
  }
  @Output() notify = new EventEmitter();
  // share() {
  //   window.alert('The product has been shared!');
  // }
}
