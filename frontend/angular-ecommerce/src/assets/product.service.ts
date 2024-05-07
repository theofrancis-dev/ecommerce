import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //only retrive 20 by default, use the following if want to get more:
  // private baseUrl = 'http://localhost:8080/api/products?size=100'; 

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  //===========================  SETP 7 =============================================

  getProductList(theCategoryId: number): Observable<Product[]> {

    /** Spring Data REST automatically exposes endpoint
     *  http://localhost:8080/api/products/search/findByCategoryId?id=2
     *  
     * */
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}

