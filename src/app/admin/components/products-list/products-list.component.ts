import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/components/product/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[];
  displayedColumns: string[] = ['id', 'title','price','actions'];
  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }

  eliminarProducto(id:string){
    this.productsService.deleteProduct(id)
      .subscribe();
    let idx:number = this.products.findIndex(product => product.id == id);
    this.products.splice(idx,1);
    this.products = [...this.products];
  }
}
