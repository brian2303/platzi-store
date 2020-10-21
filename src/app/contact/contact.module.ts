import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module'
import { ContactComponent } from './components/contact/contact.component'
@NgModule({
    // componentes pipes y directivas del modulo
    declarations:[
        ContactComponent
    ],
    imports:[
        CommonModule,
        ContactRoutingModule
    ]
})
export class ContactModule{}