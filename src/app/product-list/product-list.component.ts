import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  selectedProduct: Product | undefined;

  // private productService: ProductsService;

  constructor(private productService: ProductsService) {
    // this.productService = new ProductsService();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
