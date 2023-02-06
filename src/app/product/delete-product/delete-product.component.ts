import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

 deltid:any
  
  constructor(private am:ActivatedRoute,private ps:ProductserviceService,private router:Router){ }

  ngOnInit():void {

   this.am.params.subscribe((data:any)=>{
    this.deltid=data["id"]

   })

  this.ps.DeleteProduct(this.deltid).subscribe((data:any)=>{

alert('product deleted')
this.router.navigateByUrl("product")


  })


  }

}
