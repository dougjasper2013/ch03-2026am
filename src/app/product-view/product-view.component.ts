import { Component, input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  id = input<number>();

  constructor(private productViewService: ProductViewService) {}

  ngOnInit(): void {
    
  }
}
