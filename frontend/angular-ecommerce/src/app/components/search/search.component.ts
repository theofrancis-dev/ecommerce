import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  //inject the router
  constructor(private router: Router) { }

  // file: app.module.ts, define the route:
  // ..path: 'search/ :keyword'...
  // navigateBYUrl : Route the data to our "search" route
  // it will be handled by the "Classname"ListComponent because we
  // want to use the logic and view for listing products

  doSearch( value: string) {
    console.log(`search for :${value}`);
    this.router.navigateByUrl(`/search/${value}`)
  }
}
