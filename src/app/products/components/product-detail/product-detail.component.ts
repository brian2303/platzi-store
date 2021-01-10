import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router'
import { IProduct } from '../../../products/components/product/product.model';
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product:IProduct;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      const id = params.id;
      this.fetchProduct(id);
    });
    
  }

  fetchProduct(id:string){
    this.productService.getProduct(id)
    .subscribe(product =>{
      this.product = <IProduct> product;
    })
  }

  createProduct(){
    let newProduct:IProduct = {
      "id":"12",
      "image": "assets/images/hoodie.png",
      "title": "Chaqueta",
      "price": 80000,
      "description": "chaqueta platzi"
    }
    this.productService.createProduct(newProduct)
    .subscribe(product =>{});
  }

  updateProduct(){
    const newProduct:Partial<IProduct> = {
      "title":"chaqueta modificada",
      "price": 543012
    }
    this.productService.updateProduct('4',newProduct)
    .subscribe();
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id);
  }
}