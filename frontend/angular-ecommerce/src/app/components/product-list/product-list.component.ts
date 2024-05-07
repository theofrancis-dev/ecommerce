import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css']
})

export class ProductListComponent implements OnInit {

  //set property, array of Product
  products: Product[] = [];
  currentCategoryId: number = 1;    // -------------->   step 5
  searchMode: boolean = false;

  //inject our ProductService
  constructor(private productService: ProductService,
    // inject the activated routed.
    // The current active route that loaded the component.
    // Useful for accessing route parameters.
    private route: ActivatedRoute)   
  {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProduct();
    }
  }

  handleSearchProducts() {
    const KEYWORD: string = this.route.snapshot.paramMap.get('keyword')!;
    //search forproducts using keyword.
    this.productService.searchProducts(KEYWORD).subscribe(
      data => {
        this.products = data;
      }    )

  }

  handleListProduct() {
    //check if "id" parameter is available
    // route : use tha activated route
    // snapshop : state of the route at this given moment in time
    // paramMap : Map of al lthe route parameters
    // has('id') : read the id parameter

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to number
      //using the "+" symbol to convert to a number.
      // ! at the ends is a non-null assertion operator. Tells compiler that the object is not null
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;

    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      })
  }
}
