import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
productid:any
  productdata: any;
  // productservice:any
constructor(private ar:ActivatedRoute ,private ps:ProductserviceService,private router:Router){}
ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    this.productid=data["id"]
  })
    this.ps.viewProduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
   
  })
}
updateProduct(form:any){
  let updateProduct={
    id:form.value.id ,
    productName:form.value.productName,
    categoryId:form.value.categoryId,
    Description:form.value.Description,
    price:form.value.price,
    Available:form.value.Available,
    productImage:form.value.productImage,
    Rating:form.value. Rating,
    Reviews:form.value.Reviews,
    Warranty:form.value.Warranty 
  }
  this.ps.editeproduct(this.productid,this.productdata).subscribe((data:any)=>{
    alert("product details update")
    this.router.navigateByUrl("product")
  })
}

}
