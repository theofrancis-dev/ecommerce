import { keyframes } from '@angular/animations';
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

  //properties for pagination
  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  previousCategoryId: number = 1;
  previousKeyword: string = "";
    

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
    // if we have a different keyword than previous
    // then set the thePageNumber to 1

    if (this.previousKeyword != KEYWORD) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = KEYWORD;
    console.log(`keyword=${KEYWORD}, Page Number=${this.thePageNumber}`);

    //search forproducts using keyword.
    this.productService.searchProductsPaginate(this.thePageNumber - 1,
      this.thePageSize,
      KEYWORD).subscribe(this.processResult());
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


    //
    // Check if we have a different category than previous
    // Note: Angular will reuse a component if it is currently being viewed
    //

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    // now get the products for the given category id
    this.productService.getProductListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.currentCategoryId)
      .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }  
}
