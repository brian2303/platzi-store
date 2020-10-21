import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found.component'
import { PageNotFoundRoutingModule } from './pagenotfound-routing.module'

@NgModule({
    // componentes pipes y directivas del modulo
    declarations:[
        PageNotFoundComponent
    ],
    imports:[
        CommonModule,
        PageNotFoundRoutingModule
    ]
})
export class PageNotFoundModule{}