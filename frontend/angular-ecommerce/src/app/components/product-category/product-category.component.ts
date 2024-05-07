import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})

export class ProductCategoryComponent implements OnInit {

  // autogerate sugestion:  Classname_list
  //define our property
  allProductCategory: ProductCategory[] = [];

  //inject the service
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategory();
  }


  listProductCategory() {

    this.productService.getAllProductCategory().subscribe(
      data => {
        console.log('Product Category=' + JSON.stringify(data));//log data return from the service
        this.allProductCategory = data;
      }
    );
  }

}
