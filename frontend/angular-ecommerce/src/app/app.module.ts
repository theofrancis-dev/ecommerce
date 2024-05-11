import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarStatusComponent } from './components/car-status/car-status.component';


/** ============== 1 STEP =============================
 * path: 'category/:id', component: ProductListComponent
 * category/:id = Path to match
 * When path matches, create a new instance of component
 *
 * Order of routes is important. First match wins.
 * */

const routes: Routes = [
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  //when rules doesnt appy
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //** generic wildcard, match onanything that didnt mach above
  // we canput the page 404 here
  // { path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/products', pathMatch: 'full'},

];


//============ STEP 2 === add route in import section

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
    CarStatusComponent
  ],

  imports: [
    RouterModule.forRoot( routes ),
    BrowserModule,    
    HttpClientModule,
    NgbModule         //ng-boostrap module
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//============ STEP 3 === define router oulet at src/app/app.component.html
