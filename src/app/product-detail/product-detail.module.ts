import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsDetailRoutingModule } from './product-detail-routing.module'

@NgModule({
    // componentes pipes y directivas del modulo
    declarations:[
        ProductDetailComponent
    ],
    imports:[
        CommonModule,
        ProductsDetailRoutingModule
    ]
})
export class ProductsDetailModule{}