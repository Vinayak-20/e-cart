import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){

  }

  addProductForm= this.fb.group({

    id: [''], 
    productName: [''],
    categoryId: [''],
    Description:[''],
    price: [''],
    Available: [''],
    productImage:[''],
    Rating: [''],
    Reviews: [''],
    Warranty:['']  

   

  })


  addNewProduct(){
   
   let newProductData={


    id:this.addProductForm.value.id, 
    productName: this.addProductForm.value.productName,
    categoryId: this.addProductForm.value.categoryId,
    Description:this.addProductForm.value.Description,
    price: this.addProductForm.value.price,
    Available: this.addProductForm.value.Available,
    productImage:this.addProductForm.value.productImage,
    Rating: this.addProductForm.value.Rating,
    Reviews: this.addProductForm.value.Reviews,
    Warranty:this.addProductForm.value.Warranty  
   } 



   this.ps.addProduct(newProductData).subscribe((item:any)=>{
       
    alert('product added succesfully')
    this.router.navigateByUrl('product')


   })


  }
}
