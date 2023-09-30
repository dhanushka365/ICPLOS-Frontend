import { Component, OnInit } from '@angular/core';
import { Products } from '../shared/models/products';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Products[] = [];
  
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((response:any) => {
      this.products = response.data;
    } , error => {
      console.log(error);
    } );
  }

}
