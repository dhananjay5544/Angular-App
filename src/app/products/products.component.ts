import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../services/product.service';
import { ProductsItem } from './Product';

const PRODUCT_DATA: ProductsItem[] = [];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    '_id',
    'name',
    'categories',
    'tags',
    'price',
    'quantity',
    'isActive',
  ];
  dataSource = new MatTableDataSource<ProductsItem>(PRODUCT_DATA);
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductData();
  }
  public getProductData() {
    this.productService.getProducts().subscribe((response) => {
      this.dataSource.data = response['data'] as ProductsItem[];
      console.log(this.dataSource.data);
    });
  }
}
