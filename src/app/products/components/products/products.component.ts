import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/product.model'
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService:ProductsService

  ) {}

  public products:IProduct [] = [];

  //en este metodo hacemos la llamada a servicios.
  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProducto(id:number){
    console.log('product');
    console.log(id);
  }
  //me trae todos los productos del webService
  fetchProducts(){
    this.productService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    })
  }
}
