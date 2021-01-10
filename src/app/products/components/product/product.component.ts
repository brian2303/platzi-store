import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core'
import { from } from 'rxjs';

import { IProduct } from './product.model'
import { CartService } from '../../../core/services/cart/cart.service'
@Component({
    selector: 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent implements DoCheck,OnInit,OnDestroy{

    today:Date = new Date();
    @Input() product:IProduct;
    @Output() productClicked:EventEmitter<any> = new EventEmitter();

    constructor(
        private cartService:CartService
    ){
        console.log('1.constructor');
    }

    // ngOnChanges(changes:SimpleChanges){
    //     console.log('2.ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit(){
        // En este metodo se hacen llamadas a servicios rest
        console.log('3.ngOnInit');
    }

    ngDoCheck(){
        // Detecta cambios en el componente
        console.log('ngDoCheck');
    }

    ngOnDestroy(){
        // este metodo es ejecutado cuando se remueve desde la interfaz un componente
        console.log('ngOnDestroy');
    }

    addCart(){
        console.log('Añadido al carrito');
        //this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}