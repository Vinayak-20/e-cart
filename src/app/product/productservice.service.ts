import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  Search= new BehaviorSubject("")

  constructor(private http:HttpClient) { }


  //  http request  view all products

  viewAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }
  
// http request add product

addProduct(newproduct:any){

 return this.http.post("http://localhost:3000/products",newproduct)

}

// to get single product data//

viewProduct(id:any){
  return this.http.get("http://localhost:3000/products/"+id)

   

}

DeleteProduct(id:any){
  return this.http.delete("http://localhost:3000/products/"+id)
  
}

// edit product

editeproduct(id:any,data:any){

   return this.http.put("http://localhost:3000/products/"+id,data)
}


}




  