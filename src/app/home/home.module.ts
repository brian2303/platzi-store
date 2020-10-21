import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component'
import { HomeComponent } from './components/home/home.component'
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
    // componentes pipes y directivas del modulo
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule{}