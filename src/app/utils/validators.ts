import { AbstractControl } from '@angular/forms'
export class MyValidators{

    static isPriceValid(control:AbstractControl){
        const value = control.value;
        console.log(value);
        if(value<100||value>10000){
            return {
                price_invalid:true
            };
        }
        return null;
    }
}