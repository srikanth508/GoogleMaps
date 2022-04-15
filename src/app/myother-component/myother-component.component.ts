import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-myother-component',
  templateUrl: './myother-component.component.html',
  styleUrls: ['./myother-component.component.css']
})
export class MyotherComponentComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  
  constructor(httpClient: HttpClient) { 
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCyQOGL0nIB0_iXKu4TQU5Fk0jk48NHJ8Y', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );

  }
 
  ngOnInit(): void {

   
    
  }

}
