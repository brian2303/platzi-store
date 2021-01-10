import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { ProductsService } from '../../../core/services/products/products.service'
import { Router } from '@angular/router'
import { MyValidators } from '../../../utils/validators'
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router
  ) { 
    this.buildForm();
  }

  form:FormGroup;

  ngOnInit(): void {
  }

  saveProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      this.productsService.createProduct(this.form.value)
      .subscribe(rta => {
        console.log(rta);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      title:['',[Validators.required]],
      price:[0,[Validators.required,MyValidators.isPriceValid]],
      image:[''],
      description:['',[Validators.required]]
    })
  }

}
