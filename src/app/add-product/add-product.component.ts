import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  pcode=""
  pname=""
  mdate=""
  edate=""
  brand=""
  price=""
  sname=""
  dname=""

  // constructor(private api:ApiService){}
  
  readValues=()=>
  {
    let data:any={"pcode":this.pcode,"pname":this.pname,"mdate":this.mdate,"edate":this.edate,"brand":this.brand,"price":this.price,"sname":this.sname,"dname":this.dname}
    console.log(data)
    // this.api.addCourse(data).subscribe(
    //   (response:any)=>
    //   {
    //     console.log(response)
    //     if (response.status == "success") {

    //       alert("Course added successfully")
  
    //       this.pcode=""
  
    //       this.pname=""
  
    //       this.mdate=""
  
    //       this.edate=""
  
    //       this.brand=""
    //       this.price=""
    //       this.sname=""
    //       this.dname=""
  
    //     } else {
  
    //       alert("Something went wrong")
  
    //     }
    //   }
    // )
  }



}
