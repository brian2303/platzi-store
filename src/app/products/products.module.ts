import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module'
import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component'

@NgModule({
    // componentes pipes y directivas del modulo
    declarations:[
        ProductsComponent,
        ProductComponent
    ],
    imports:[
        CommonModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule{}