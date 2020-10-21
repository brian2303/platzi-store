import { 
    Component,
    Input,
    Output,
    EventEmitter
    ,OnChanges, 
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core'

import { IProduct } from './product.model'

@Component({
    selector: 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent implements DoCheck,OnInit,OnDestroy{

    today:Date = new Date();
    @Input() product:IProduct;
    @Output() productClicked:EventEmitter<any> = new EventEmitter();

    constructor(){
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
        this.productClicked.emit(this.product.id);
    }
}