import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {IProduct } from '../../../products/components/product/product.model'
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) {}


  
  getAllProducts(){
    return this.http.get<IProduct[]>(`${environment.url_api}/products`);
  }

  getProduct(id:string){
    return this.http.get(`${environment.url_api}/products/${id}`);
  }

  // para enviar datos por medio de post en el segundo parametro debemos especificar que enviaremos
  createProduct(product:IProduct){
    return this.http.post(`${environment.url_api}/products`,product);
  }

  updateProduct(id:string,changes:Partial<IProduct>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }

  deleteProduct(id:string){
    return  this.http.delete(`${environment.url_api}/products/${id}`);
  }
}