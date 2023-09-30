import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './models/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICPLOS-Frontend';
  products: products[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<products[]>('https://localhost:7184/api/products').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    });
  }
}