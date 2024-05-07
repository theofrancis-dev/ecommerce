import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';
    

  constructor(private httpClient: HttpClient) { }

  getProduct(productId: number):Observable<Product>  {
    //build the url base on prorcut id
    const productUlr = `${this.baseUrl}/${productId}`;
    return this.httpClient.get<Product>(productUlr);
  }

  getProductList(_id: number): Observable<Product[]> {
    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${_id}`;
    return this.getAllProduct(searchUrl);
  }

  searchProducts(_keyword: string): Observable<Product[]> {
    // need to build URL based on keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${_keyword}`;
    return this.getAllProduct(searchUrl);
  }

  getAllProduct(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getAllProductCategory(): Observable<ProductCategory[]> {

    //Call REST API
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
      //returns an observable. Maps the JSON data from Spring Data REST
      //to "Classname" array.
    );
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

//Unwraps the JSON from Spring Data REST _embedded entry.
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
